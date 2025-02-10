import gulp from 'gulp';
import replace from 'gulp-replace';
import inquirer from 'inquirer';
import { exec } from 'child_process';

/* eslint-disable no-console */

function updateVersion( newVersion ) {
	// Update README.md - handle both dependency formats
	gulp.src( './README.md' )
		.pipe(
			replace(
				/@bsf\/force-ui@git\+https:\/\/github\.com\/brainstormforce\/force-ui\.git#[0-9]+\.[0-9]+\.[0-9]+/g,
				`@bsf/force-ui@git+https://github.com/brainstormforce/force-ui.git#${ newVersion }`
			)
		)
		.pipe(
			replace(
				/@bsf\/force-ui": "git\+https:\/\/github\.com\/brainstormforce\/force-ui#[0-9]+\.[0-9]+\.[0-9]+/g,
				`@bsf/force-ui": "git+https://github.com/brainstormforce/force-ui#${ newVersion }`
			)
		)
		.pipe( gulp.dest( './' ) );

	// Update package.json
	gulp.src( './package.json' )
		.pipe(
			replace(
				/"version": "[0-9]+\.[0-9]+\.[0-9]+"/,
				`"version": "${ newVersion }"`
			)
		)
		.pipe( gulp.dest( './' ) );

	// Update version.json
	gulp.src( './version.json' )
		.pipe(
			replace(
				/"force-ui": "[0-9]+\.[0-9]+\.[0-9]+"/,
				`"force-ui": "${ newVersion }"`
			)
		)
		.pipe( gulp.dest( './' ) );
}

// Bump version in all files
gulp.task( 'bump-and-update', function( done ) {
	// Get the new version from the command line
	let newVersion = process.argv[ 3 ];

	// If the version is not provided as an argument, prompt for it
	if ( ! newVersion ) {
		inquirer
			.prompt( [
				{
					type: 'input',
					name: 'version',
					message: 'Enter the new version:',
				},
			] )
			.then( ( answers ) => {
				newVersion = answers.version;
				updateVersion( newVersion );
				done();
			} );
	} else {
		updateVersion( newVersion );
		done();
	}
} );

// Update package-lock.json
gulp.task( 'update-package-lock', function( done ) {
	exec( 'npm i', ( error, stdout, stderr ) => {
		if ( error ) {
			console.error( `Error: ${ error.message }` );
			done( error );
			return;
		}
		if ( stderr ) {
			console.error( `stderr: ${ stderr }` );
		}
		console.log( `stdout: ${ stdout }` );
		done();
	} );
} );

// Bump version and update package-lock.json
gulp.task( 'bump', gulp.series( 'bump-and-update', 'update-package-lock' ) );
