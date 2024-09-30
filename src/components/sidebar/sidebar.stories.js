import { Sidebar, SidebarHeader, SidebarBody, SidebarFooter, SidebarItem } from './sidebar';
import Button from '../button';

export default {
    title: 'Organism/Sidebar',
    component: Sidebar,
    parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
    argTypes: {
        children: {
            description: 'Content to render inside the Sidebar. This typically includes `SidebarHeader`, `SidebarBody`, and `SidebarFooter` components.',
            control: { type: 'none' },  // children cannot be controlled via Storybook UI
        },
        onCollapseChange: {
            description: 'Callback function triggered when the Sidebar collapse state changes. Use this to handle logic based on collapse/expand states.',
            action: 'onCollapseChange', // This will show up in Storybook Actions Panel
        },
        screenHeight: {
            description: 'Determines whether the Sidebar should occupy the full screen height.',
            control: { type: 'boolean' },
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
        borderOn: {
            description: 'Controls whether a border should appear on the right of the Sidebar.',
            control: { type: 'boolean' },
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
        collapsible: {
            description: 'Determines if the Sidebar can be collapsed or not. If `true`, a collapse button is shown.',
            control: { type: 'boolean' },
            defaultValue: true,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: true },
            },
        },
        className: {
            description: 'Optional custom CSS classes to apply to the Sidebar container for styling.',
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
            },
        },
    },
};

const Template = (args) => (
    <Sidebar {...args} 
    >
        <SidebarHeader>
            <SidebarItem>
                <img
                    width="180px"
                    alt="Logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg"
                />
            </SidebarItem>
        </SidebarHeader>
        <SidebarBody>
            <SidebarItem>
                <div className="flex flex-col gap-2">
                    <div>Nav Item</div>
                    <div>Nav Item</div>
                    <div>Nav Item</div>
                </div>
            </SidebarItem>
          
        </SidebarBody>
        <SidebarFooter>
            <Button className="w-full">
               Pro
            </Button>
        </SidebarFooter>
    </Sidebar>
);

export const DefaultSidebar = Template.bind({});
DefaultSidebar.args = {
    screenHeight: true,
    borderOn: true,
    collapsible: true,
};

export const NonCollapsibleSidebar = Template.bind({});
NonCollapsibleSidebar.args = {
    screenHeight: true,
    borderOn: true,
    collapsible: false,
};

export const WithoutFullHeight = Template.bind({});
WithoutFullHeight.args = {
    screenHeight: false,
    borderOn: true,
    collapsible: true,
};
