// RadioButtonGroup.stories.jsx
import React from 'react';
import RadioButton from './radio-button-group';
import Container from '../container';
import Button from '../button';
import Label from '../label';
import Badge from '../badge';
import {
	ArrowUpRight,
	Ellipsis,
	House,
	Bell,
	Settings,
	Shield,
	Share2,
	Map,
	Headset,
	MessageSquare,
	HelpCircle,
	Star,
	AppWindow,
	PictureInPicture,
	Newspaper,
	ChartNoAxesGantt,
	PanelLeftClose,
} from 'lucide-react';

export default {
	title: 'Organisms/Cards',
	component: RadioButton.Group,
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
	decorators: [
		( Story ) => (
			<div style={ { width: '1100px', padding: '10px' } }>
				<Story />
			</div>
		),
	],
};

// Data for Type 1
const defaultRadioButtonGroupData = [
	{
		id: '1',
		value: 'analytics',
		icon: <House />,
		label: 'Analytics',
		description: 'View detailed analytics reports and insights.',
		toggleLabel: 'Enable',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '2',
		value: 'notifications',
		icon: <Bell />,
		label: 'Notifications',
		description: 'Manage your notification preferences and settings.',
		toggleLabel: 'Disable',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '3',
		value: 'settings',
		icon: <Settings />,
		label: 'Settings',
		description: 'Configure your account and system settings.',
		toggleLabel: 'Settings',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '4',
		value: 'security',
		icon: <Shield />,
		label: 'Security',
		description: 'Update your security settings and passwords.',
		toggleLabel: 'Security',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="inverse"
				closable={ false }
				className="py-0"
			/>
		),
	},
	{
		id: '5',
		value: 'marketing',
		icon: <AppWindow />,
		label: 'Marketing Button',
		description: 'Demo',
		toggleLabel: 'Billing',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '6',
		value: 'modal',
		icon: <PictureInPicture />,
		label: 'Modal',
		description: 'Demo',
		toggleLabel: 'modal',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '7',
		value: 'socialshare',
		icon: <Share2 />,
		label: 'Social Share',
		description: 'Demo',
		toggleLabel: 'socialshare',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '8',
		value: 'Blockquote',
		icon: <Newspaper />,
		label: 'Blockquote',
		description: 'Demo',
		toggleLabel: 'blockquote',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '9',
		value: 'contenttimeline',
		icon: <ChartNoAxesGantt />,
		label: 'Content Timeline',
		description: 'Demo',
		toggleLabel: 'contenttimeline',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '10',
		value: 'googlemaps',
		icon: <Map />,
		label: 'Google Maps',
		description: 'Demo',
		toggleLabel: 'googlemaps',
		hideSelection: false,
		useSwitch: true,
		bagde: (
			<Badge
				label={ 'New' }
				size="md"
				icon={ null }
				variant="green"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '11',
		value: 'lottieanimation',
		icon: <House />,
		label: 'Lottie Animation',
		description: 'Demo',
		toggleLabel: 'lottieanimation',
		hideSelection: false,
		useSwitch: true,
	},
	{
		id: '12',
		value: 'animations',
		icon: <PanelLeftClose />,
		label: 'Animations',
		description: 'Demo',
		toggleLabel: 'animations',
		hideSelection: false,
		useSwitch: true,
		bagde: (
			<Badge
				label={ 'Extension' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
];

// Template for Type 1
const Template1 = () => {
	const radioButtonGroupData = defaultRadioButtonGroupData;

	return (
		<Container
			containerType="flex"
			direction="column"
			className="md:w-full lg:w-full border border-solid rounded-md border-border-subtle p-4"
			gap="xs"
		>
			<Container.Item className="md:w-full lg:w-full">
				<Container justify="between" gap="xs">
					<Container.Item className="">
						<Label className="font-semibold">Blocks</Label>
					</Container.Item>
					<Container.Item
						containerType="flex"
						direction="row"
						className="items-center"
						gap="xs"
					>
						<Label>
							View All <ArrowUpRight />{ ' ' }
						</Label>
						<Button variant="ghost" className="p-0">
							{ ' ' }
							<Ellipsis />
						</Button>
					</Container.Item>
				</Container>
			</Container.Item>
			<Container.Item className="md:w-full lg:w-full">
				<RadioButton.Group
					as="div"
					defaultValue={ `option-${ radioButtonGroupData[ 0 ].id }` }
					multiSelection={ true }
					onChange={ ( value ) => {
						return value;
					} }
					className="w-full"
				>
					{ radioButtonGroupData.map( ( option ) => (
						<RadioButton.Button
							key={ `option-${ option.id }` }
							borderOn={ true }
							value={ option.value }
							icon={ option.icon }
							hideSelection={ option.hideSelection }
							toggleLabel={ option.toggleLabel }
							label={ {
								heading: option.label,
								description: option.description,
							} }
							useSwitch={ option.useSwitch }
							className="px-2"
							badgeItem={ option.bagde }
						/>
					) ) }
				</RadioButton.Group>
			</Container.Item>
		</Container>
	);
};

const AstraThemeSvg = () => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.5 20C16.0229 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0229 0 10.5 0C4.97716 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97716 20 10.5 20ZM10.379 4.43553C9.53231 6.22172 8.68559 8.00991 7.83888 9.79805C6.99206 11.5865 6.14519 13.3749 5.29838 15.1613H7.47578C8.1613 13.7783 8.84678 12.3932 9.53225 11.0081C10.2177 9.62302 10.9032 8.23794 11.5887 6.85487L10.379 4.43553ZM11.5887 11.0483C11.9374 10.3225 12.2862 9.59679 12.637 8.87103C13.149 9.91933 13.6591 10.9677 14.1691 12.016C14.6793 13.0644 15.1894 14.1129 15.7015 15.1613H13.3628C13.2298 14.8509 13.0946 14.5424 12.9596 14.2339C12.8245 13.9255 12.6894 13.617 12.5563 13.3065H10.5402H10.4999L10.5402 13.2258C10.8911 12.5 11.2399 11.7742 11.5887 11.0483Z"
				fill="url(#paint0_linear_9131_38968)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_9131_38968"
					x1="20.5"
					y1="-5.96046e-07"
					x2="0.499998"
					y2="20"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#B147E1" />
					<stop offset="1" stopColor="#5236DD" />
				</linearGradient>
			</defs>
		</svg>
	);
};

const StartersTemplatesSvg = () => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_9150_48086)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M16.4016 1.63934H4.59835C3.24029 1.63934 2.13934 2.74029 2.13934 4.09835V15.9016C2.13934 17.2597 3.24029 18.3606 4.59835 18.3606H16.4016C17.7597 18.3606 18.8606 17.2597 18.8606 15.9016V4.09835C18.8606 2.74029 17.7597 1.63934 16.4016 1.63934ZM4.59835 0C2.3349 0 0.5 1.8349 0.5 4.09835V15.9016C0.5 18.1651 2.3349 20 4.59835 20H16.4016C18.6651 20 20.5 18.1651 20.5 15.9016V4.09835C20.5 1.8349 18.6651 0 16.4016 0H4.59835Z"
					fill="url(#paint0_linear_9150_48086)"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M12.5872 6.29437C12.5488 6.26 12.5082 6.2271 12.4655 6.19567C12.0954 5.92315 11.593 5.78687 10.9584 5.78687C10.5273 5.78687 10.1632 5.8479 9.86628 5.96992C9.56934 6.08788 9.34155 6.25262 9.18293 6.46415C9.01251 6.69733 8.7223 6.88631 8.47134 6.74335C8.27436 6.63112 8.09247 6.49269 7.93091 6.33115C7.62957 6.02981 7.40864 5.65771 7.28832 5.2489C7.2353 5.06879 7.28222 4.87194 7.42403 4.7489C7.74116 4.47371 8.11186 4.24208 8.53616 4.05404C9.25207 3.73677 10.0656 3.57812 10.9768 3.57812C11.9042 3.57812 12.7137 3.73677 13.4052 4.05404C14.1007 4.37133 14.6417 4.81267 15.0282 5.37808C15.1695 5.5849 15.2858 5.80371 15.3771 6.03448C15.6478 6.71883 15.023 7.34275 14.2871 7.34275C13.7126 7.34275 13.2527 6.91308 12.8182 6.50717C12.7406 6.4346 12.6637 6.36281 12.5872 6.29437ZM8.80462 7.648C8.91368 7.60535 9.03045 7.6699 9.09141 7.76985C9.19716 7.93663 9.34155 8.08104 9.52459 8.20306C9.70766 8.32102 9.91918 8.42475 10.1592 8.51425C10.3992 8.59967 10.6554 8.67287 10.9279 8.7339L12.0506 9.00235C12.5957 9.1244 13.096 9.2871 13.5516 9.49048C14.0072 9.69387 14.4017 9.94402 14.7353 10.241C15.0688 10.5379 15.3271 10.8877 15.5102 11.2904C15.6973 11.6931 15.7929 12.1548 15.7969 12.6755C15.7929 13.4402 15.5976 14.1032 15.2112 14.6646C14.8288 15.2218 14.2756 15.655 13.5516 15.9642C12.8316 16.2692 11.9632 16.4218 10.9463 16.4218C9.93747 16.4218 9.05887 16.2672 8.31041 15.9581C7.56603 15.6489 6.98434 15.1913 6.56539 14.5852C6.37201 14.3009 6.22151 13.9852 6.11384 13.6381C5.89668 12.938 6.51564 12.3216 7.24859 12.3216H7.34364C7.97716 12.3216 8.44774 12.8651 8.82903 13.371C9.04461 13.6476 9.33139 13.8571 9.68934 13.9995C10.0514 14.1378 10.4602 14.2069 10.9157 14.2069C11.3632 14.2069 11.7517 14.1419 12.0811 14.0117C12.4147 13.8815 12.673 13.7005 12.856 13.4687C13.0391 13.2368 13.1306 12.9704 13.1306 12.6694C13.1306 12.3887 13.0472 12.1528 12.8804 11.9616C12.7177 11.7704 12.4777 11.6077 12.1604 11.4735C11.8472 11.3392 11.4628 11.2172 11.0073 11.1074L9.64664 10.7657C8.75409 10.5486 8.02066 10.2278 7.44634 9.80344C7.29109 9.68871 7.2338 9.48675 7.28832 9.30156C7.40859 8.89279 7.62951 8.52071 7.9308 8.21937C8.18005 7.97008 8.47776 7.77581 8.80462 7.648ZM7.18782 5.92431L7.06824 5.51804C7.06309 5.5004 7.05236 5.4849 7.03768 5.47387C7.02297 5.46285 7.00509 5.4569 6.98672 5.4569C6.96834 5.4569 6.95047 5.46285 6.93576 5.47387C6.92105 5.4849 6.91032 5.5004 6.90518 5.51804L6.78578 5.92431C6.70555 6.19681 6.55824 6.44485 6.35734 6.64571C6.15647 6.84656 5.90841 6.99381 5.63586 7.07402L5.22957 7.19358C5.14822 7.21771 5.14822 7.33285 5.22957 7.35665L5.63586 7.47621C5.90836 7.55642 6.15639 7.70371 6.35726 7.90456C6.55811 8.1054 6.70539 8.35342 6.78561 8.62592L6.90518 9.03235C6.92914 9.11354 7.0443 9.11354 7.06824 9.03235L7.18782 8.62608C7.26801 8.35356 7.41528 8.1055 7.61616 7.90462C7.81701 7.70375 8.06505 7.55644 8.33757 7.47621L8.74403 7.35665C8.82522 7.33269 8.82522 7.21754 8.74403 7.19375L8.33774 7.07419C8.06518 6.99398 7.81712 6.84669 7.61622 6.64579C7.41532 6.44492 7.26803 6.19685 7.18782 5.92431ZM5.73847 8.32398L5.77434 8.44585C5.79841 8.52763 5.84259 8.60204 5.90286 8.66231C5.96311 8.72256 6.03755 8.76675 6.1193 8.79081L6.2412 8.82669C6.26555 8.83383 6.26555 8.86837 6.2412 8.87556L6.11926 8.91144C6.03751 8.9355 5.96309 8.97969 5.90282 9.03996C5.84257 9.10023 5.79839 9.17465 5.77434 9.2564L5.73847 9.37827C5.73128 9.40263 5.69674 9.40263 5.68955 9.37827L5.65368 9.25633C5.62961 9.1746 5.58543 9.10019 5.52516 9.03994C5.46491 8.97967 5.39049 8.9355 5.30874 8.91144L5.18686 8.87556C5.16245 8.86842 5.16245 8.83388 5.18686 8.82665L5.30874 8.79077C5.39051 8.76671 5.46493 8.72254 5.5252 8.66227C5.58547 8.60202 5.62966 8.5276 5.65372 8.44585L5.68955 8.32398C5.69109 8.31869 5.6943 8.31404 5.69872 8.31073C5.70314 8.30742 5.70849 8.30562 5.71401 8.30562C5.71951 8.30562 5.72489 8.30742 5.72928 8.31073C5.7337 8.31404 5.73693 8.31869 5.73847 8.32398ZM5.50482 5.00817L5.44903 4.81858C5.44661 4.81035 5.44161 4.80313 5.43476 4.79798C5.42789 4.79283 5.41955 4.79004 5.41097 4.79004C5.40241 4.79004 5.39405 4.79283 5.3872 4.79798C5.38034 4.80313 5.37532 4.81035 5.37293 4.81858L5.3172 5.00817C5.27976 5.13535 5.21103 5.25108 5.11728 5.34483C5.02353 5.43856 4.90776 5.50727 4.78057 5.54471L4.59097 5.6005C4.55301 5.61175 4.55301 5.6655 4.59097 5.6766L4.78057 5.7324C4.90774 5.76983 5.02349 5.83856 5.11722 5.93229C5.21097 6.02602 5.2797 6.14177 5.31714 6.26892L5.37293 6.4586C5.38411 6.49648 5.43784 6.49648 5.44903 6.4586L5.50482 6.269C5.54224 6.14183 5.61097 6.02606 5.70472 5.93231C5.79845 5.83858 5.9142 5.76983 6.04136 5.7324L6.23105 5.6766C6.26895 5.66542 6.26895 5.61169 6.23105 5.60058L6.04145 5.54477C5.91426 5.50735 5.79849 5.43862 5.70474 5.34487C5.61099 5.25112 5.54226 5.13535 5.50482 5.00817Z"
					fill="url(#paint1_linear_9150_48086)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_9150_48086"
					x1="1.80248"
					y1="19.7653"
					x2="8.31504"
					y2="-2.89315"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#C639FF" />
					<stop offset="1" stopColor="#3662FF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_9150_48086"
					x1="5.29414"
					y1="16.271"
					x2="9.96601"
					y2="2.05327"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#C639FF" />
					<stop offset="1" stopColor="#3662FF" />
				</linearGradient>
				<clipPath id="clip0_9150_48086">
					<rect
						width="20"
						height="20"
						fill="white"
						transform="translate(0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

const SureCartSvg = () => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.5 20C16.0229 20 20.5 15.5228 20.5 9.99995C20.5 4.47713 16.0229 0 10.5 0C4.97716 0 0.5 4.47713 0.5 9.99995C0.5 15.5228 4.97716 20 10.5 20ZM10.5431 4.99997C9.74015 4.99997 8.62895 5.45918 8.06117 6.02561L6.51908 7.56407H14.2054L16.7755 4.99997H10.5431ZM12.9259 13.9743C12.3582 14.5407 11.247 14.9999 10.444 14.9999H4.21157L6.7817 12.4358H14.468L12.9259 13.9743ZM15.4241 8.84611H5.23681L4.7556 9.32688C3.61617 10.3525 3.95412 11.1538 5.54983 11.1538H15.7647L16.246 10.673C17.3744 9.65344 17.0198 8.84611 15.4241 8.84611Z"
				fill="#01824C"
			/>
		</svg>
	);
};

const PrestoPlayerSvg = () => {
	return (
		<svg
			width="21"
			height="20"
			viewBox="0 0 21 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.6094 9.93105L19.3338 6.60156V13.2606L13.6094 9.93105Z"
				fill="#3A30E5"
			/>
			<path
				d="M13.6094 3.32812L19.3338 6.65763L13.6094 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 3.32812V9.9287L7.89062 6.59922L13.615 3.32812Z"
				fill="#4067EE"
			/>
			<path
				d="M13.6697 3.32948L7.94531 6.65899V0L13.6697 3.32948Z"
				fill="#476EF9"
			/>
			<path
				d="M7.88845 6.66016V13.3191L2.16406 9.98964L7.88845 6.66016Z"
				fill="#624AF6"
			/>
			<path
				d="M7.88845 0V6.65899L2.16406 3.32948L7.88845 0Z"
				fill="#4067EE"
			/>
			<path
				d="M7.88845 13.2578V19.9168L2.16406 16.5873L7.88845 13.2578Z"
				fill="#7C3AED"
			/>
			<path
				d="M13.6094 9.92969L19.3338 13.2592L13.6094 16.5887V9.92969Z"
				fill="#4F46E5"
			/>
			<path
				d="M2.16406 9.92969L7.88845 13.2592L2.16406 16.5887V9.92969Z"
				fill="#814AF7"
			/>
			<path
				d="M2.16406 3.32812L7.88845 6.65763L2.16406 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 9.92969V16.5887L7.89062 13.2592L13.615 9.92969Z"
				fill="#624AF6"
			/>
			<path
				d="M13.6094 9.93105L19.3338 6.60156V13.2606L13.6094 9.93105Z"
				fill="#3A30E5"
			/>
			<path
				d="M13.6094 3.32812L19.3338 6.65763L13.6094 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 3.32812V9.9287L7.89062 6.59922L13.615 3.32812Z"
				fill="#4067EE"
			/>
			<path
				d="M13.6697 3.32948L7.94531 6.65899V0L13.6697 3.32948Z"
				fill="#476EF9"
			/>
			<path
				d="M7.88845 6.66016V13.3191L2.16406 9.98964L7.88845 6.66016Z"
				fill="#624AF6"
			/>
			<path
				d="M7.88845 0V6.65899L2.16406 3.32948L7.88845 0Z"
				fill="#4067EE"
			/>
			<path
				d="M7.88845 13.2578V19.9168L2.16406 16.5873L7.88845 13.2578Z"
				fill="#7C3AED"
			/>
			<path
				d="M13.6094 9.92969L19.3338 13.2592L13.6094 16.5887V9.92969Z"
				fill="#4F46E5"
			/>
			<path
				d="M2.16406 9.92969L7.88845 13.2592L2.16406 16.5887V9.92969Z"
				fill="#814AF7"
			/>
			<path
				d="M2.16406 3.32812L7.88845 6.65763L2.16406 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 9.92969V16.5887L7.89062 13.2592L13.615 9.92969Z"
				fill="#624AF6"
			/>
			<path
				d="M13.6094 9.93105L19.3338 6.60156V13.2606L13.6094 9.93105Z"
				fill="#3A30E5"
			/>
			<path
				d="M13.6094 3.32812L19.3338 6.65763L13.6094 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 3.32812V9.9287L7.89062 6.59922L13.615 3.32812Z"
				fill="#4067EE"
			/>
			<path
				d="M13.6697 3.32948L7.94531 6.65899V0L13.6697 3.32948Z"
				fill="#476EF9"
			/>
			<path
				d="M7.88845 6.66016V13.3191L2.16406 9.98964L7.88845 6.66016Z"
				fill="#624AF6"
			/>
			<path
				d="M7.88845 0V6.65899L2.16406 3.32948L7.88845 0Z"
				fill="#4067EE"
			/>
			<path
				d="M7.88845 13.2578V19.9168L2.16406 16.5873L7.88845 13.2578Z"
				fill="#7C3AED"
			/>
			<path
				d="M13.6094 9.92969L19.3338 13.2592L13.6094 16.5887V9.92969Z"
				fill="#4F46E5"
			/>
			<path
				d="M2.16406 9.92969L7.88845 13.2592L2.16406 16.5887V9.92969Z"
				fill="#814AF7"
			/>
			<path
				d="M2.16406 3.32812L7.88845 6.65763L2.16406 9.98711V3.32812Z"
				fill="#3058E5"
			/>
			<path
				d="M13.615 9.92969V16.5887L7.89062 13.2592L13.615 9.92969Z"
				fill="#624AF6"
			/>
		</svg>
	);
};

const astraRadioButtonGroupData = [
	{
		id: '1',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <AstraThemeSvg />,
		title: 'Astra Theme',
		description: 'Free WordPress Page Builder Plugin.',
	},
	{
		id: '2',
		badgeText: 'Free',
		buttonText: 'Activate',
		svg: <StartersTemplatesSvg />,
		title: 'Starters Templates',
		description: 'Build your dream website in minutes with AI.',
	},
	{
		id: '3',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <SureCartSvg />,
		title: 'SureCart',
		description: 'The new way to sell on WordPress.',
	},
	{
		id: '4',
		badgeText: 'Free',
		buttonText: 'Install',
		svg: <PrestoPlayerSvg />,
		title: 'Presto Player',
		description: 'Automate your WordPress setup.',
	},
];

// Template for Type 2
const Template2 = () => {
	return (
		<Container
			containerType="flex"
			gap="xs"
			direction="column"
			className="w-120 border border-solid rounded-md border-border-subtle p-4"
		>
			<Container.Item className="md:w-full lg:w-full">
				<Container className="p-1" justify="between" gap="xs">
					<Container.Item>
						<Label className="font-semibold">
							Extend Your Website
						</Label>
					</Container.Item>
					<Container.Item
						containerType="flex"
						direction="row"
						className="items-center"
						gap="xs"
					>
						<Button className="p-0" variant="ghost">
							<ArrowUpRight />
						</Button>
					</Container.Item>
				</Container>
			</Container.Item>
			<Container.Item className="md:w-full lg:w-full bg-field-primary-background rounded-lg">
				<Container className="grid grid-cols-2 p-1 gap-1">
					{ astraRadioButtonGroupData.map( ( card ) => (
						<Container.Item
							key={ card.id }
							className="md:w-full lg:w-full flex"
						>
							<Container
								containerType="flex"
								direction="column"
								className="gap-1 shadow-soft-shadow-inner p-2 rounded-md bg-background-primary"
							>
								<Container.Item>
									<Container className="gap-1 items-center">
										<Container.Item
											className="&>svg]:size-5"
											grow={ 1 }
											order="none"
											shrink={ 1 }
										>
											{ card.svg }
										</Container.Item>
										<Container.Item>
											<Badge
												label={ card.badgeText }
												icon={ null }
												variant="green"
												closable={ false }
												className="py-0"
											/>
										</Container.Item>
										<Container.Item>
											<Button
												variant="link"
												className="p-0"
												size="sm"
											>
												{ card.buttonText }
											</Button>
										</Container.Item>
									</Container>
								</Container.Item>
								<Container.Item className="gap-0.5 p-1">
									<Label className="text-sm font-medium">
										{ card.title }
									</Label>
									<Label variant="help" className="text-sm">
										{ card.description }
									</Label>
								</Container.Item>
							</Container>
						</Container.Item>
					) ) }
				</Container>
			</Container.Item>
		</Container>
	);
};

const containerRowButtons = [
	{
		id: '1',
		value: 'vipsupport',
		icon: <Headset />,
		label: 'VIP Support',
		hideSelection: true,
		useSwitch: false,
		bagde: (
			<Badge
				label={ 'PRO' }
				icon={ null }
				variant="inverse"
				closable={ false }
			/>
		),
	},
	{
		id: '2',
		value: 'helpcenter',
		icon: <HelpCircle />,
		label: 'Help Center',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '3',
		value: 'community',
		icon: <MessageSquare />,
		label: 'Join the Community',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '4',
		value: 'rateus',
		icon: <Star />,
		label: 'Rate Us',
		hideSelection: true,
		useSwitch: false,
	},
];

const Template3 = () => {
	return (
		<Container
			containerType="flex"
			direction="column"
			className="w-96 border border-solid rounded-xl border-border-subtle p-4"
			gap="xs"
		>
			<Container.Item className="md:w-full lg:w-full">
				<Label className="font-semibold">Quick Access</Label>
			</Container.Item>

			{ /* Mapping the containerRowButtons array */ }
			<RadioButton.Group
				as="div"
				defaultValue={ `option-${ containerRowButtons[ 0 ].id }` }
				onChange={ ( value ) => {
					return value;
				} }
				vertical={ true }
				className="w-full"
			>
				{ containerRowButtons.map( ( option ) => (
					<RadioButton.Button
						key={ `option-${ option.id }` }
						borderOn={ true }
						value={ option.value }
						inlineIcon={ true }
						icon={ option.icon }
						hideSelection={ option.hideSelection }
						toggleLabel={ option.toggleLabel }
						label={ {
							heading: option.label,
						} }
						useSwitch={ option.useSwitch }
						className="px-2"
						badgeItem={ option.bagde }
					/>
				) ) }
			</RadioButton.Group>
		</Container>
	);
};

// Export Type1 Story
export const Type1 = Template1.bind( {} );
export const Type2 = Template2.bind( {} );
export const Type3 = Template3.bind( {} );
