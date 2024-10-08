import { Topbar } from "@/components";
import { Container } from "@/components";
import { ArrowUpRight, CircleHelp, Megaphone , CirclePlay, Plus, ExternalLink, House, Bell, Settings, Shield, AppWindow, PictureInPicture, Share2, Newspaper, ChartNoAxesGantt, Map, PanelLeftClose, Ellipsis, Headset, HelpCircle, MessageSquare, Star, Zap, Check, X } from 'lucide-react';
import { Button } from "@/components";
import { Badge } from "@/components";
import { Alert } from "@/components";
import { Label } from "@/components";
import { RadioButton } from "@/components";
import video from "./video.png"
import { SpectraLogo, AstraThemeSvg, StartersTemplatesSvg, SureCartSvg, PrestoPlayerSvg } from "./dashboard-2-svgs";
import contentImageSpectra from "./contentImageSpectra.png";
import unlockProSpectra from "./unlockProSpectra.png";

export default {
	title: 'Templates/Dashboard 2',
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
		icon: <House />,
		label: 'Login Form',
		description: 'Demo',
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
		label: 'Registration Form',
		description: 'Demo',
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
		label: 'Instagram Feed',
		description: 'Demo',
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
		label: 'Loop Builder',
		description: 'Demo',
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
		description: 'Documentation',
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



export const Dashboard2 = () => {
    const radioButtonGroupData = defaultRadioButtonGroupData;

    return (
        <>
            <div className="py-2 flex items-center justify-center relative bg-brand-background-100">
				<div className="space-x-1 text-text-primary text-xs">
					<span className="font-semibold">
						Unlock Spectra&apos;s Full Potential!
					</span>
					<span className="font-normal">
						Get exclusive features and unbeatable performance.
					</span>
					<span className="font-normal underline">Upgrade now</span>
				</div>
				<button className="inline-flex items-center justify-center absolute right-2 top-2 p-0 bg-transparent shadow-none border-0 outline-none focus:outline-none cursor-pointer">
					<X className="size-4" />
				</button>
			</div>
            <Topbar gap={0} className="h-16 p-0 shadow-sm">
                <Topbar.Left className="p-5">
                    <Topbar.Item>
                        <SpectraLogo />
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
                            <span>Blocks</span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>Settings</span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>AI Features</span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer">
                            <span>Free vs Pro</span>
                        </button>
                        <Button
                            variant="ghost"
                            icon={ <ArrowUpRight /> }
                            iconPosition="right"
                            className="h-full inline-flex items-center py-0 px-1 m-0 bg-transparent  shadow-none border-0 cursor-pointer text-sm font-semibold text-brand-primary-600"
                        >
                            Unlock Pro Features
                        </Button>
                    </Topbar.Item>
                </Topbar.Middle>
                <Topbar.Right className="p-5">
                    <Topbar.Item>
                        <Badge
                            label="Free"
                            size="xs"
                            variant="neutral"
                            closable={ false }
                        />
                    </Topbar.Item>
                    <Topbar.Item>
                        <CircleHelp />
                    </Topbar.Item>
                    <Topbar.Item>
                        <Megaphone />
                    </Topbar.Item>
                </Topbar.Right>
            </Topbar>

            <Container containerType="grid" cols={12} gap="2xl" className="bg-background-secondary p-8">
                {/* First Column */}
                <Container.Item colSpan={8} className="flex flex-col gap-8">
                    <Container containerType="grid" cols={8} gap={4} className="bg-background-primary p-6 shadow-sm rounded-2xl">
                        <Container.Item colSpan={5} className="flex flex-col ">
                            <h3 className="text-2xl m-0 font-bold">Welcome to Spectra!</h3>
                            <p className="text-sm text-text-secondary">
                            We designed Spectra to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Spectra!
                            </p>
                            <div className="flex space-x-4">
                                <Button
                                    variant="primary"
                                    iconPosition="right"
                                    icon={ <Plus /> }
                                >
                                    Create new page
                                </Button>
                                <Button
                                    variant="ghost" 
                                    iconPosition="right"
                                    icon={ <ExternalLink /> }
                                >
                                    Read full guide
                                </Button>
                            </div>
                        </Container.Item>
                    
                        <Container.Item colSpan={3}>
                            <img
                            src={video}
                            alt="Spectra image"
                            className="w-full h-full object-cover rounded-lg"
                            />
                        </Container.Item>
                    </Container>

                    <Container
                        containerType="flex"
                        direction="column"
                        className="md:w-full lg:w-full bg-background-primary border border-solid rounded-md border-border-subtle p-4"
                        gap="xs"
                    >
                        <Container.Item className="md:w-full p-1 lg:w-full">
                            <Container justify="between" gap="xs">
                                <Container.Item className="">
                                    <Label className="font-semibold">Blocks</Label>
                                </Container.Item>
                                <Container.Item className="items-center flex" gap="xs">
                                    <Label>
                                        View All <ArrowUpRight />{ ' ' }
                                    </Label>
                                    <Button variant="ghost" className="p-0 leading-none	">
                                        { ' ' }
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
                    
                    <Container containerType="grid" cols={8} gap={4} className="bg-background-primary p-6 shadow-sm rounded-2xl">
                        <Container.Item colSpan={4} className="flex flex-col ">
                            <div>
                                <Zap />
                                Unlock Pro Features
                            </div>
                            <div className="text-lg font-semibold">Limitless Design with Spectra Pro!</div>
                            <p className="text-sm text-text-secondary">
                            Utilize advanced blocks, extensions, and premium features to create a websites that stands out!
                            </p>
                            <div className="flex">
                                <div>
                                    <div className="flex">
                                        <Check />
                                        <p>Instagram Feed Block</p>
                                    </div>
                                    <div className="flex">
                                        <Check />
                                        <p>Dynamic Content</p>
                                    </div>
                                    <div className="flex">
                                        <Check />
                                        <p>Popup Builder</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex">
                                        <Check />
                                        <p>Global Block Styles</p>
                                    </div>
                                    <div className="flex">
                                        <Check />
                                        <p>Loop Builder</p>
                                    </div>
                                    <div className="flex">
                                        <Check />
                                        <p>And more...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <Button
                                    variant="primary"
                                >
                                    Upgrade now
                                </Button>
                                <Button
                                    variant="ghost" 
                                >
                                    Free vs Pro
                                </Button>
                            </div>
                        </Container.Item>
                    
                        <Container.Item colSpan={4}>
                            <img
                            src={unlockProSpectra}
                            alt="Spectra image"
                            className="w-full h-full object-cover rounded-lg"
                            />
                        </Container.Item>
                    </Container>

                </Container.Item>


                {/* Second Column */}
                <Container.Item colSpan={4} className="grid gap-8">

                    <Container
                        containerType="flex"
                        gap="xs"
                        direction="column"
                        className="bg-background-primary border border-solid rounded-md border-border-subtle p-4"
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
                            <Container className="grid grid-cols-2  p-1 gap-1">
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
                                                        className="[&>svg]:size-5"
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
                                                            className="p-0 text-link-primary"
                                                            size="sm"
                                                        >
                                                            { card.buttonText }
                                                        </Button>
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
                                <img src={contentImageSpectra} alt="" />
                            </Container.Item>
                            <Container.Item>
                                {/* <Container> */}
                                    <div className="text-base font-semibold">Build website 10x faster with AI</div>
                                    <div>Beautiful pages, persuasive content, and custom code in seconds. The possibilities are endless!</div>
                                {/* </Container> */}
                            </Container.Item>
                            <Container.Item>
                                <Button >
                                    Get Started
                                </Button>
                                <Label>Get 1000 free monthly credits</Label>
                            </Container.Item>
                    </Container>

                    <Container
                        containerType="flex"
                        direction="column"
                        className="bg-background-primary border border-solid rounded-xl border-border-subtle p-4"
                        gap="xs"
                    >
                        <Container.Item className="md:w-full lg:w-full p-1">
                            <Label className="font-semibold">Quick Access</Label>
                        </Container.Item>
                        <Container.Item className="md:w-full lg:w-full bg-field-primary-background p-1">
                            { /* Mapping the containerRowButtons array */ }
                            <RadioButton.Group
                                as="div"
                                defaultValue={ `option-${ containerRowButtons[ 0 ].id }` }
                                onChange={ ( value ) => {
                                    return value;
                                } }
                                vertical={ true }
                                className="w-full gap-1"
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
                        </Container.Item>
                    </Container>
                    
                </Container.Item>
            </Container>
            
        </>
    )
}

