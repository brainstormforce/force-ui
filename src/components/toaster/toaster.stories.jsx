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
		},
		design: {
			control: 'select',
			options: [ 'stack', 'inline' ],
		},
		theme: {
			control: 'select',
			options: [ 'light', 'dark' ],
		},
		autoDismiss: {
			control: 'boolean',
		},
		dismissAfter: {
			control: { type: 'number', min: 1000, max: 10000, step: 500 },
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '900px', height: '500px', position: 'relative', margin: '0 auto' } }>
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
							toast.success( 'Success toast!', { description: 'This is a success message' } )
						}
					>
						Show Success Toast
					</button>
					<button
						onClick={ () =>
							toast.error( 'Error toast!', { description: 'This is an error message' } )
						}
					>
						Show Error Toast
					</button>
					<button
						onClick={ () =>
							toast.info( 'Info toast!', { description: 'This is an info message' } )
						}
					>
						Show Info Toast
					</button>
					<button
						onClick={ () =>
							toast.warning( 'Warning toast!', { description: 'This is a warning message' } )
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
