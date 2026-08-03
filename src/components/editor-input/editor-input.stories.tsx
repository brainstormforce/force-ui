import EditorInput from './editor-input';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { useEffect, useRef, type ReactNode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { expect, userEvent, within } from 'storybook/test';

// Renders its children inside an open Shadow DOM root, the way a real consumer
// mounts the editor in a web component: a SEPARATE React root created on the
// shadow root via `createRoot(...).render()`. This is important for testing —
// unlike `createPortal`, a nested root keeps React's event delegation inside
// the shadow tree, so shadow-DOM event bugs actually reproduce here. Document
// stylesheets are cloned in so the editor is styled correctly.
const ShadowDom = ( { children }: { children: ReactNode } ) => {
	const hostRef = useRef<HTMLDivElement>( null );
	const rootRef = useRef<Root | null>( null );

	useEffect( () => {
		const host = hostRef.current;
		if ( ! host ) {
			return;
		}
		const shadow =
			host.shadowRoot ?? host.attachShadow( { mode: 'open' } );
		document
			.querySelectorAll( 'style, link[rel="stylesheet"]' )
			.forEach( ( node ) =>
				shadow.appendChild( node.cloneNode( true ) )
			);
		const mountPoint = document.createElement( 'div' );
		shadow.appendChild( mountPoint );
		rootRef.current = createRoot( mountPoint );
		rootRef.current.render( children );
		return () => {
			const root = rootRef.current;
			rootRef.current = null;
			// Defer unmount to avoid React's "synchronous unmount during render".
			setTimeout( () => root?.unmount(), 0 );
		};
	}, [ children ] );

	return <div ref={ hostRef } data-testid="shadow-host" />;
};

const meta: Meta<typeof EditorInput> = {
	title: 'Atoms/EditorInput',
	component: EditorInput,
	tags: [ 'autodocs' ],
	parameters: {
		a11y: {
			config: {
				rules: [ { id: 'aria-input-field-name', enabled: false } ],
			},
		},
	},
	decorators: [
		( Story ) => (
			<div className="[&_*]:box-border box-border max-w-[900px] h-[300px]">
				<Story />
			</div>
		),
	],
	argTypes: {
		size: {
			control: { type: 'select' },
		},
	},
} satisfies Meta<typeof EditorInput>;

export default meta;

type Story = StoryFn<typeof EditorInput>;

const options = [
	'Red',
	'Orange',
	'Yellow',
	'Green',
	'Cyan',
	'Blue',
	'Purple',
	'Pink',
];

const Template: Story = ( args ) => <EditorInput key={ args.size } { ...args } />;

export const Default: Story = Template.bind( {} );
Default.args = {
	size: 'md',
	autoSpaceAfterMention: false,
	autoFocus: false,
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Small: Story = Template.bind( {} );
Small.args = {
	size: 'sm',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Medium: Story = Template.bind( {} );
Medium.args = {
	size: 'md',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

export const Large: Story = Template.bind( {} );
Large.args = {
	size: 'lg',
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};

// Overrides the suggestion trigger with a custom regex so the menu opens on
// "{{" (e.g. template-variable syntax) instead of the default "@" trigger.
export const CustomTriggerRegex: Story = Template.bind( {} );
CustomTriggerRegex.args = {
	size: 'md',
	placeholder: 'Type {{ to view variable suggestions',
	options,
	triggerRegex: /(^|\s|\()(\{\{(\w{0,30}))$/,
	onChange: ( editorState ) => editorState.toJSON(),
};
CustomTriggerRegex.play = async ( { canvasElement } ) => {
	const editor = canvasElement.querySelector<HTMLElement>(
		'[contenteditable="true"]'
	);
	await expect( editor ).not.toBeNull();
	await userEvent.click( editor! );

	// The menu portals to document.body, not the story canvas.
	const body = within( canvasElement.ownerDocument.body );

	// The default "@" trigger must NOT open the menu when a custom regex is
	// provided. The lookup service debounces by 500ms, so give it time to
	// (not) fire before asserting.
	await userEvent.keyboard( '@Re' );
	await new Promise( ( resolve ) => setTimeout( resolve, 700 ) );
	await expect( body.queryByText( 'Red' ) ).not.toBeInTheDocument();

	// The custom "{{" trigger opens the menu. In `userEvent.keyboard`, "{{"
	// escapes a literal "{", so four braces type two.
	await userEvent.keyboard( ' {{{{Re' );
	await expect(
		await body.findByText( 'Red', {}, { timeout: 3000 } )
	).toBeVisible();
};

// SureRank PR #2776: smart tags must be insertable WITHOUT a blank space
// before the trigger (e.g. "text@" right after a word). The default matcher
// requires `(^|\s|\()` before the trigger; this custom regex drops that
// boundary so "@" opens the menu anywhere, including mid-word.
export const MentionWithoutLeadingSpace: Story = Template.bind( {} );
MentionWithoutLeadingSpace.args = {
	size: 'md',
	options,
	triggerRegex: /()(@(\w{0,75}))$/,
	onChange: ( editorState ) => editorState.toJSON(),
};
MentionWithoutLeadingSpace.play = async ( { canvasElement } ) => {
	const editor = canvasElement.querySelector<HTMLElement>(
		'[contenteditable="true"]'
	);
	await expect( editor ).not.toBeNull();
	await userEvent.click( editor! );

	// The menu portals to document.body, not the story canvas.
	const body = within( canvasElement.ownerDocument.body );

	// No space before "@" — the default matcher would ignore this; the
	// custom regex must open the menu.
	await userEvent.keyboard( 'Hello@Re' );
	await expect(
		await body.findByText( 'Red', {}, { timeout: 3000 } )
	).toBeVisible();
};

// Renders the editor inside a Shadow DOM to verify it works across the shadow
// boundary (fix from facebook/lexical PR #7790).
export const InsideShadowDom: Story = ( args ) => (
	<ShadowDom>
		<EditorInput key={ args.size } { ...args } />
	</ShadowDom>
);
InsideShadowDom.args = {
	size: 'md',
	autoSpaceAfterMention: false,
	autoFocus: false,
	options,
	onChange: ( editorState ) => editorState.toJSON(),
};
