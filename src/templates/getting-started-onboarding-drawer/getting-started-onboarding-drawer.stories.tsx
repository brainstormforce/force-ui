import { useState } from 'react';
import { Check, CheckCircle, Circle, X } from 'lucide-react';
import { Accordion, Badge, Button, Container, Text, Title, ProgressBar, Drawer } from '@/components';

export default {
	title: 'Templates/Onboarding/Getting Started/Drawer',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
};

interface OnboardingItem {
	id: string;
	title: string;
	description: string;
	videoUrl?: string;
	steps?: string[];
	duration: string;
	ctaButtons: Array<{
		label: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		href?: string;
	}>;
	completed: boolean;
}

interface TemplateArgs {
	userName?: string;
}

const Template = ( args: TemplateArgs ) => {
	const [ completedItems, setCompletedItems ] = useState<Set<string>>(
		new Set( [ 'item1', 'item2' ] ) // First 2 items marked as done
	);

	const onboardingItems: OnboardingItem[] = [
		{
			id: 'item1',
			title: 'Learn how WordPress works!',
			description: 'Start here to understand Pages vs Posts, how to install plugins, and what powers your website behind the scenes.',
			videoUrl: 'https://www.youtube.com/embed/HnV4Y3oWU-M',
			duration: '3 mins',
			ctaButtons: [
				{ label: 'Mark as Done', variant: 'secondary' },
			],
			completed: true,
		},
		{
			id: 'item2',
			title: 'Meet Your Theme — Astra',
			description: 'Your theme controls layout, colors, typography, and more. Let us show you how to make it yours.',
			videoUrl: 'https://www.youtube.com/embed/TBZd9oligCw',
			duration: '5 mins',
			ctaButtons: [
				{ label: 'Go to Customizer', variant: 'primary' },
				{ label: 'Mark as Done', variant: 'secondary' },
			],
			completed: true,
		},
		{
			id: 'item3',
			title: 'Design Pages Visually — Spectra',
			description: 'Spectra lets you drag and drop sections and design like a pro.',
			videoUrl: 'https://www.youtube.com/embed/jSZ1M2finRE',
			duration: '4 mins',
			ctaButtons: [
				{ label: 'Design Your First Page', variant: 'primary' },
				{ label: 'Mark as Done', variant: 'secondary' },
			],
			completed: false,
		},
		{
			id: 'item4',
			title: 'Add Smart Forms — SureForms',
			description: 'Capture leads, messages, or feedback using powerful, drag-and-drop AI forms. Let us help you connect with visitors from Day 1.',
			steps: [
				'Go to SureForms → Click "New Form"',
				'Select Build with AI',
				'Type or speak your form prompt → Click Generate Form',
			],
			duration: '4 mins',
			ctaButtons: [
				{ label: 'Design Your First Form', variant: 'primary' },
				{ label: 'Learn More', variant: 'ghost' },
				{ label: 'Mark as Done', variant: 'secondary' },
			],
			completed: false,
		},
		{
			id: 'item5',
			title: 'Final Step Before Website Launch: Checklist',
			description: 'Make sure your site is ready to go with this essential checklist. This final step will help you launch your website with confidence, not chaos.',
			steps: [
				'Go to SureForms → Click "New Form"',
				'Select Build with AI',
				'Type or speak your form prompt → Click Generate Form',
			],
			duration: '1 min',
			ctaButtons: [
				{ label: 'Get Website Launch Checklist', variant: 'primary' },
				{ label: 'Mark as Done', variant: 'secondary' },
			],
			completed: false,
		},
	];

	const completedCount = completedItems.size;
	const totalCount = onboardingItems.length;
	const allCompleted = completedCount === totalCount;

	const handleMarkAsDone = ( itemId: string ) => {
		setCompletedItems( ( prev ) => new Set( [ ...prev, itemId ] ) );
	};

	const handleMarkAsNotDone = ( itemId: string ) => {
		setCompletedItems( ( prev ) => {
			const newSet = new Set( prev );
			newSet.delete( itemId );
			return newSet;
		} );
	};

	const handleDismiss = () => {
		// Handle dismiss action
	};

	return (
		<div className="bg-background-secondary min-h-screen w-full">
			<Container containerType="flex" className="min-h-screen justify-center items-center p-8">
				<div>
					{ /* Trigger Button */ }
					<div className="flex justify-center">
						<Drawer
							trigger={
								<Button variant="primary" size="lg">
									Finish Setup
								</Button>
							}
							position="right"
							exitOnClickOutside={ false }
							exitOnEsc={ true }
							design="simple"
							className="max-w-4xl"
						>
							<Drawer.Panel className="w-full max-w-4xl">
								<Drawer.Header>
									<div className="flex items-center justify-between">
										<Drawer.Title as="h2" className="text-text-primary font-semibold text-lg">
                                            { `Hi ${ args.userName || 'there' }! 👋` }
										</Drawer.Title>
										<Drawer.CloseButton />
									</div>
									<div className="space-y-3 mt-4">
										<Title
											size="md"
											tag="h3"
											title="Your Website&apos;s Onboarding Checklist 🎯"
											className="text-text-primary"
										/>
										<Drawer.Description>
											Complete these steps to take full control of your website.
										</Drawer.Description>
									</div>
								</Drawer.Header>

								<Drawer.Body className="space-y-6 overflow-y-auto">
									{ /* Progress Section */ }
									<div className="bg-background-secondary p-6 rounded-xl border border-border-subtle">
										<div className="space-y-4">
											<div className="flex items-center justify-between flex-wrap gap-4">
												<Badge
													label={ `${ completedCount } out of ${ totalCount } completed` }
													variant="green"
													size="md"
												/>
											</div>
											{ /* Progress Bar */ }
											<div className="space-y-2">
												<div className="flex justify-between items-center">
													<Text size={ 12 } color="tertiary">
														Progress
													</Text>
													<Text size={ 12 } color="tertiary">
														{ Math.round( ( completedCount / totalCount ) * 100 ) }%
													</Text>
												</div>
												<ProgressBar progress={ ( completedCount / totalCount ) * 100 } />
											</div>
										</div>
									</div>

									{ /* Congratulations Message */ }
									{ allCompleted && (
										<div className="bg-background-primary p-6 rounded-xl shadow-lg relative">
											{ /* Decorative background elements */ }
											<div className="absolute top-0 right-0 text-4xl opacity-10 transform rotate-12">
												🎉
											</div>
											<div className="absolute bottom-0 left-0 text-3xl opacity-10 transform -rotate-12">
												✨
											</div>
											<div className="absolute top-4 left-4 text-2xl opacity-20">
												🚀
											</div>

											<div className="text-center space-y-4 relative z-10">
												<div className="flex justify-center items-center gap-2">
													<span className="text-2xl">🎊</span>
													<Title
														size="md"
														tag="h3"
														title="Awesome, You did it!"
														className="font-bold"
													/>
													<span className="text-2xl">🎊</span>
												</div>

												<div className="flex justify-center gap-2 text-2xl mb-3">
													<span className="animate-bounce">🎯</span>
													<span className="animate-bounce" style={ { animationDelay: '0.1s' } }>✅</span>
													<span className="animate-bounce" style={ { animationDelay: '0.2s' } }>🏆</span>
													<span className="animate-bounce" style={ { animationDelay: '0.3s' } }>🌟</span>
													<span className="animate-bounce" style={ { animationDelay: '0.4s' } }>💫</span>
												</div>

												<Text
													size={ 16 }
													color="secondary"
													className="max-w-2xl mx-auto leading-relaxed bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/40"
												>
													🎉 <strong>Congratulations!</strong> You&apos;ve successfully completed all the tasks and instructional videos to take full control of your website.
													<br /><br />
													🚀 Now, you&apos;re well-equipped to make your website thrive! Best of luck with your website journey, and may it bring you great achievements and opportunities in the digital world! 🌟
												</Text>

												<div className="flex justify-center gap-2 text-lg">
													<span>🎈</span>
													<span>🎊</span>
													<span>🎉</span>
													<span>✨</span>
													<span>🎈</span>
												</div>
											</div>
										</div>
									) }

									{ /* Accordion Section */ }
									<div className="bg-background-primary border border-border-subtle shadow-sm">
										<Accordion type="simple" autoClose={ true } defaultValue="item1">
											{ onboardingItems.map( ( item ) => {
												const isCompleted = completedItems.has( item.id );

												return (
													<Accordion.Item key={ item.id } value={ item.id } className="border-0 overflow-hidden [&:hover_h3]:bg-transparent">
														<Accordion.Trigger
															iconType="arrow"
															className="group p-4 hover:bg-transparent"
														>
															<div className="flex items-center gap-3 flex-1">
																{ isCompleted ? (
																	<CheckCircle className="flex-shrink-0 size-5 stroke-support-success" />
																) : (
																	<Circle className="peer flex-shrink-0 size-5 group-hover:stroke-background-brand" />
																) }
																<div className="flex-1 text-left">
																	<Text
																		size={ 16 }
																		weight={ 600 }
																		className={ isCompleted ? 'line-through' : '' }
																	>
																		{ item.title }
																	</Text>
																</div>
															</div>
															<Badge
																label={ item.duration }
																variant={ isCompleted ? 'green' : 'blue' }
																size="xs"
																className="px-2 py-1 font-semibold"
															/>
														</Accordion.Trigger>
														<Accordion.Content className="px-4 pb-4 border-0">
															<div className="space-y-4">
																<Text size={ 14 } color="secondary" className="leading-relaxed">
																	{ item.description }
																</Text>

																{ item.videoUrl && (
																	<div className="aspect-video rounded-lg overflow-hidden bg-background-tertiary">
																		<iframe
																			src={ item.videoUrl }
																			title={ item.title }
																			className="w-full h-full border-none"
																			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
																			allowFullScreen
																		/>
																	</div>
																) }

																{ item.steps && (
																	<div className="space-y-2">
																		<div className="space-y-2">
																			{ item.steps.map( ( step, stepIndex ) => (
																				<div key={ stepIndex } className="flex items-start gap-2">
																					<Text size={ 14 } weight={ 600 } color="primary" className="flex-shrink-0">
																						Step { stepIndex + 1 }:
																					</Text>
																					<Text size={ 14 } color="secondary">
																						{ step }
																					</Text>
																				</div>
																			) ) }
																		</div>
																	</div>
																) }

																<div className="flex flex-wrap justify-between items-start gap-2 pt-3">
																	<div className="flex flex-wrap gap-2">
																		{ item.ctaButtons.filter( ( cta ) => cta.label !== 'Mark as Done' ).map( ( cta, ctaIndex ) => {
																			if ( cta.href ) {
																				return (
																					<Text
																						key={ ctaIndex }
																						as="a"
																						href={ cta.href }
																						size={ 14 }
																						weight={ 600 }
																						color="primary"
																						className="px-3 py-2 bg-button-primary text-text-on-color rounded-md hover:bg-button-primary-hover transition-colors"
																					>
																						{ cta.label }
																					</Text>
																				);
																			}

																			if ( cta.label === 'Learn More' ) {
																				return (
																					<Button
																						key={ ctaIndex }
																						variant="outline"
																						size="sm"
																						className="text-info-600 hover:text-info-700 hover:bg-info-50"
																					>
																						{ cta.label }
																					</Button>
																				);
																			}

																			return (
																				<Button
																					key={ ctaIndex }
																					variant={ cta.variant || 'primary' }
																					size="sm"
																				>
																					{ cta.label }
																				</Button>
																			);
																		} ) }
																	</div>

																	<div className="flex-shrink-0">
																		{ item.ctaButtons.some( ( cta ) => cta.label === 'Mark as Done' ) && (
																			<Button
																				variant="outline"
																				size="sm"
																				onClick={ isCompleted ? () => handleMarkAsNotDone( item.id ) : () => handleMarkAsDone( item.id ) }
																				icon={ isCompleted ? <X className="size-3" /> : <Check className="size-3" /> }
																				className={ isCompleted ? 'text-button-danger outline-button-danger hover:outline-button-danger-hover focus:ring-button-danger' : 'text-support-success outline-support-success hover:outline-support-success focus:ring-support-success' }
																			>
																				{ isCompleted ? 'Mark as Not Done' : 'Mark as Done' }
																			</Button>
																		) }
																	</div>
																</div>
															</div>
														</Accordion.Content>
													</Accordion.Item>
												);
											} ) }
										</Accordion>
									</div>
								</Drawer.Body>

								<Drawer.Footer>
									<div className="flex items-center justify-between w-full gap-4">
										<Text size={ 12 } color="tertiary">
											Website setup brought to you by Starter Templates.
										</Text>
										<Button
											variant="ghost"
											size="sm"
											onClick={ handleDismiss }
											className="text-info-600 hover:text-info-700 hover:bg-info-50"
										>
											Dismiss and Remove Setup Wizard
										</Button>
									</div>
								</Drawer.Footer>
							</Drawer.Panel>
							<Drawer.Backdrop />
						</Drawer>
					</div>
				</div>
			</Container>
		</div>
	);
};

export const GettingStartedOnboardingDrawer = Template.bind( {} );
