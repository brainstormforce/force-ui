import React, { useState } from 'react';
import Dialog from './dialog';
import Button from '../button';

export default {
	title: 'Organisms/Dialog',
	component: Dialog,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div
				className="font-sans [&_*]:font-sans h-[600px] flex items-center justify-center"
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		open: {
			name: 'Open',
			description: 'Control the dialog open state. If not provided, the dialog will be controlled internally.',
			control: 'none',
			table: {
				type: { summary: 'boolean' },
			},
		},
		setOpen: {
			name: 'Set Open',
			description: 'Control the dialog open state. If not provided, the dialog will be controlled internally.',
			control: 'none',
			table: {
				type: { summary: 'function' },
			},
		},
		design: {
			name: 'Design',
			description: 'Design of the dialog.',
			control: 'select',
			options: [ 'simple', 'footer-divided' ],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'simple' },
			},
		},
		exitOnEsc: {
			name: 'Exit on Esc',
			description: 'Close the dialog on pressing the escape key.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		exitOnClickOutside: {
			name: 'Exit on Click Outside',
			description: 'Close the dialog on clicking outside the dialog.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		trigger: {
			name: 'Trigger Button',
			description: 'Button to trigger the dialog.',
			control: 'none',
			table: {
				type: { summary: 'node' },
			},
			defaultValue: <Button>Open Dialog</Button>,
		},
		scrollLock: {
			name: 'Scroll Lock',
			description: 'Lock the scroll when the dialog is open.',
			control: 'boolean',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
	},
};

const Template = ( args ) => {
	const [ open, setOpen ] = useState( false );

	return (
		<>
			<Dialog { ...args } open={ open } setOpen={ setOpen }>
				<Dialog.Backdrop />
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
			</Dialog>
		</>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	trigger: <Button>Open Dialog</Button>,
};

const ControlledTemplate = ( args ) => {
	const [ open, setOpen ] = useState( false );

	return (
		<>
			<Button onClick={ () => setOpen( true ) }>
				Open Controlled Dialog
			</Button>
			<Dialog open={ open } setOpen={ setOpen } { ...args }>
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
					<h1 className="m-0">Dialog Content</h1>
				</Dialog.Body>
				<Dialog.Footer>
					<div className="mr-auto inline-flex items-center">
						Other option
					</div>
					<Button variant="ghost">Details</Button>
					<Button
						onClick={ () => setOpen( false ) }
						variant="outline"
					>
						Cancel
					</Button>
					<Button variant="primary">Save</Button>
				</Dialog.Footer>
				<Dialog.Backdrop />
			</Dialog>
		</>
	);
};

export const Controlled = ControlledTemplate.bind( {} );
Controlled.args = {
};

const UncontrolledTemplate = ( args ) => (
	<Dialog { ...args }>
		{ ( { close } ) => (
			<>
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
					<h1 className="m-0">Dialog Content</h1>
				</Dialog.Body>
				<Dialog.Footer>
					<div className="mr-auto inline-flex items-center">
						Other option
					</div>
					<Button variant="ghost">Details</Button>
					<Button onClick={ close } variant="outline">
						Cancel
					</Button>
					<Button variant="primary">Save</Button>
				</Dialog.Footer>
				<Dialog.Backdrop />
			</>
		) }
	</Dialog>
);

export const Uncontrolled = UncontrolledTemplate.bind( {} );
Uncontrolled.args = {
	trigger: <Button>Open Uncontrolled Dialog</Button>,
};
Uncontrolled.parameters = {
	docs: { source: { type: 'code' } },
};

export const Simple = Template.bind( {} );
Simple.args = {
	trigger: <Button>Open Dialog</Button>,
	design: 'simple',
};

export const FooterDivided = Template.bind( {} );
FooterDivided.args = {
	trigger: <Button>Open Dialog</Button>,
	design: 'footer-divided',
};
