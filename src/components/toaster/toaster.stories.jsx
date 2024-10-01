import React from 'react';
import Toaster from './toaster';
import { toast } from './controller';

export default {
	title: 'Atoms/Toaster',
	component: Toaster,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		position: {
			control: 'select',
			options: [ 'top-right', 'top-left', 'bottom-right', 'bottom-left' ],
			description: 'The position of the toast notification.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'top-right' },
			},
		},
		design: {
			control: 'select',
			options: [ 'stack', 'inline' ],
			description: 'The design layout of the toast notification.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'stack' },
			},
		},
		theme: {
			control: 'select',
			options: [ 'light', 'dark' ],
			description: 'The theme of the toast notification.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'light' },
			},
		},
		autoDismiss: {
			control: 'boolean',
			description:
				'Whether the toast notification should automatically dismiss after a certain time.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		dismissAfter: {
			control: { type: 'number', min: 1000, max: 10000, step: 500 },
			description:
				'The time in milliseconds after which the toast notification will be dismissed.',
			table: {
				type: { summary: 'number' },
				defaultValue: { summary: '5000' },
			},
		},
		className: {
			control: 'text',
			description:
				'Additional CSS class names to apply to the toast notification.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' },
			},
		},
	},
	decorators: [
		( Story ) => (
			<div
				style={ {
					width: '900px',
					height: '500px',
					position: 'relative',
					margin: '0 auto',
				} }
			>
				<Story />
			</div>
		),
	],
};

const Template = ( args ) => {
	return (
		<div>
			<Toaster { ...args } key={ args.position } />
			<div
				style={ {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				} }
			>
				<div className="flex gap-2">
					<button
						onClick={ () =>
							toast.success( 'Success toast!', {
								description: 'This is a success message',
							} )
						}
					>
						Show Success Toast
					</button>
					<button
						onClick={ () =>
							toast.error( 'Error toast!', {
								description: 'This is an error message',
							} )
						}
					>
						Show Error Toast
					</button>
					<button
						onClick={ () =>
							toast.info( 'Info toast!', {
								description: 'This is an info message',
							} )
						}
					>
						Show Info Toast
					</button>
					<button
						onClick={ () =>
							toast.warning( 'Warning toast!', {
								description: 'This is a warning message',
							} )
						}
					>
						Show Warning Toast
					</button>
				</div>
			</div>
		</div>
	);
};

export const Default = Template.bind( {} );
Default.args = {
	position: 'top-right',
	design: 'stack',
	theme: 'light',
	autoDismiss: true,
	dismissAfter: 5000,
	singleTon: false,
};
