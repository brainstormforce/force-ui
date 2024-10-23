import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import Dialog from './dialog';
import Button from '../button';

const meta: Meta<typeof Dialog> = {
	title: 'Organisms/Dialog',
	component: Dialog,
	subcomponents: {
		'Dialog.Panel': Dialog.Panel,
		'Dialog.Header': Dialog.Header,
		'Dialog.Title': Dialog.Title,
		'Dialog.Description': Dialog.Description,
		'Dialog.Body': Dialog.Body,
		'Dialog.Footer': Dialog.Footer,
		'Dialog.CloseButton': Dialog.CloseButton,
		'Dialog.Backdrop': Dialog.Backdrop,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div className="font-sans [&_*]:font-sans h-[600px] flex items-center justify-center">
				<Story />
			</div>
		),
	],
	argTypes: {
		design: {
			control: { type: 'select' },
		},
	},
};

export default meta;

type Story = StoryFn<typeof Dialog>;

const Template: Story = ( args ) => {
	const [ open, setOpen ] = useState<boolean>( false );

	return (
		<Dialog { ...args } open={ open } setOpen={ setOpen } trigger={ args.trigger }>
			<Dialog.Backdrop />
			<Dialog.Panel>
				<Dialog.Header>
					<div className="flex items-center justify-between">
						<Dialog.Title>Dialog Title</Dialog.Title>
						<Dialog.CloseButton />
					</div>
					<Dialog.Description>
						Lorem ipsum dolor sit amet consectetur. Aliquam sed
						scelerisque et arcu nibh a massa.
					</Dialog.Description>
				</Dialog.Header>
				<Dialog.Body>
					<p className="m-0 text-text-secondary">Body content</p>
				</Dialog.Body>
				<Dialog.Footer>
					<Button onClick={ () => setOpen( false ) }>Close</Button>
				</Dialog.Footer>
			</Dialog.Panel>
		</Dialog>
	);
};

export const Default: Story = Template.bind( {} );
Default.args = {
	trigger: <Button>Open Dialog</Button>,
	exitOnEsc: true,
	exitOnClickOutside: false,
	scrollLock: true,
	design: 'simple',
};

const UncontrolledTemplate: Story = () => (
	<Dialog trigger={ <Button>Open Uncontrolled Dialog</Button> }>
		<Dialog.Panel>
			{ ( { close } ) => (
				<>
					<Dialog.Header>
						<div className="flex items-center justify-between">
							<Dialog.Title>Dialog Title</Dialog.Title>
							{ /* Custom Close button instead of default with Passes component/tag props. */ }
							<Dialog.CloseButton
								className="px-2 py-0.5"
								variant="ghost"
								as={ Button }
							>
								X
							</Dialog.CloseButton>
						</div>
						<Dialog.Description>
							Lorem ipsum dolor sit amet consectetur. Aliquam sed
							scelerisque et arcu nibh a massa.
						</Dialog.Description>
					</Dialog.Header>
					<Dialog.Body>
						<h1 className="m-0">Dialog Content</h1>
					</Dialog.Body>
					<Dialog.Footer>
						<div className="mr-auto inline-flex items-center">
							Other option
						</div>
						<Button variant="ghost">Details</Button>
						<Dialog.CloseButton as={ Button } variant="outline">
							Cancel
						</Dialog.CloseButton>
						<Button onClick={ close } variant="primary">
							Save
						</Button>
					</Dialog.Footer>
					<Dialog.Backdrop />
				</>
			) }
		</Dialog.Panel>
	</Dialog>
);

export const Controlled = Template.bind( {} );
Controlled.args = {
	trigger: <Button>Open Dialog</Button>,
	exitOnEsc: true,
	exitOnClickOutside: false,
	scrollLock: true,
	design: 'simple',
};

export const Uncontrolled: Story = UncontrolledTemplate.bind( {} );
Uncontrolled.parameters = {
	docs: { source: { type: 'code' } },
};
