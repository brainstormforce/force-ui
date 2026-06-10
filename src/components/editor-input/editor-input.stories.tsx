import EditorInput from './editor-input';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { useEffect, useRef, type ReactNode } from 'react';
import { createRoot, type Root } from 'react-dom/client';

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
