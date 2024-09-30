import React from 'react';
import Topbar from './topbar.jsx';
import Button from '../button/button.jsx';
import { ArrowUpRight, CircleHelp, Megaphone, User } from 'lucide-react';
import Badge from '../badge/badge.jsx';
import Avatar from '../avatar/avatar.jsx';

Topbar.displayName = 'Topbar';
Topbar.Left.displayName = 'Topbar.Left';
Topbar.Middle.displayName = 'Topbar.Middle'; 
Topbar.Right.displayName = 'Topbar.Right'; 
Topbar.Item.displayName = 'Topbar.Item'; 

export default {
	title: 'Organisms/Topbar',
	component: Topbar,
	tags: [ 'autodocs' ],
	argTypes: {
		gap: {
			description: 'Defines the gap between Topbar sections.',
			control: { type: 'select' },
			options: [ '0', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			table: {
				type: { summary: 'string' },
                defaultValue: { summary: 'lg' },
			},
		},
        topbarLeftGap: {
            name: 'Topbar.Left: Gap',
            description: 'Defines the gap between Topbar items in Topbar.Left sections',
            control: { type: 'select' },
			options: [ '0', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			table: {
				type: { summary: 'string' },
                defaultValue: { summary: 'sm' },
			},
        },
        topbarMiddleGap: {
            name: 'Topbar.Middle: Gap',
            description: 'Defines the gap between Topbar items in Topbar.Middle sections',
            control: { type: 'select' },
			options: [ '0', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			table: {
				type: { summary: 'string' },
                defaultValue: { summary: 'md' },
			},
        },
        topbarRightGap: {
            name: 'Topbar.Right: Gap',
            description: 'Defines the gap between Topbar items in Topbar.Right sections',
            control: { type: 'select' },
			options: [ '0', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl' ],
			table: {
				type: { summary: 'string' },
                defaultValue: { summary: 'sm' },
			},
        },
        topbarMiddleAlign: {
            name: 'Topbar.Middle: Align',
            description: 'Defines how the content inside the Middle section is aligned.',
            control: { type: 'select' },
            options: [ 'left', 'center', 'right' ],
			table: {
				type: { summary: 'string' },
                defaultValue: { summary: 'center' },
			},
        },
	},
};

export const WithMiddleAlignment = ( args ) => (
	<Topbar gap={ args.gap }>
		<Topbar.Left gap={args.topbarLeftGap}>
			<Topbar.Item>
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
				</svg>
			</Topbar.Item>
		</Topbar.Left>

		<Topbar.Middle align={args.topbarMiddleAlign} gap={args.topbarMiddleGap}>
			<Topbar.Item>
				<div className="flex gap-2">
					<div>Nav Item 1</div>
					<div>Nav Item 2</div>
					<div>Nav Item 3</div>
				</div>
			</Topbar.Item>
			<Topbar.Item>
				<Button
					variant="ghost"
					icon={ <ArrowUpRight /> }
					iconPosition="right"
				>
					Upgrade to Pro
				</Button>
			</Topbar.Item>
		</Topbar.Middle>

		<Topbar.Right gap={args.topbarRightGap}>
			<Topbar.Item>
				<Badge label="V 0.0 2" size="xs" variant="neutral" closable={ false } />
			</Topbar.Item>
			<Topbar.Item className="gap-2">
				<CircleHelp />
				<Megaphone />
			</Topbar.Item>
			<Topbar.Item>
				<Avatar size="sm" border="ring">
					<User />
				</Avatar>
			</Topbar.Item>
		</Topbar.Right>
	</Topbar>
);

WithMiddleAlignment.storyName = 'Topbar with Center-Aligned Middle Section';

export const WithLeftAlignment = ( args ) => (
	<Topbar gap={ args.gap }>
		<Topbar.Left gap={args.topbarLeftGap}>
			<Topbar.Item>
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
				</svg>
			</Topbar.Item>
		</Topbar.Left>

		<Topbar.Middle align="left" gap={args.topbarMiddleGap}>
			<Topbar.Item>
				<div className="flex gap-2">
					<div>Nav Item 1</div>
					<div>Nav Item 2</div>
					<div>Nav Item 3</div>
				</div>
			</Topbar.Item>
			<Topbar.Item>
				<Button
					variant="ghost"
					icon={ <ArrowUpRight /> }
					iconPosition="right"
				>
					Upgrade to Pro
				</Button>
			</Topbar.Item>
		</Topbar.Middle>

		<Topbar.Right gap={args.topbarRightGap}>
			<Topbar.Item>
				<Badge label="V 0.0 2" size="xs" variant="neutral" closable={ false } />
			</Topbar.Item>
			<Topbar.Item className="gap-2">
				<CircleHelp />
				<Megaphone />
			</Topbar.Item>
			<Topbar.Item>
				<Avatar size="sm" border="ring">
					<User />
				</Avatar>
			</Topbar.Item>
		</Topbar.Right>
	</Topbar>
);

WithLeftAlignment.storyName = 'Topbar with Left-Aligned Middle Section';

export const WithRightAlignment = ( args ) => (
	<Topbar gap={ args.gap }>
		<Topbar.Left>
			<Topbar.Item>
				<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 24C19.1275 24 24.5 18.6273 24.5 11.9999C24.5 5.37255 19.1275 0 12.5 0C5.87259 0 0.5 5.37255 0.5 11.9999C0.5 18.6273 5.87259 24 12.5 24ZM12.5517 5.99996C11.5882 5.99996 10.2547 6.55101 9.5734 7.23073L7.7229 9.07688H16.9465L20.0307 5.99996H12.5517ZM15.4111 16.7692C14.7298 17.4489 13.3964 17.9999 12.4328 17.9999H4.95388L8.03804 14.923H17.2616L15.4111 16.7692ZM18.4089 10.6153H6.18418L5.60673 11.1923C4.23941 12.423 4.64495 13.3846 6.5598 13.3846H18.8176L19.3952 12.8076C20.7492 11.5841 20.3237 10.6153 18.4089 10.6153Z" fill="#0D7EE8" />
				</svg>
			</Topbar.Item>
		</Topbar.Left>

		<Topbar.Middle align="right">
			<Topbar.Item>
				<div className="flex gap-2">
					<div>Nav Item 1</div>
					<div>Nav Item 2</div>
					<div>Nav Item 3</div>
				</div>
			</Topbar.Item>
			<Topbar.Item>
				<Button
					variant="ghost"
					icon={ <ArrowUpRight /> }
					iconPosition="right"
				>
					Upgrade to Pro
				</Button>
			</Topbar.Item>
		</Topbar.Middle>

		<Topbar.Right>
			<Topbar.Item>
				<Badge label="V 0.0 2" size="xs" variant="neutral" closable={ false } />
			</Topbar.Item>
			<Topbar.Item className="gap-2">
				<CircleHelp />
				<Megaphone />
			</Topbar.Item>
			<Topbar.Item>
				<Avatar size="sm" border="ring">
					<User />
				</Avatar>
			</Topbar.Item>
		</Topbar.Right>
	</Topbar>
);

WithRightAlignment.storyName = 'Topbar with Right-Aligned Middle Section';
