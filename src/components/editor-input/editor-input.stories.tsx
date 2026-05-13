import EditorInput from './editor-input';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { useEffect, useRef } from 'react';
import { createRoot, type Root } from 'react-dom/client';

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
	onChange: ( markup ) => console.log( markup ), // eslint-disable-line no-console
};

export const Small: Story = Template.bind( {} );
Small.args = {
	size: 'sm',
	options,
};

export const Medium: Story = Template.bind( {} );
Medium.args = {
	size: 'md',
	options,
};

export const Large: Story = Template.bind( {} );
Large.args = {
	size: 'lg',
	options,
};

export const WithDefaultValue: Story = Template.bind( {} );
WithDefaultValue.args = {
	size: 'md',
	options,
	defaultValue: 'Hello @[Red](Red), welcome to @[Blue](Blue)!',
};
WithDefaultValue.storyName = 'With Default Value';

// ---------------------------------------------------------------------------
// Shadow DOM story
// ---------------------------------------------------------------------------

/**
 * Renders children inside an attached shadow root using a dedicated React root.
 *
 * Why a separate React root (not createPortal):
 *   createPortal keeps the React tree in the light DOM — React's event
 *   delegation attaches to the light-DOM root container. Events fired inside
 *   the shadow root are retargeted at the shadow boundary, so event.target
 *   becomes the host element and React cannot match them to the correct fiber.
 *   Result: the editor never receives input/composition events → typing does nothing.
 *
 *   createRoot() inside the shadow root places React's event delegation inside
 *   the shadow boundary so events are handled before retargeting occurs.
 *
 * Style injection:
 *   Clones every <style>/<link rel="stylesheet"> from document.head into the
 *   shadow root so Tailwind utility classes and CSS custom properties resolve.
 *
 * TipTap / ProseMirror reads selection via view.dom.ownerDocument (= document)
 * so no manual selectionchange sync is needed — this simplifies the setup
 * compared to the previous Lexical implementation.
 * @param root0
 * @param root0.children
 */
const ShadowWrapper = ( { children }: { children: React.ReactNode } ) => {
	const hostRef = useRef<HTMLDivElement>( null );
	const reactRootRef = useRef<Root | null>( null );

	useEffect( () => {
		const host = hostRef.current;
		if ( ! host || host.shadowRoot ) {
			return;
		}

		const shadow = host.attachShadow( { mode: 'open' } );

		Array.from(
			document.querySelectorAll<HTMLElement>(
				'head style, head link[rel="stylesheet"]'
			)
		).forEach( ( el ) => shadow.appendChild( el.cloneNode( true ) ) );

		const container = document.createElement( 'div' );
		shadow.appendChild( container );

		reactRootRef.current = createRoot( container );

		return () => {
			reactRootRef.current?.unmount();
			reactRootRef.current = null;
		};
	}, [] );

	useEffect( () => {
		reactRootRef.current?.render( children );
	} );

	return <div ref={ hostRef } />;
};

export const InShadowRoot: StoryFn = () => (
	<div className="space-y-3">
		<p className="text-sm text-text-secondary font-medium">
			EditorInput rendered inside a{ ' ' }
			<code className="bg-badge-background-neutral px-1 rounded text-xs">
				ShadowRoot
			</code>
			. Open DevTools → Elements to verify the component lives under{ ' ' }
			<code className="bg-badge-background-neutral px-1 rounded text-xs">
				#shadow-root (open)
			</code>
			.
		</p>
		<ShadowWrapper>
			<div className="[&_*]:box-border box-border max-w-[900px]">
				<EditorInput
					size="md"
					options={ options }
					placeholder="Press @ to view variable suggestions (inside shadow root)"
					onChange={ ( markup ) => console.log( markup ) } // eslint-disable-line no-console
				/>
			</div>
		</ShadowWrapper>
	</div>
);
InShadowRoot.storyName = 'In Shadow Root';
InShadowRoot.parameters = {
	docs: {
		description: {
			story: 'Demonstrates EditorInput running inside a Shadow DOM. TipTap/ProseMirror reads selection via `ownerDocument` so no manual selection sync is needed. Styles are cloned from `document.head`. The suggestion dropdown outside-click uses `rootElement.getRootNode()` instead of `document`, so it works correctly inside a shadow root.',
		},
	},
};
