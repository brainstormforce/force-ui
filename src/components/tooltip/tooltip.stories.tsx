import { useState } from 'react';
import Tooltip from './tooltip';
import { CircleHelp } from 'lucide-react';
import Label from '../label';
import Button from '../button';
import { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
	title: 'Molecules/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [ 'light', 'dark' ],
		},
		placement: {
			control: { type: 'select' },
			options: [
				'top',
				'top-start',
				'top-end',
				'bottom',
				'bottom-start',
				'bottom-end',
				'right',
				'right-start',
				'right-end',
				'left',
				'left-start',
				'left-end',
			],
		},
		triggers: {
			control: { type: 'select' },
			options: [ 'click', 'hover', 'focus' ],
		},
		arrow: { control: { type: 'boolean' } },
		interactive: { control: { type: 'boolean' } },
		open: { control: { type: 'boolean' } },
		offset: { control: { type: 'number' } },
	},
};

export default meta;

const Template: StoryFn<typeof Tooltip> = ( args ) => {
	const [ isOpen, setIsOpen ] = useState( false );
	return (
		<Tooltip
			{ ...args }
			open={ args.open ?? isOpen }
			setOpen={ args.open ? setIsOpen : undefined }
		>
			<CircleHelp />
		</Tooltip>
	);
};

export const DefaultTooltip = Template.bind( {} );
DefaultTooltip.args = {
	variant: 'dark',
	placement: 'bottom',
	title: 'Tooltip',
	content: <span>This is custom JSX content.</span>,
	arrow: true,
	triggers: [ 'hover', 'focus' ],
	interactive: false,
};

export const TooltipWithIcon = ( args: any ) => (
	<div
		style={ {
			display: 'grid',
			gap: '10px',
			justifyContent: 'center',
			padding: '20px',
		} }
	>
		{ [ 'top', 'bottom', 'left', 'right' ].map( ( placement ) => (
			<Tooltip key={ placement } { ...args } placement={ placement }>
				<CircleHelp style={ { fontSize: '2rem', cursor: 'pointer' } } />
			</Tooltip>
		) ) }
	</div>
);

TooltipWithIcon.args = {
	variant: 'dark',
	title: 'Tooltip',
	content: 'Simple description.',
	arrow: true,
};

export const TooltipWithLabel = ( args: any ) => (
	<div
		style={ {
			display: 'grid',
			gap: '10px',
			justifyContent: 'center',
			padding: '20px',
		} }
	>
		{ [ 'top', 'bottom', 'left', 'right' ].map( ( placement ) => (
			<Tooltip key={ placement } { ...args } placement={ placement }>
				<Label size="md">Label</Label>
			</Tooltip>
		) ) }
	</div>
);

TooltipWithLabel.args = {
	variant: 'dark',
	title: 'Tooltip',
	content: (
		<div className="mt-2">
			<div>Tooltips provide extra information for elements.</div>
			<Button variant="primary" size="sm" className="w-full mt-2">
				Upgrade now
			</Button>
		</div>
	),
	arrow: true,
};
