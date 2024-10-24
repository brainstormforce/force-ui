import React, { useState } from 'react';
import Tooltip from './tooltip.jsx';
import { CircleHelp } from 'lucide-react';
import Label from '../label/label.jsx';
import Button from '../button/index.js';

export default {
	title: 'Molecules/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			description: 'Defines the style variant of the tooltip.',
			control: { type: 'select' },
			options: [ 'light', 'dark' ],
			table: {
				type: { summary: 'string' },
			},
		},
		placement: {
			description: 'The placement of the tooltip relative to the target.',
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
			table: {
				type: { summary: 'string' },
			},
		},
		title: {
			description: 'Title for the tooltip.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		content: {
			description:
				'Content of tooltip - description of tooltip in more detail.',
			table: {
				type: { summary: 'string | ReactElemenet' },
			},
		},
		arrow: {
			description:
				'Defines whether the tooltip is displayed with an arrow or not.',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
		},
		open: {
			description:
				'Controls the open state when controlled mode is used.',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
		},
		triggers: {
			description: 'Triggers to open the tooltip (hover, focus, click).',
			control: { type: 'select' },
			options: [ 'click', 'hover', 'focus' ],
			table: {
				type: { summary: 'string' },
			},
		},
		interactive: {
			description:
				'If set to true, the tooltip is interactive and will not close when the user hovers over the tooltip.',
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
			},
		},
		offset: {
			description:
				'Defines the offset of the tooltip from the target element.',
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
			},
		},
		tooltipPortalRoot: {
			description:
				"Root element where the tooltip will be rendered. It's helpful when the tooltip is rendered outside the parent container and scopped Tailwind CSS styles.",
			table: {
				type: { summary: 'HTMLElement | null' },
			},
		},
		tooltipPortalId: {
			description:
				"Root element where the tooltip will be rendered. It's helpful when the tooltip is rendered outside the parent container and scopped Tailwind CSS styles.",
			table: {
				type: { summary: 'HTMLElement | null' },
			},
		},
		boundary: {
			description:
				'The element that the tooltip is positioned relative to. When provided, the tooltip will be positioned within the boundary of the element.',
			table: {
				type: { summary: 'HTMLElement' },
			},
		},
		strategy: {
			description:
				'Defines the positioning strategy of the tooltip. Options include: `absolute` and `fixed`. The `fixed` strategy is recommended for most use cases.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

export const DefaultTooltip = ( args ) => {
	const [ isOpen, setIsOpen ] = useState( false );

	return (
		<div>
			<Tooltip
				{ ...args }
				open={ args.open !== undefined ? args.open : isOpen }
				setOpen={ args.open !== undefined ? setIsOpen : undefined }
				content={ args.content }
			>
				<CircleHelp />
			</Tooltip>
		</div>
	);
};

DefaultTooltip.args = {
	variant: 'dark',
	placement: 'bottom',
	title: 'Tooltip',
	content: (
		<span>
			This is <strong>custom JSX</strong> in the description.
		</span>
	),
	arrow: true,
	triggers: [ 'hover', 'focus' ],
	interactive: false,
};

export const DarkTooltipWithIcon = ( args ) => (
	<div
		style={ {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gap: '10px',
			justifyContent: 'center',
			padding: '20px',
		} }
	>
		{ [ 'top-end', 'top', 'top-start', 'left', 'bottom', 'right' ].map(
			( placement ) => (
				<div
					style={ {
						display: 'flex',
						justifyContent: 'center',
						padding: '30px',
					} }
					key={ placement }
				>
					<Tooltip key={ placement } { ...args } placement={ placement }>
						<CircleHelp
							style={ { fontSize: '2rem', cursor: 'pointer' } }
						/>
					</Tooltip>
				</div>
			)
		) }
	</div>
);

DarkTooltipWithIcon.storyName = 'Tooltip with icon';

DarkTooltipWithIcon.args = {
	variant: 'dark',
	title: 'Tooltip',
	content: 'This is simple string description.',
	arrow: true,
};

export const DarkTooltipWithLabel = ( args ) => (
	<div
		style={ {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
			gap: '10px',
			justifyContent: 'center',
			padding: '20px',
		} }
	>
		{ [ 'top-end', 'top', 'top-start', 'left', 'bottom', 'right' ].map(
			( placement ) => (
				<div
					style={ {
						display: 'flex',
						justifyContent: 'center',
						padding: '30px',
					} }
					key={ placement }
				>
					<Tooltip key={ placement } { ...args } placement={ placement }>
						<Label size="md">Label</Label>
					</Tooltip>
				</div>
			)
		) }
	</div>
);

DarkTooltipWithLabel.storyName = 'Tooltip with label';

DarkTooltipWithLabel.args = {
	variant: 'dark',
	title: 'Tooltip',
	content: (
		<div className="mt-2">
			<div>
				Tooltips are used to describe or identify an element. In most
				scenarios, tooltips help the user understand meaning.
			</div>
			<Button variant="primary" size="sm" className="w-full mt-2">
				Upgrade now
			</Button>
		</div>
	),
	arrow: true,
};
