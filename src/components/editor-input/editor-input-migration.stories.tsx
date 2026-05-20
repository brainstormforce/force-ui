import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * # EditorInput — Migration & Changelog
 *
 * This page documents the changes that landed in `@bsf/force-ui` **1.8.0**
 * and how they affect codebases that were using `EditorInput` from **1.7.x**
 * or earlier.
 *
 * ---
 *
 * ## TL;DR
 *
 * The editor engine was swapped from **Lexical** to **TipTap**. Three public
 * surfaces changed shape:
 *
 * | Surface          | Before (Lexical, ≤ 1.7.x)                 | After (TipTap, ≥ 1.8.0)                    |
 * | ---------------- | ----------------------------------------- | ------------------------------------------ |
 * | `defaultValue`   | Lexical `EditorState` JSON string         | Plain text + `@[Label](id)` mention markup |
 * | `onChange` arg 1 | `EditorState` — call sites do `.toJSON()` | `markup: string`                           |
 * | `ref.current`    | `LexicalEditor` instance                  | TipTap `Editor` instance                   |
 *
 * A one-prop backward-compat shim is available so existing code keeps
 * working unchanged. See **Migration paths** below.
 *
 * ---
 *
 * ## What changed in 1.8.0
 *
 * ### 🚨 Breaking — `defaultValue` shape
 *
 * `defaultValue` no longer accepts Lexical's `EditorState` JSON. The new
 * format is a plain string with inline mention markup:
 *
 * ```jsx
 * // Before
 * <EditorInput defaultValue={ JSON.stringify( { root: { children: [...] } } ) } />
 *
 * // After
 * <EditorInput defaultValue="Employee name: @[Catherine](3)" />
 * ```
 *
 * ### 🚨 Breaking — `onChange` first argument
 *
 * The first argument is now the serialized markup string, not an
 * `EditorState` object:
 *
 * ```diff
 * - onChange={ ( editorState ) => save( editorState.toJSON() ) }
 * + onChange={ ( markup ) => save( markup ) }
 * ```
 *
 * The second argument (`editor`) is now a TipTap `Editor`, not a
 * `LexicalEditor`.
 *
 * ### 🚨 Breaking — `ref.current`
 *
 * `ref.current` is now a TipTap `Editor`. The Lexical API
 * (`getEditorState`, `update`, etc.) is no longer available directly.
 *
 * ```jsx
 * // Before
 * editorRef.current.getEditorState().toJSON();
 * editorRef.current.update( () => { } );
 *
 * // After
 * editorRef.current.getJSON();        // ProseMirror JSON
 * editorRef.current.commands.focus();
 * editorRef.current.commands.clearContent();
 * editorRef.current.isEmpty;
 * ```
 *
 * ### ✨ New — `valueFormat` prop (backward-compat shim)
 *
 * A new opt-in prop preserves the 1.7 IO contract for a release. Defaults
 * to `'markup'` (the new behavior).
 *
 * ```jsx
 * <EditorInput
 *     valueFormat="lexical"
 *     defaultValue={ storedLexicalJsonString }
 *     onChange={ ( editorState ) => save( editorState.toJSON() ) }
 * />
 * ```
 *
 * With `valueFormat="lexical"`:
 *
 * - `defaultValue` is parsed as Lexical `EditorState` JSON.
 * - `onChange`'s first argument is a synthetic `LegacyEditorState` with
 *   `.toJSON()` (returns Lexical-shaped JSON) and `.read( fn )`.
 * - `ref.current.legacy` is available with `getEditorState`, `focus`, and
 *   `update`.
 *
 * Every deprecated surface fires a one-time dev-only `console.warn`. The
 * shim will be **removed in 2.0** — schedule a one-time data migration.
 *
 * ### ✨ New — Converter utilities
 *
 * Exported from the package root for one-time data migrations:
 *
 * ```js
 * import {
 *     lexicalToMarkup,
 *     markupToLexical,
 *     lexicalJSONToTipTapDoc,
 *     tipTapDocToLexicalJSON,
 * } from '@bsf/force-ui';
 *
 * const markup = lexicalToMarkup( storedLexicalJsonString );
 * // → "Employee name: @[Catherine](3)"
 *
 * const lexicalJSON = markupToLexical( markup );
 * ```
 *
 * ### ✨ New — `multiline` prop
 *
 * Defaults to `true`. Set to `false` to swallow the Enter key instead of
 * inserting a newline (single-line input behavior).
 *
 * ### 🐛 Fix — Empty-label guard in mention filter (restored in 1.8.0)
 *
 * The 1.7 Lexical lookup excluded object options whose `[by]` field was
 * empty, `null`, `undefined`, or missing — those options never appeared in
 * the dropdown. This guard was missing in the initial TipTap rewrite (so
 * blank rows showed up when the query was empty) and has been restored.
 *
 * ### 🐛 Fix — Placeholder alignment
 *
 * The placeholder previously used `absolute inset-0 flex items-center`,
 * which made it vertically center over the entire editor area. When the
 * editor grew (auto-height, taller wrappers, etc.) the placeholder
 * drifted to the middle while the caret stayed on the first line. The
 * placeholder is now pinned to the top and mirrors the empty `<p>`'s
 * vertical positioning, so its text aligns with the caret regardless of
 * the editor's overall height.
 *
 * ### 🗑️ Removed — Rich-text metadata on text nodes
 *
 * The 1.7 Lexical text nodes tracked `format`, `style`, `detail`, and
 * `mode` fields, but the editor surface never let users apply rich
 * formatting. The new markup form preserves the plain text only. If you
 * relied on this metadata, file an issue before upgrading.
 *
 * ---
 *
 * ## Migration paths
 *
 * ### Path A — Drop-in compat (zero code change, deprecated)
 *
 * Add `valueFormat="lexical"` to every `<EditorInput>` and keep your
 * existing `defaultValue` JSON and `onChange( s => s.toJSON() )`
 * callbacks. This is the shortest path; logs a one-time deprecation
 * warning in development. Removed in 2.0.
 *
 * ```jsx
 * <EditorInput
 *     valueFormat="lexical"
 *     defaultValue={ storedLexicalJsonString }
 *     onChange={ ( editorState ) => save( editorState.toJSON() ) }
 *     options={ options }
 * />
 * ```
 *
 * ### Path B — One-time data migration (recommended)
 *
 * Convert stored Lexical JSON to markup once (e.g., in a DB migration or
 * a data-load step) and remove `valueFormat="lexical"` entirely.
 *
 * ```js
 * import { lexicalToMarkup, markupToLexical } from '@bsf/force-ui';
 *
 * // Read side: Lexical JSON in the DB → markup in the UI
 * const markup = lexicalToMarkup( storedLexicalJsonString );
 *
 * // Write side (if you must keep Lexical in the DB during transition):
 * const lexicalJSON = markupToLexical( "Employee name: @[Catherine](3)" );
 * ```
 *
 * Then update call sites:
 *
 * ```diff
 * - defaultValue={ storedLexicalJsonString }
 * - onChange={ ( editorState ) => save( editorState.toJSON() ) }
 * + defaultValue={ migratedMarkupString }
 * + onChange={ ( markup ) => save( markup ) }
 * ```
 *
 * ---
 *
 * ## Ref usage
 *
 * `ref.current` is the TipTap `Editor` in both modes. It is `null` until
 * TipTap has initialized — read it from event handlers or `useEffect`,
 * not during render.
 *
 * ```jsx
 * import { useRef, useEffect } from 'react';
 * import { EditorInput } from '@bsf/force-ui';
 *
 * function MyForm() {
 *     const editorRef = useRef( null );
 *
 *     useEffect( () => {
 *         if ( editorRef.current ) {
 *             editorRef.current.commands.focus();
 *         }
 *     }, [] );
 *
 *     return <EditorInput ref={ editorRef } options={ options } />;
 * }
 * ```
 *
 * With `valueFormat="lexical"`, the same ref also exposes a `legacy`
 * namespace mirroring the Lexical methods most commonly used at call
 * sites:
 *
 * ```jsx
 * editorRef.current.legacy.getEditorState().toJSON();
 * editorRef.current.legacy.focus();
 * editorRef.current.legacy.update( () => { } );
 * ```
 *
 * The `legacy` namespace is deprecated and removed in 2.0. Anything
 * outside of those three methods is a hard break — migrate to TipTap
 * commands.
 *
 * ---
 *
 * ## Removal timeline
 *
 * | Version | Status                                                                                         |
 * | ------- | ---------------------------------------------------------------------------------------------- |
 * | 1.8.x   | Shims live. Dev-only warnings on every legacy surface.                                         |
 * | 2.0     | `valueFormat`, `LegacyEditorState`, `ref.current.legacy`, and converter helpers all removed.   |
 *
 * Plan your data migration before bumping to 2.0.
 */
const meta: Meta = {
	title: 'Atoms/EditorInput/Migration & Changelog',
	tags: [ 'autodocs' ],
	parameters: {
		previewTabs: { canvas: { hidden: true } },
		viewMode: 'docs',
	},
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
	render: () => <></>,
	parameters: {
		docs: {
			story: { inline: false, height: '0' },
		},
	},
};
Overview.storyName = 'Overview';
