import { useState } from 'react';
import Title from '@/components/title';
import Text from '@/components/text';
import Button from '@/components/button';
import Container from '@/components/container';
import Badge from '@/components/badge';
import Tabs from '@/components/tabs';
import { Check } from 'lucide-react';
import type { StoryFn } from '@storybook/react';

type PlanType = 'annual' | 'lifetime';

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

export default {
	title: 'Templates/Pricing/OttoKit Pricing',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
};

const planData: Record<PlanType, Plan[]> = {
	annual: [
		{
			name: 'Pro',
			description: 'For individuals to automate their business and increase productivity.',
			price: '$9/mo',
			features: [
				'All Pro features',
				'10 team members',
				'Priority email support',
				'Advanced analytics',
			],
			cta: 'Choose Pro',
			highlighted: false,
		},
		{
			name: 'Business',
			price: '$19/mo',
			description: 'For freelancers, organizations, and teams who need the full features of OttoKit.',
			features: [
				'Everything in Business',
				'Unlimited team members',
				'24/7 support',
				'Custom integrations',
			],
			cta: 'Get Business',
			highlighted: true,
			badge: 'Popular',
		},
		{
			name: 'Business Plus',
			description: 'For enterprises, agencies, and businesses to create sub-accounts using OttoKit.',
			price: '$39/mo',
			features: [
				'Everything in Pro',
				'Dedicated account manager',
				'Custom SLAs',
				'White-glove onboarding',
			],
			cta: 'Contact Sales',
			highlighted: false,
		},
	],
	lifetime: [
		{
			name: 'Pro',
			description: 'For individuals to automate their business and increase productivity.',
			price: '$499',
			features: [
				'All Pro features',
				'10 team members',
				'Priority email support',
				'Advanced analytics',
			],
			cta: 'Choose Pro',
			highlighted: false,
		},
		{
			name: 'Business',
			price: '$799',
			description: 'For freelancers, organizations, and teams who need the full features of OttoKit.',
			features: [
				'Everything in Business',
				'Unlimited team members',
				'24/7 support',
				'Custom integrations',
			],
			cta: 'Get Business',
			highlighted: true,
			badge: 'Popular',
		},
		{
			name: 'Business Plus',
			description: 'For enterprises, agencies, and businesses to create sub-accounts using OttoKit.',
			price: '$1299',
			features: [
				'Everything in Pro',
				'Dedicated account manager',
				'Custom SLAs',
				'White-glove onboarding',
			],
			cta: 'Contact Sales',
			highlighted: false,
		},
	],
};

const Template: StoryFn = ( args: Record<string, unknown> ) => {
	const [ planType, setPlanType ] = useState<PlanType>( 'annual' );
	const plans = planData[ planType ];

	const handleTabChange = ( { value }: { value: { slug: string } } ) => {
		if ( value.slug === 'annual' || value.slug === 'lifetime' ) {
			setPlanType( value.slug );
		}
	};

	return (
		<div
			{ ...args }
			className="min-h-screen py-12 px-4 md:px-0">
			<Container className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
				<Title
					tag="h1"
					size="lg"
					title="Smart Automation, Smarter Pricing"
					description="OttoKit brings you robust automation at an unbeatable price, so you get the best without overspending."
					className="text-center"
				/>
				<Tabs.Group
					variant="rounded"
					size="md"
					activeItem={ planType }
					onChange={ handleTabChange }
					className="mb-4 w-min bg-white"
				>
					<Tabs.Tab
						slug="annual"
						text="Annual"
						className={ planType === 'annual' ? 'bg-[#172A39] font-semibold text-white hover:text-white' : 'bg-white text-[#172A39] font-semibold' }
					/>
					<Tabs.Tab
						slug="lifetime"
						text="Lifetime"
						className={ planType === 'lifetime' ? 'bg-[#172A39] font-semibold text-white hover:text-white' : 'bg-white text-[#172A39] font-semibold' }
					/>
				</Tabs.Group>
				<div
					className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
					role="list"
					aria-label="Pricing plans"
				>
					{ plans.map( ( plan: Plan ) => (
						<div
							key={ plan.name }
							role="listitem"
							className={ `flex flex-col rounded-xl shadow-xs border border-solid border-gray-200 p-6 relative focus-within:ring-2 focus-within:ring-[#d2f059] transition-all duration-200 bg-white ${
								plan.highlighted ? 'scale-105 z-10' : ''
							}` }
							tabIndex={ 0 }
							aria-label={ plan.name + ( plan.highlighted ? ' (Popular)' : '' ) }
						>
							{ plan.badge && (
								<Badge
									label={ plan.badge }
									size="xs"
									className="absolute top-4 right-4 rounded-full font-semibold px-2 py-1 bg-[#d2f059] text-[#172A39]"
								/>
							) }
							<Text
								as="h2"
								size={ 20 }
								weight={ 600 }
								className="mb-2 text-start"
							>
								{ plan.name }
							</Text>
							<Text
								as="p"
								className="mb-8 text-start"
							>
								{ plan.description }
							</Text>
							<Text
								as="div"
								size={ 30 }
								weight={ 700 }
								className="mb-4 text-start text-text-primary"
							>
								{ plan.price }
							</Text>
							<ul className="flex-1 list-none pl-0 mb-6 space-y-3" aria-label={ `Features for ${ plan.name }` }>
								{ plan.features.map( ( feature: string ) => (
									<li key={ feature } className="flex items-center gap-2 text-base text-text-secondary">
										<Check className="size-4 text-support-success" aria-hidden="true" />
										<Text as="span" size={ 16 } color="secondary">
											{ feature }
										</Text>
									</li>
								) ) }
							</ul>
							<Button
								variant="primary"
								size="md"
								className={ `w-full mt-auto border-0 ${ plan.highlighted ? 'bg-[#d2f059] text-[#172A39] hover:bg-[#e6fa8c] focus:bg-[#e6fa8c]' : 'bg-[#172A39] text-white hover:bg-[#22344a] focus:bg-[#22344a]' }` }
								aria-label={ plan.cta + ' for ' + plan.name }
							>
								{ plan.cta }
							</Button>
						</div>
					) ) }
				</div>
			</Container>
		</div>
	);
};

export const PricingTemplate = Template.bind( {} );
PricingTemplate.args = {};
PricingTemplate.storyName = 'OnboardingImport';

