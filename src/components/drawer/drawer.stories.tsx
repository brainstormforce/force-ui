import { useState, Fragment } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Drawer from './drawer';
import Button from '../button';

interface AdditionalArgTypes {
	title?: string | React.ReactNode;
	titleTag?: React.ElementType;
}

const meta: Meta<typeof Drawer> = {
	title: 'Organisms/Drawer',
	component: Drawer,
	subcomponents: {
		'Drawer.Panel': Drawer.Panel,
		'Drawer.Header': Drawer.Header,
		'Drawer.Title': Drawer.Title,
		'Drawer.Description': Drawer.Description,
		'Drawer.Body': Drawer.Body,
		'Drawer.Footer': Drawer.Footer,
		'Drawer.CloseButton': Drawer.CloseButton,
	} as Record<string, React.ComponentType<any>>,
	parameters: {
		layout: 'fullscreen',
		controls: { expanded: true },
	},
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="font-sans [&_*]:font-sans h-[600px] flex items-center justify-center">
				<Story />
			</div>
		),
	],
	argTypes: {
		design: {
			control: 'select',
			table: {
				type: { summary: 'string' },
			},
		},
		trigger: {
			table: {
				type: { summary: 'React.ElementType' },
			},
		},
		position: {
			control: 'select',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

export default meta;

const Logo = ({ className }: Record<string, string>) => (
	<svg
		width="116"
		height="24"
		viewBox="0 0 116 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<g clipPath="url(#clip0_6645_69725)">
			<path
				d="M12.0002 24C18.6278 24 24.0002 18.6276 24.0002 12V3.6C24.0002 2.64522 23.621 1.72955 22.9458 1.05442C22.2707 0.379285 21.355 0 20.4002 0L12.6002 0V5.2644C12.6002 6.4656 12.6734 7.71 13.3034 8.7324C13.7545 9.46513 14.3578 10.0923 15.0725 10.5713C15.7873 11.0503 16.5967 11.37 17.4458 11.5086L17.6756 11.5458C17.7704 11.5782 17.8526 11.6394 17.9109 11.7208C17.9691 11.8023 18.0004 11.8999 18.0004 12C18.0004 12.1001 17.9691 12.1977 17.9109 12.2792C17.8526 12.3606 17.7704 12.4218 17.6756 12.4542L17.4458 12.4914C16.2052 12.6941 15.0595 13.2813 14.1705 14.1703C13.2816 15.0592 12.6943 16.2049 12.4916 17.4456L12.4544 17.6754C12.4221 17.7701 12.3609 17.8524 12.2794 17.9106C12.198 17.9688 12.1004 18.0002 12.0002 18.0002C11.9001 18.0002 11.8025 17.9688 11.7211 17.9106C11.6396 17.8524 11.5784 17.7701 11.546 17.6754L11.5088 17.4456C11.3702 16.5965 11.0505 15.7871 10.5715 15.0723C10.0925 14.3576 9.46535 13.7542 8.73265 13.3032C7.71025 12.6732 6.46585 12.6 5.26465 12.6H0.0146484C0.328448 18.9486 5.57425 24 12.0002 24Z"
				fill="#9333EA"
			/>
			<path
				d="M0 11.4H5.2644C6.4656 11.4 7.71 11.3268 8.7324 10.6968C9.53161 10.2044 10.2044 9.53161 10.6968 8.7324C11.3268 7.71 11.4 6.4656 11.4 5.2644V0H3.6C2.64522 0 1.72955 0.379285 1.05442 1.05442C0.379285 1.72955 0 2.64522 0 3.6L0 11.4Z"
				fill="#9333EA"
			/>
		</g>
		<path
			d="M31.328 18V6.8H35.024C35.792 6.8 36.4533 6.91733 37.008 7.152C37.5733 7.38667 38.0107 7.73867 38.32 8.208C38.6293 8.66667 38.784 9.24267 38.784 9.936C38.784 10.416 38.6667 10.848 38.432 11.232C38.208 11.616 37.888 11.936 37.472 12.192C38.016 12.4587 38.432 12.816 38.72 13.264C39.008 13.712 39.152 14.2453 39.152 14.864C39.152 15.5253 39.0027 16.0907 38.704 16.56C38.4053 17.0293 37.984 17.3867 37.44 17.632C36.896 17.8773 36.2507 18 35.504 18H31.328ZM33.152 16.336H35.36C35.9467 16.336 36.4107 16.192 36.752 15.904C37.0933 15.616 37.264 15.2267 37.264 14.736C37.264 14.2027 37.072 13.7867 36.688 13.488C36.3147 13.1893 35.7867 13.04 35.104 13.04H33.152V16.336ZM33.152 11.504H35.184C35.7173 11.504 36.1333 11.3653 36.432 11.088C36.7413 10.8 36.896 10.4053 36.896 9.904C36.896 9.392 36.72 9.00267 36.368 8.736C36.0267 8.45867 35.5467 8.32 34.928 8.32H33.152V11.504ZM41.9729 13.744C41.9729 12.88 42.1382 12.1707 42.4689 11.616C42.7995 11.0613 43.2262 10.6507 43.7489 10.384C44.2822 10.1067 44.8369 9.968 45.4129 9.968V11.68C44.9222 11.68 44.4582 11.7493 44.0209 11.888C43.5942 12.016 43.2475 12.2293 42.9809 12.528C42.7142 12.8267 42.5809 13.2213 42.5809 13.712L41.9729 13.744ZM40.7889 18V10H42.5809V18H40.7889ZM51.4814 18L51.4014 16.496V13.888C51.4014 13.344 51.3427 12.8907 51.2254 12.528C51.1187 12.1547 50.9374 11.872 50.6814 11.68C50.436 11.4773 50.1054 11.376 49.6894 11.376C49.3054 11.376 48.9694 11.456 48.6814 11.616C48.3934 11.776 48.148 12.0267 47.9454 12.368L46.3774 11.792C46.548 11.44 46.772 11.1147 47.0494 10.816C47.3374 10.5067 47.6947 10.2613 48.1214 10.08C48.5587 9.89867 49.0814 9.808 49.6894 9.808C50.468 9.808 51.1187 9.96267 51.6414 10.272C52.164 10.5707 52.548 11.0027 52.7934 11.568C53.0494 12.1333 53.1774 12.816 53.1774 13.616L53.1294 18H51.4814ZM49.1774 18.192C48.2174 18.192 47.4707 17.9787 46.9374 17.552C46.4147 17.1253 46.1534 16.5227 46.1534 15.744C46.1534 14.912 46.4307 14.2773 46.9854 13.84C47.5507 13.4027 48.3347 13.184 49.3374 13.184H51.4814V14.56H49.9134C49.1987 14.56 48.6974 14.6613 48.4094 14.864C48.1214 15.056 47.9774 15.3333 47.9774 15.696C47.9774 16.0053 48.1 16.2507 48.3454 16.432C48.6014 16.6027 48.9534 16.688 49.4014 16.688C49.8067 16.688 50.1587 16.5973 50.4574 16.416C50.756 16.2347 50.9854 15.9947 51.1454 15.696C51.316 15.3973 51.4014 15.0613 51.4014 14.688H51.9294C51.9294 15.776 51.7107 16.6347 51.2734 17.264C50.836 17.8827 50.1374 18.192 49.1774 18.192ZM54.992 18V10H56.672L56.784 11.472V18H54.992ZM60.416 18V13.904H62.208V18H60.416ZM60.416 13.904C60.416 13.264 60.3413 12.7733 60.192 12.432C60.0533 12.08 59.8507 11.8347 59.584 11.696C59.328 11.5573 59.024 11.488 58.672 11.488C58.0747 11.4773 57.6107 11.6747 57.28 12.08C56.9493 12.4853 56.784 13.0667 56.784 13.824H56.112C56.112 12.9813 56.2347 12.2613 56.48 11.664C56.7253 11.056 57.0773 10.5973 57.536 10.288C57.9947 9.968 58.5387 9.808 59.168 9.808C59.808 9.808 60.352 9.936 60.8 10.192C61.2587 10.448 61.6053 10.848 61.84 11.392C62.0853 11.9253 62.208 12.624 62.208 13.488V13.904H60.416ZM69.7993 18L69.7193 16.512V6.8H71.4953V18H69.7993ZM67.1913 18.192C66.4659 18.192 65.8313 18.0213 65.2873 17.68C64.7539 17.328 64.3326 16.8373 64.0233 16.208C63.7246 15.5787 63.5753 14.8427 63.5753 14C63.5753 13.1467 63.7246 12.4107 64.0233 11.792C64.3326 11.1627 64.7539 10.6773 65.2873 10.336C65.8313 9.984 66.4659 9.808 67.1913 9.808C67.8633 9.808 68.4393 9.984 68.9193 10.336C69.4099 10.6773 69.7833 11.1627 70.0393 11.792C70.2953 12.4107 70.4233 13.1467 70.4233 14C70.4233 14.8427 70.2953 15.5787 70.0393 16.208C69.7833 16.8373 69.4099 17.328 68.9193 17.68C68.4393 18.0213 67.8633 18.192 67.1913 18.192ZM67.6393 16.56C68.0446 16.56 68.4019 16.4533 68.7113 16.24C69.0313 16.016 69.2766 15.712 69.4473 15.328C69.6286 14.944 69.7193 14.5013 69.7193 14C69.7193 13.4987 69.6286 13.056 69.4473 12.672C69.2766 12.288 69.0313 11.9893 68.7113 11.776C68.4019 11.5627 68.0393 11.456 67.6233 11.456C67.1966 11.456 66.8179 11.5627 66.4873 11.776C66.1566 11.9893 65.8953 12.288 65.7033 12.672C65.5219 13.056 65.4259 13.4987 65.4153 14C65.4259 14.5013 65.5219 14.944 65.7033 15.328C65.8953 15.712 66.1566 16.016 66.4873 16.24C66.8286 16.4533 67.2126 16.56 67.6393 16.56ZM73.8124 18V6.8H75.7324L81.6844 14.896V6.8H83.5404V18H81.6844L75.6684 9.808V18H73.8124ZM90.747 18L90.667 16.496V13.888C90.667 13.344 90.6083 12.8907 90.491 12.528C90.3843 12.1547 90.203 11.872 89.947 11.68C89.7017 11.4773 89.371 11.376 88.955 11.376C88.571 11.376 88.235 11.456 87.947 11.616C87.659 11.776 87.4137 12.0267 87.211 12.368L85.643 11.792C85.8137 11.44 86.0377 11.1147 86.315 10.816C86.603 10.5067 86.9603 10.2613 87.387 10.08C87.8243 9.89867 88.347 9.808 88.955 9.808C89.7337 9.808 90.3843 9.96267 90.907 10.272C91.4297 10.5707 91.8137 11.0027 92.059 11.568C92.315 12.1333 92.443 12.816 92.443 13.616L92.395 18H90.747ZM88.443 18.192C87.483 18.192 86.7363 17.9787 86.203 17.552C85.6803 17.1253 85.419 16.5227 85.419 15.744C85.419 14.912 85.6963 14.2773 86.251 13.84C86.8163 13.4027 87.6003 13.184 88.603 13.184H90.747V14.56H89.179C88.4643 14.56 87.963 14.6613 87.675 14.864C87.387 15.056 87.243 15.3333 87.243 15.696C87.243 16.0053 87.3657 16.2507 87.611 16.432C87.867 16.6027 88.219 16.688 88.667 16.688C89.0723 16.688 89.4243 16.5973 89.723 16.416C90.0217 16.2347 90.251 15.9947 90.411 15.696C90.5817 15.3973 90.667 15.0613 90.667 14.688H91.195C91.195 15.776 90.9763 16.6347 90.539 17.264C90.1017 17.8827 89.403 18.192 88.443 18.192ZM94.2576 18V10H95.9376L96.0176 11.072C96.263 10.656 96.5776 10.3413 96.9616 10.128C97.3456 9.91467 97.783 9.808 98.2736 9.808C98.9136 9.808 99.4576 9.952 99.9056 10.24C100.354 10.528 100.679 10.9653 100.882 11.552C101.116 10.9867 101.447 10.5547 101.874 10.256C102.3 9.95733 102.802 9.808 103.378 9.808C104.306 9.808 105.02 10.1067 105.522 10.704C106.023 11.2907 106.268 12.1973 106.258 13.424V18H104.482V13.904C104.482 13.264 104.412 12.7733 104.274 12.432C104.135 12.08 103.948 11.8347 103.714 11.696C103.479 11.5573 103.207 11.488 102.898 11.488C102.343 11.4773 101.911 11.6747 101.602 12.08C101.303 12.4853 101.154 13.0667 101.154 13.824V18H99.3616V13.904C99.3616 13.264 99.2923 12.7733 99.1536 12.432C99.0256 12.08 98.8443 11.8347 98.6096 11.696C98.375 11.5573 98.103 11.488 97.7936 11.488C97.239 11.4773 96.807 11.6747 96.4976 12.08C96.199 12.4853 96.0496 13.0667 96.0496 13.824V18H94.2576ZM111.654 18.192C110.875 18.192 110.182 18.016 109.574 17.664C108.976 17.3013 108.502 16.8053 108.15 16.176C107.808 15.5467 107.638 14.8213 107.638 14C107.638 13.1787 107.814 12.4533 108.166 11.824C108.518 11.1947 108.998 10.704 109.606 10.352C110.224 9.98933 110.928 9.808 111.718 9.808C112.432 9.808 113.078 9.99467 113.654 10.368C114.23 10.7307 114.683 11.2587 115.014 11.952C115.355 12.6453 115.526 13.472 115.526 14.432H109.238L109.478 14.208C109.478 14.6987 109.584 15.1253 109.798 15.488C110.011 15.84 110.294 16.112 110.646 16.304C110.998 16.496 111.387 16.592 111.814 16.592C112.304 16.592 112.71 16.4853 113.03 16.272C113.35 16.048 113.6 15.76 113.782 15.408L115.366 16.08C115.142 16.5067 114.854 16.88 114.502 17.2C114.16 17.52 113.75 17.7653 113.27 17.936C112.8 18.1067 112.262 18.192 111.654 18.192ZM109.59 13.28L109.334 13.056H113.846L113.606 13.28C113.606 12.8427 113.51 12.4853 113.318 12.208C113.126 11.92 112.88 11.7067 112.582 11.568C112.294 11.4187 111.99 11.344 111.67 11.344C111.35 11.344 111.03 11.4187 110.71 11.568C110.39 11.7067 110.123 11.92 109.91 12.208C109.696 12.4853 109.59 12.8427 109.59 13.28Z"
			fill="#111827"
		/>
		<defs>
			<clipPath id="clip0_6645_69725">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

type ComponentProps = Parameters<typeof Drawer>[0];
type StoryWithCustomArg = StoryFn<ComponentProps & AdditionalArgTypes>

type Story = StoryFn<typeof Drawer>;

const Template: StoryWithCustomArg = (args) => {
	const [open, setOpen] = useState(false);

	return (
		<Drawer {...args} open={open} setOpen={setOpen}>
			<Drawer.Panel>
				<Drawer.Header>
					<div className="flex items-center justify-between">
						<Drawer.Title as={args?.titleTag}>
							{args?.title ?? 'Drawer Title'}
						</Drawer.Title>
						<Drawer.CloseButton />
					</div>
					<Drawer.Description>
						Lorem ipsum dolor sit amet consectetur. Aliquam sed
						scelerisque et arcu nibh a massa.
					</Drawer.Description>
				</Drawer.Header>
				<Drawer.Body className="overflow-x-hidden">
					<div className="w-full h-full flex items-center justify-center border border-border-subtle border-dashed rounded-md bg-background-secondary">
						<p className="m-0 text-text-secondary">Body content</p>
					</div>
				</Drawer.Body>
				<Drawer.Footer>
					<Button variant="outline" onClick={() => setOpen(false)}>
						Close
					</Button>
					<Button onClick={() => setOpen(false)}>Save</Button>
				</Drawer.Footer>
			</Drawer.Panel>
			<Drawer.Backdrop />
		</Drawer>
	);
};

export const Default = Template.bind({});
Default.args = {
	trigger: <Button>Open Drawer</Button>,
	design: 'simple',
	position: 'right',
	transitionDuration: 0.2,
	exitOnClickOutside: false,
	exitOnEsc: true,
	scrollLock: true,
};

export const LogoInPlaceOfTheTitle = Template.bind({});
LogoInPlaceOfTheTitle.args = {
	trigger: <Button>Open Drawer</Button>,
	design: 'simple',
	position: 'right',
	transitionDuration: 0.2,
	exitOnClickOutside: false,
	exitOnEsc: true,
	scrollLock: false,
	title: <Logo className="w-24 h-6" />,
	titleTag: Fragment,
};

const ControlledTemplate: Story = (args) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>
				Open Controlled Drawer
			</Button>
			<Drawer open={open} setOpen={setOpen} {...args}>
				<Drawer.Panel>
					<Drawer.Header>
						<div className="flex items-center justify-between">
							<Drawer.Title>Drawer Title</Drawer.Title>
							<Drawer.CloseButton />
						</div>
						<Drawer.Description>
							Lorem ipsum dolor sit amet consectetur. Aliquam sed
							scelerisque et arcu nibh a massa.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Body className="overflow-x-hidden">
						<div className="w-full h-full mx-5 flex items-center justify-center border border-border-subtle border-dashed rounded-md bg-background-secondary">
							<p className="m-0 text-text-secondary">
								Body content
							</p>
						</div>
					</Drawer.Body>
					<Drawer.Footer>
						<div className="mr-auto inline-flex items-center">
							Other option
						</div>
						<Button variant="ghost">Details</Button>
						<Button
							onClick={() => setOpen(false)}
							variant="outline"
						>
							Cancel
						</Button>
						<Button variant="primary">Save</Button>
					</Drawer.Footer>
				</Drawer.Panel>
				<Drawer.Backdrop />
			</Drawer>
		</>
	);
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
	scrollLock: false,
};

const UncontrolledTemplate: Story = (args) => (
	<Drawer {...args}>
		<Drawer.Panel>
			{({ close }) => (
				<>
					<Drawer.Header>
						<div className="flex items-center justify-between">
							<Drawer.Title>Drawer Title</Drawer.Title>
							<Drawer.CloseButton />
						</div>
						<Drawer.Description>
							Lorem ipsum dolor sit amet consectetur. Aliquam sed
							scelerisque et arcu nibh a massa.
						</Drawer.Description>
					</Drawer.Header>
					<Drawer.Body className="overflow-x-hidden">
						<div className="w-full h-full mx-5 flex items-center justify-center border border-border-subtle border-dashed rounded-md bg-background-secondary">
							<p className="m-0 text-text-secondary">
								Body content
							</p>
						</div>
					</Drawer.Body>
					<Drawer.Footer>
						<div className="mr-auto inline-flex items-center">
							Other option
						</div>
						<Button variant="ghost">Details</Button>
						<Button onClick={close} variant="outline">
							Cancel
						</Button>
						<Button variant="primary">Save</Button>
					</Drawer.Footer>
				</>
			)}
		</Drawer.Panel>
		<Drawer.Backdrop />
	</Drawer>
);

export const Uncontrolled = UncontrolledTemplate.bind({});
Uncontrolled.args = {
	trigger: <Button>Open Uncontrolled Drawer</Button>,
	scrollLock: false,
};
Uncontrolled.parameters = {
	docs: { source: { type: 'code' } },
};
