import { Meta, StoryObj, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import Dialog from './dialog';
import Button from '../button';

const meta: Meta = {
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
	} as Record<string, React.ComponentType<any>>,
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
			control: {type: 'select'},
		}
	}
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryFn<typeof Dialog>;

interface TemplateArgs {
	open?: boolean;
	setOpen?: (open: boolean) => void;
	design?: 'simple' | 'footer-divided';
	exitOnEsc?: boolean;
	exitOnClickOutside?: boolean;
	trigger?: React.ReactNode | ((props: { onClick: () => void; }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>);
	scrollLock?: boolean;
}

const Template: Story = (args: TemplateArgs) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Dialog {...args} open={open} setOpen={setOpen} trigger={args.trigger}>
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
					<Button onClick={() => setOpen(false)}>Close</Button>
				</Dialog.Footer>
			</Dialog.Panel>
		</Dialog>
	);
};

export const Default: Story = Template.bind({});
Default.args = {
	trigger: <Button>Open Dialog</Button>,
	exitOnEsc: true,
	exitOnClickOutside: false,
	scrollLock: true,
	design: 'simple',
}

const UncontrolledTemplate: Story = () => (
	<Dialog trigger={(<Button>Open Uncontrolled Dialog</Button>)}>
		<Dialog.Panel>
			{ ( { close } ) => (
				<>
					<Dialog.Header>
						<div className="flex items-center justify-between">
							<Dialog.Title>Dialog Title</Dialog.Title>
							{/* Custom Close button instead of default with Passes component/tag props. */}
							<Dialog.CloseButton className='px-2 py-0.5' variant="secondary" as={Button} destructive>
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
						<Dialog.CloseButton as={Button} variant="outline">
							Cancel
						</Dialog.CloseButton>
						<Button onClick={close} variant="primary">Save</Button>
					</Dialog.Footer>
					<Dialog.Backdrop />
				</>
			) }
		</Dialog.Panel>
	</Dialog>
)

export const Uncontrolled: Story = UncontrolledTemplate.bind({});
Uncontrolled.parameters = {
	docs: { source: {type: 'code'} },
};

// export default {
// 	title: 'Organisms/Dialog',
// 	component: Dialog,
// 	parameters: {
// 		layout: 'fullscreen',
// 	},
// 	tags: [ 'autodocs' ],
// 	decorators: [
// 		( Story ) => (
// 			<div className="font-sans [&_*]:font-sans h-[600px] flex items-center justify-center">
// 				<Story />
// 			</div>
// 		),
// 	],
// 	argTypes: {
// 		open: {
// 			name: 'Open',
// 			description:
// 				'Control the dialog open state. If not provided, the dialog will be controlled internally.',
// 			control: 'none',
// 			table: {
// 				type: { summary: 'boolean' },
// 			},
// 		},
// 		setOpen: {
// 			name: 'Set Open',
// 			description:
// 				'Control the dialog open state. If not provided, the dialog will be controlled internally.',
// 			control: 'none',
// 			table: {
// 				type: { summary: 'function' },
// 			},
// 		},
// 		design: {
// 			name: 'Design',
// 			description: 'Design of the dialog.',
// 			control: 'select',
// 			options: [ 'simple', 'footer-divided' ],
// 			table: {
// 				type: { summary: 'string' },
// 				defaultValue: { summary: 'simple' },
// 			},
// 		},
// 		exitOnEsc: {
// 			name: 'Exit on Esc',
// 			description: 'Close the dialog on pressing the escape key.',
// 			control: 'boolean',
// 			table: {
// 				type: { summary: 'boolean' },
// 				defaultValue: { summary: 'true' },
// 			},
// 		},
// 		exitOnClickOutside: {
// 			name: 'Exit on Click Outside',
// 			description: 'Close the dialog on clicking outside the dialog.',
// 			control: 'boolean',
// 			table: {
// 				type: { summary: 'boolean' },
// 				defaultValue: { summary: 'false' },
// 			},
// 		},
// 		trigger: {
// 			name: 'Trigger Button',
// 			description: 'Button to trigger the dialog.',
// 			control: 'none',
// 			table: {
// 				type: { summary: 'node' },
// 			},
// 			defaultValue: <Button>Open Dialog</Button>,
// 		},
// 		scrollLock: {
// 			name: 'Scroll Lock',
// 			description: 'Lock the scroll when the dialog is open.',
// 			control: 'boolean',
// 			table: {
// 				type: { summary: 'boolean' },
// 				defaultValue: { summary: 'true' },
// 			},
// 		},
// 	},
// };

// export const Default = Template.bind( {} );
// Default.args = {
// 	trigger: <Button>Open Dialog</Button>,
// 	exitOnEsc: true,
// 	exitOnClickOutside: false,
// 	scrollLock: true,
// 	design: 'simple',
// };

// const ControlledTemplate = ( args ) => {
// 	const [ open, setOpen ] = useState( false );

// 	return (
// 		<>
// 			<Button onClick={ () => setOpen( true ) }>
// 				Open Controlled Dialog
// 			</Button>
// 			<Dialog open={ open } setOpen={ setOpen } { ...args }>
// 				<Dialog.Panel>
// 					<Dialog.Header>
// 						<div className="flex items-center justify-between">
// 							<Dialog.Title>Dialog Title</Dialog.Title>
// 							<Dialog.CloseButton />
// 						</div>
// 						<Dialog.Description>
// 							Lorem ipsum dolor sit amet consectetur. Aliquam sed
// 							scelerisque et arcu nibh a massa.
// 						</Dialog.Description>
// 					</Dialog.Header>
// 					<Dialog.Body>
// 						<h1 className="m-0">Dialog Content</h1>
// 					</Dialog.Body>
// 					<Dialog.Footer>
// 						<div className="mr-auto inline-flex items-center">
// 							Other option
// 						</div>
// 						<Button variant="ghost">Details</Button>
// 						<Button
// 							onClick={ () => setOpen( false ) }
// 							variant="outline"
// 						>
// 							Cancel
// 						</Button>
// 						<Button variant="primary">Save</Button>
// 					</Dialog.Footer>
// 				</Dialog.Panel>
// 				<Dialog.Backdrop />
// 			</Dialog>
// 		</>
// 	);
// };

// export const Controlled = ControlledTemplate.bind( {} );
// Controlled.args = {};



// export const Uncontrolled = UncontrolledTemplate.bind( {} );
// Uncontrolled.args = {
// 	trigger: <Button>Open Uncontrolled Dialog</Button>,
// };
// Uncontrolled.parameters = {
// 	docs: { source: { type: 'code' } },
// };

// export const Simple = Template.bind( {} );
// Simple.args = {
// 	trigger: <Button>Open Dialog</Button>,
// 	design: 'simple',
// };

// export const FooterDivided = Template.bind( {} );
// FooterDivided.args = {
// 	trigger: <Button>Open Dialog</Button>,
// 	design: 'footer-divided',
// };
