import React from "react";
import { Topbar } from "@/components";
import { Container } from "@/components";
import { ArrowUpRight, CircleHelp, Bell, CirclePlay, Ellipsis, Upload, Paintbrush, PanelTop, PanelBottom, PaintBucket, Type, SquareMousePointer, PenTool, LayoutTemplate, Menu, Palette, Baseline, Ruler, Newspaper, PanelTopDashed, PanelsTopLeft } from 'lucide-react';
import { Button } from "@/components";
import { Badge } from "@/components";
import { Avatar } from "@/components";
import { Label } from "@/components";
import { RadioButton } from "@/components";
import media from "./media.png"
import AvatarImage from "./AvatarImage.png"
import { AstraTheme, StarterTheme, SureCart, SureTriggers } from "./dashboard-1-svgs";

export default {
	title: 'Templates/Dashboard 1',
	parameters: {
		layout: 'fullscreen',
	},
    decorators: [
        (Story, parameters) => (
            <div className="box-border [&_*]:box-border w-full">
                <Story {...parameters} />
            </div>
        )
    ],
	tags: [ 'autodocs' ],
};


const defaultRadioButtonGroupData = [
	{
		id: '1',
		value: 'analytics',
		icon: <Upload />,
		label: 'Site Identity',
		toggleLabel: 'Enable',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '2',
		value: 'notifications',
		icon: <Paintbrush />,
		label: 'Style Guide',
		toggleLabel: 'Disable',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'New' }
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
		icon: <PanelTop />,
		label: 'Header Builder',
		toggleLabel: 'Settings',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '4',
		value: 'security',
		icon: <PanelBottom />,
		label: 'Footer Builder',
		toggleLabel: 'Security',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '5',
		value: 'marketing',
		icon: <PaintBucket />,
		label: 'Colors',
		toggleLabel: 'Billing',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '6',
		value: 'modal',
		icon: <Type />,
		label: 'Typography',
		toggleLabel: 'modal',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '7',
		value: 'socialshare',
		icon: <SquareMousePointer  />,
		label: 'Button',
		toggleLabel: 'socialshare',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '8',
		value: 'Blockquote',
		icon: <PenTool />,
		label: 'Blog',
		toggleLabel: 'blockquote',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '9',
		value: 'contenttimeline',
		icon: <LayoutTemplate  />,
		label: 'Layout',
		toggleLabel: 'contenttimeline',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '10',
		value: 'googlemaps',
		icon: <Menu  />,
		label: 'Menus',
		toggleLabel: 'googlemaps',
		hideSelection: true,
		useSwitch: false,
	},
	{
		id: '11',
		value: 'lottieanimation',
		icon: <Palette />,
		label: 'Background',
		toggleLabel: 'lottieanimation',
		hideSelection: true,
		useSwitch: false,
        badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="green"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '12',
		value: 'animations',
		icon: <Baseline />,
		label: 'Advanced Typography',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '13',
		value: 'animations',
		icon: <Ruler />,
		label: 'Spacing',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '14',
		value: 'animations',
		icon: <Newspaper />,
		label: 'Blog Pro',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '15',
		value: 'animations',
		icon: <PanelTopDashed />,
		label: 'Sticky Header',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
	{
		id: '16',
		value: 'animations',
		icon: <PanelsTopLeft />,
		label: 'Site Layouts',
		toggleLabel: 'animations',
		hideSelection: true,
		useSwitch: false,
		badge: (
			<Badge
				label={ 'PRO' }
				size="md"
				icon={ null }
				variant="yellow"
				closable={ false }
				className="py-0 mr-2"
			/>
		),
	},
];

const astraRadioButtonGroupData = [
	{
		id: '1',
		svg: <AstraTheme />,
		title: 'Astra Theme',
		description: 'Free WordPress Page Builder Plugin.',
	},
	{
		id: '2',
		svg: <StarterTheme />,
		title: 'Starters Templates',
		description: 'Build your dream website in minutes with AI.',
	},
	{
		id: '3',
		svg: <SureCart />,
		title: 'SureCart',
		description: 'The new way to sell on WordPress.',
	},
	{
		id: '4',
		svg: <SureTriggers />,
		title: 'SureTriggers',
		description: 'Automate your WordPress setup.',
	},
];


export const Dashboard = () => {
    const radioButtonGroupData = defaultRadioButtonGroupData;

    return (
        <>
            <Topbar gap={0} className="h-16 p-0 shadow-sm">
                <Topbar.Left className="p-5">
                    <Topbar.Item>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37259 0 0 5.37258 0 12C0 18.6274 5.37259 24 12 24ZM11.8548 5.32264C10.8388 7.46606 9.82271 9.61189 8.80666 11.7577C7.79048 13.9038 6.77423 16.0499 5.75805 18.1936H8.37093C9.19357 16.5339 10.0161 14.8718 10.8387 13.2097C11.6613 11.5476 12.4838 9.88553 13.3065 8.22584L11.8548 5.32264ZM13.3064 13.258C13.7249 12.3871 14.1434 11.5162 14.5644 10.6452C15.1788 11.9032 15.7909 13.1612 16.4029 14.4192C17.0151 15.6773 17.6272 16.9354 18.2418 18.1936H15.4353C15.2757 17.8211 15.1136 17.4509 14.9515 17.0807C14.7894 16.7106 14.6273 16.3404 14.4676 15.9678H12.0482H11.9999L12.0482 15.871C12.4693 15 12.8878 14.129 13.3064 13.258Z" fill="url(#paint0_linear_9033_8902)"/>
                            <defs>
                            <linearGradient id="paint0_linear_9033_8902" x1="24" y1="-7.15256e-07" x2="-2.14577e-06" y2="24" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B147E1"/>
                            <stop offset="1" stop-color="#5236DD"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </Topbar.Item>
                </Topbar.Left>
                <Topbar.Middle align="left" className="h-full">
                    <Topbar.Item className="gap-4">
                        {/* Active Item underline */}
                        <button className="relative h-full text-text-primary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>Dashboard</span>
                            <span className="absolute w-full h-px bg-brand-primary-600 bottom-0 left-0 "></span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>Settings</span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>Starter Templates</span>
                        </button>
                        <Button
                            variant="ghost"
                            icon={ <ArrowUpRight /> }
                            iconPosition="right"
                            className="h-full inline-flex items-center py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer text-sm font-semibold text-brand-primary-600"
                        >
                            Upgrade to Pro
                        </Button>
                    </Topbar.Item>
                </Topbar.Middle>
                <Topbar.Right className="p-5">
                    <Topbar.Item>
                        <Badge
                            label="V 2.29.2"
                            size="xs"
                            variant="neutral"
                            closable={ false }
                        />
                    </Topbar.Item>
                    <Topbar.Item className="gap-2">
                        <CircleHelp strokeWidth={1.5}/>
                        <Bell strokeWidth={1.5}/>
                    </Topbar.Item>
                    <Topbar.Item>
                        <Avatar size="sm"  border="none"
                        url={AvatarImage}/>
                    </Topbar.Item>
                </Topbar.Right>
            </Topbar>

            <Container containerType="grid" cols={12} gap="2xl" className="bg-background-secondary p-8">
                {/* First Column */}
                <Container.Item colSpan={8} className="flex flex-col gap-8">
                    <Container containerType="grid" cols={8} gap={4} className="bg-background-primary p-6 shadow-sm rounded-2xl">
                        <Container.Item colSpan={5} className="flex flex-col ">
                            <h3 className="text-2xl m-0 font-bold">Welcome to Astra</h3>
                            <p className="text-sm text-text-secondary">
                            Astra is fast, fully customizable & beautiful WordPress theme suitable for blog, personal portfolio, business website and WooCommerce storefront. It is very lightweight and offers unparalleled speed.
                            </p>
                            <div className="flex space-x-4">
                                <Button>Start Customizing</Button>
                                <Button
                                    variant="ghost" 
                                    icon={ <CirclePlay /> }
                                >
                                    Watch a Quick Guide
                                </Button>
                            </div>
                        </Container.Item>
                    
                        <Container.Item colSpan={3}>
                            <img
                            src={media}
                            alt="Media image"
                            className="w-full h-full object-cover rounded-lg"
                            />
                        </Container.Item>
                    </Container>

                    {/* Radio Button Group */}
                    <Container
                        containerType="flex"
                        direction="column"
                        className="md:w-full lg:w-full bg-background-primary border border-solid rounded-xl border-border-subtle p-4"
                        gap="xs"
                    >
                        <Container.Item className="md:w-full p-1 lg:w-full">
                            <Container justify="between" gap="xs">
                                <Container.Item className="">
                                    <Label className="font-semibold">Quick Settings</Label>
                                </Container.Item>
                                <Container.Item className="items-center flex" gap="xs">
                                    <Label>
                                        View All 
                                        <ArrowUpRight />
                                    </Label>
                                    <Button variant="ghost" className="p-0 leading-none	">
                                        <Ellipsis />
                                    </Button>
                                </Container.Item>
                            </Container>
                        </Container.Item>
                        <Container.Item className="md:w-full lg:w-full p-1 bg-field-primary-background ">
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
                                        } }
                                        useSwitch={ option.useSwitch }
                                        className="px-2"
                                        badgeItem={ option.badge }
                                        // className="bg-background-primary"
                                    />
                                ) ) }
                            </RadioButton.Group>
                        </Container.Item>
                    </Container>

                </Container.Item>

                {/* Second Column */}
                <Container.Item colSpan={4} className="grid gap-8">

                    <Container
                        containerType="flex"
                        gap="xs"
                        direction="column"
                        className="border border-solid rounded-xl border-border-subtle p-4 bg-background-primary"
                    >
                        <Container.Item className="md:w-full lg:w-full">
                            <Container className="p-1" justify="between" gap="xs">
                                <Container.Item>
                                    <Label className="font-semibold">
                                        Integrations
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
                                            className="flex-1 gap-1 shadow-soft-shadow-inner p-2 rounded-md bg-background-primary"
                                        >
                                            <Container.Item>
                                                <Container className="gap-1 items-center">
                                                    <Container.Item
                                                        className="peer-[]:&>svg]:size-5"
                                                        grow={ 1 }
                                                        order="none"
                                                        shrink={ 1 }
                                                    >
                                                        { card.svg }
                                                    </Container.Item>
                                                </Container>
                                            </Container.Item>
                                            <Container.Item className="gap-0.5 p-1">
                                                <Label className="text-sm font-semibold">
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

                    <Container direction="column" gap="xs" className="p-5 bg-background-primary shadow-sm rounded-2xl">
                            <Container.Item>
                                <Container gap="xs" align="center">
                                    <div className="font-semibold">VIP Support</div>
                                    <Badge
                                        label={ 'PRO' }
                                        size="xs"
                                        icon={ null }
                                        variant="inverse"
                                        closable={ false }
                                        className="py-0"
                                    />
                                </Container>
                            </Container.Item>
                            <Container.Item>
                                <Container>
                                    <div className="text-sm text-secondary pb-2">Faster and exclusive support service designed for VIP assistance and benefits.</div>
                                </Container>
                            </Container.Item>
                            <Container.Item>
                                <Button variant="link">
                                    Know more
                                </Button>
                            </Container.Item>
                    </Container>

                    <Container direction="column" gap="xs" className="p-5 bg-background-primary shadow-sm rounded-2xl">
                            <Container.Item>
                                <Container gap="xs" align="center">
                                    <div className="font-semibold">Join the Community</div>
                                </Container>
                            </Container.Item>
                            <Container.Item>
                                <Container>
                                    <div className="text-sm text-secondary pb-2">Got a question about the plugin, want to share your awesome project? Join our wonderful community!</div>
                                </Container>
                            </Container.Item>
                            <Container.Item>
                                <Button variant="link">
                                    Join now
                                </Button>
                            </Container.Item>
                    </Container>
                    
                </Container.Item>
            </Container>
            
        </>
    )
}

