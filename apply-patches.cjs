#!/usr/bin/env node
/**
 * Applies the bundled Lexical patches via patch-package.
 *
 * Runs in two contexts:
 * 1. Local development checkout — patches apply to this package's own
 *    node_modules.
 * 2. Installed as a dependency of a host project — npm hoists lexical to the
 *    host's node_modules, so patch-package must run from the host project
 *    root with --patch-dir pointing back at this package's patches directory.
 *    Running it from this package's own directory would look for
 *    node_modules/@bsf/force-ui/node_modules/lexical, which doesn't exist.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const { spawnSync } = require( 'child_process' );

const pkgDir = __dirname;
const patchDir = path.join( pkgDir, 'patches' );

if ( ! fs.existsSync( patchDir ) ) {
	process.exit( 0 );
}

const segments = pkgDir.split( path.sep );
const nmIndex = segments.lastIndexOf( 'node_modules' );
const appRoot =
	nmIndex === -1
		? pkgDir
		: segments.slice( 0, nmIndex ).join( path.sep ) || path.sep;

let patchPackageBin;
try {
	const manifestPath = require.resolve( 'patch-package/package.json', {
		paths: [ appRoot, pkgDir ],
	} );
	const manifest = JSON.parse( fs.readFileSync( manifestPath, 'utf8' ) );
	const binEntry =
		typeof manifest.bin === 'string'
			? manifest.bin
			: manifest.bin[ 'patch-package' ];
	patchPackageBin = path.join( path.dirname( manifestPath ), binEntry );
} catch ( error ) {
	// patch-package is unavailable; skip rather than break the host install.
	process.exit( 0 );
}

const result = spawnSync(
	process.execPath,
	[ patchPackageBin, '--patch-dir', path.relative( appRoot, patchDir ) ],
	{ cwd: appRoot, stdio: 'inherit' }
);

process.exit( result.status === null ? 1 : result.status );
