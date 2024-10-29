import type { Meta, StoryFn } from '@storybook/react';
import { Toaster } from './toaster';
import { toast } from './controller';

const meta: Meta<typeof Toaster> = {
	title: 'Atoms/Toaster',
	component: Toaster,
	parameters: {
		layout: 'centered',
		docs: {
			source: {
				code: `
			  <Toaster position="top-right" design="stack" theme="light" autoDismiss={true} dismissAfter={5000} />
			  <div className="flex gap-2">
				  <button onClick={() => toast.success('Success toast!', { description: 'This is a success message' })}>
					  Show Success Toast
				  </button>
				  <button onClick={() => toast.error('Error toast!', { description: 'This is an error message' })}>
					  Show Error Toast
				  </button>
				  <button onClick={() => toast.info('Info toast!', { description: 'This is an info message' })}>
					  Show Info Toast
				  </button>
				  <button onClick={() => toast.warning('Warning toast!', { description: 'This is a warning message' })}>
					  Show Warning Toast
				  </button>
			  </div>
			  `,
			},
		},
	},
	tags: [ 'autodocs' ],
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
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryFn<typeof Toaster>;

const Template: Story = ( args ) => {
	return (
		<div>
			<Toaster { ...args } key={ args.position } />
			<div
				className='h-[100dvh] flex flex-col items-center justify-center'
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
};
