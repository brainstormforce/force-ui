import Sidebar from './sidebar';
import Button from '../button';

export default {
	title: 'Organism/Sidebar',
	component: Sidebar,
	parameters: {
		layout: 'left',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		children: {
			description:
				'Content to render inside the Sidebar. This typically includes `Sidebar.Header`, `Sidebar.Body`, and `Sidebar.Footer` components.',
			control: { type: 'none' },
		},
		className: {
			description:
				'Optional custom CSS classes to apply to the Sidebar container for styling.',
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
			},
		},
		borderOn: {
			description:
				'Controls whether a border should appear on the right of the Sidebar.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		collapsible: {
			description:
				'Determines if the Sidebar can be collapsed or not. If `true`, a collapse button is shown.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		screenHeight: {
			description:
				'Determines whether the Sidebar should occupy the full screen height.',
			control: { type: 'boolean' },
			defaultValue: true,
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: true },
			},
		},
		onCollapseChange: {
			description:
				'Callback function triggered when the Sidebar collapse state changes. Use this to handle logic based on collapse/expand states.',
			action: 'onCollapseChange',
		},
	},
};

const Template = ( args ) => (
	<Sidebar { ...args }>
		<Sidebar.Header>
			<Sidebar.Item>
				<img
					width="240px"
					alt="Logo"
					src="https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg"
				/>
			</Sidebar.Item>
		</Sidebar.Header>
		<Sidebar.Body>
			<Sidebar.Item>
				<div className="flex flex-col gap-2">
					{ [ 1, 2, 3, 4, 5, 6 ].map( ( num ) => (
						<div key={ num }>Nav Item</div>
					) ) }
				</div>
			</Sidebar.Item>
		</Sidebar.Body>
		<Sidebar.Footer>
			<Button className="w-full">Pro</Button>
		</Sidebar.Footer>
	</Sidebar>
);

export const DefaultSidebar = Template.bind( {} );
DefaultSidebar.args = {
	screenHeight: true,
	borderOn: true,
	collapsible: true,
};

DefaultSidebar.storyName = 'Sidebar';
