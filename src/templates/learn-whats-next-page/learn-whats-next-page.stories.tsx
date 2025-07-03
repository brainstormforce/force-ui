import { useState } from 'react';
import {
	Badge,
	Button,
	Container,
	Label,
	ProgressBar,
	Title,
} from '@/components';
import {
	CheckCheck,
	ChevronDown,
	ChevronUp,
	Circle,
	Check,
	Plus,
	Play,
} from 'lucide-react';

export default {
	title: 'Templates/Learn Whats Next/Learn Whats Next Page',
	parameters: {
		layout: 'fullscreen',
	},
	tags: [ 'autodocs' ],
};

interface StepItem {
	id: string;
	title: string;
	timeEstimate: string;
	status: 'incomplete' | 'in-progress' | 'completed';
	isExpanded?: boolean;
	description?: string;
	videoThumbnail?: string;
}

const stepItems: StepItem[] = [
	{
		id: '1',
		title: 'Create New Space',
		timeEstimate: '8 minutes',
		status: 'in-progress',
		isExpanded: true,
		description:
			'Inside a space you can put any content/post. And, you can have as many spaces as you need for your community. Let&apos;s create your first space!',
		videoThumbnail: 'https://placehold.co/656x332/D1D5DB/6B7280?text=Video+Thumbnail',
	},
	{
		id: '2',
		title: 'Add New Space Group',
		timeEstimate: '3 minutes',
		status: 'incomplete',
	},
	{
		id: '3',
		title: 'Add New Post',
		timeEstimate: '12 minutes',
		status: 'incomplete',
	},
	{
		id: '4',
		title: 'Add New Course',
		timeEstimate: '15 minutes',
		status: 'incomplete',
	},
	{
		id: '5',
		title: 'Customize Your Community Portal',
		timeEstimate: '20 minutes',
		status: 'incomplete',
	},
];

const Template = () => {
	const [ steps, setSteps ] = useState<StepItem[]>( stepItems );

	const toggleStep = ( stepId: string ) => {
		setSteps( ( prevSteps ) =>
			prevSteps.map( ( step ) =>
				step.id === stepId
					? { ...step, isExpanded: ! step.isExpanded }
					: { ...step, isExpanded: false }
			)
		);
	};

	const markAllAsDone = () => {
		setSteps( ( prevSteps ) =>
			prevSteps.map( ( step ) => ( { ...step, status: 'completed' as const } ) )
		);
	};

	const markStepAsCompleted = ( stepId: string ) => {
		setSteps( ( prevSteps ) =>
			prevSteps.map( ( step ) =>
				step.id === stepId
					? { ...step, status: 'completed' as const, isExpanded: false }
					: step
			)
		);
	};

	const getStatusIcon = ( status: string ) => {
		switch ( status ) {
			case 'completed':
				return <Check className="size-4 text-brand-primary-600" />;
			case 'in-progress':
				return <Circle className="size-4 text-brand-primary-600" />;
			default:
				return <Circle className="size-4 text-text-tertiary" />;
		}
	};

	const getStatusText = ( status: string ) => {
		switch ( status ) {
			case 'completed':
				return 'Completed';
			case 'in-progress':
				return 'In Progress';
			default:
				return 'Incomplete';
		}
	};

	const getStatusTextColor = ( status: string ) => {
		switch ( status ) {
			case 'completed':
				return 'text-text-tertiary';
			case 'in-progress':
				return 'text-text-tertiary';
			default:
				return 'text-text-tertiary';
		}
	};

	const completedSteps = steps.filter( ( step ) => step.status === 'completed' ).length;
	const totalSteps = steps.length;

	return (
		<div className="bg-background-secondary min-h-screen p-8">
			{ /* Top Title and Description Section */ }
			<Container
				containerType="flex"
				direction="column"
				className="max-w-3xl mx-auto gap-0 mb-4"
			>
				<Container.Item>
					<Title
						size="lg"
						tag="h1"
						title="Learn"
						className="text-text-primary"
					/>
				</Container.Item>
				<Container.Item>
					<Label className="text-text-secondary text-base">
						To help you take full control and ensure success of your community, we've outlined a few tasks and prepared a set of instructional videos. These will help you learn how to setup, launch and grow your community.
					</Label>
				</Container.Item>
			</Container>

			{ /* Main Content Container */ }
			<Container
				containerType="flex"
				direction="column"
				gap="lg"
				className="max-w-3xl mx-auto bg-background-primary rounded-xl shadow-sm border border-border-subtle p-8"
			>
				{ /* Header Section */ }
				<Container.Item>
					<Container
						containerType="flex"
						direction="row"
						align="center"
						gap="md"
						className="w-full"
					>
						<Container.Item className="flex-1">
							<Title
								size="md"
								tag="h1"
								title="Let&apos;s get ready to go live"
								className="text-text-primary font-semibold text-lg"
							/>
						</Container.Item>
						<Container.Item>
							<Container
								containerType="flex"
								direction="row"
								align="center"
								gap="sm"
							>
								<Container.Item>
									<Label className="text-sm text-text-secondary">
										{ completedSteps }/{ totalSteps } completed
									</Label>
								</Container.Item>
								<Container.Item className="w-32">
									<ProgressBar
										progress={ ( completedSteps / totalSteps ) * 100 }
										className="h-2"
									/>
								</Container.Item>
							</Container>
						</Container.Item>
						<Container.Item>
							<Button
								variant="outline"
								size="sm"
								icon={ <CheckCheck className="size-4" /> }
								onClick={ markAllAsDone }
								className="ml-4"
							>
								Mark All as Done
							</Button>
						</Container.Item>
					</Container>
				</Container.Item>

				{ /* Steps Section */ }
				<Container.Item>
					<Container
						containerType="flex"
						direction="column"
						gap="md"
					>
						{ steps.map( ( step ) => (
							<Container.Item key={ step.id }>
								<Container
									containerType="flex"
									direction="column"
									className={ `
										border rounded-lg
							${ step.isExpanded
								? 'bg-background-secondary border-text-tertiary'
								: 'border-border-subtle'
							}
									` }
								>
									{ /* Step Header */ }
									<Container.Item>
										<div
											className="p-4 cursor-pointer"
											onClick={ () => toggleStep( step.id ) }
											onKeyDown={ ( e ) => {
												if ( e.key === 'Enter' || e.key === ' ' ) {
													toggleStep( step.id );
												}
											} }
											role="button"
											tabIndex={ 0 }
										>
											<Container
												containerType="flex"
												direction="row"
												align="center"
												gap="md"
											>
												<Container.Item className="flex-1">
													<Container
														containerType="flex"
														direction="row"
														align="center"
														gap="sm"
													>
														<Container.Item>
															<div className="flex items-center justify-center w-6 h-6 rounded-full">
																{ getStatusIcon( step.status ) }
															</div>
														</Container.Item>
														<Container.Item className="flex-1">
															<Label className="text-base font-medium text-text-primary">
																{ step.title }
															</Label>
														</Container.Item>
													</Container>
												</Container.Item>
												<Container.Item>
													<Badge
														label={ step.timeEstimate }
														size="sm"
														variant="neutral"
														type="pill"
													/>
												</Container.Item>
												<Container.Item>
													<Label className={ `text-sm ${ getStatusTextColor( step.status ) }` }>
														{ getStatusText( step.status ) }
													</Label>
												</Container.Item>
												<Container.Item>
													<div className="flex items-center justify-center w-6 h-6">
														{ step.isExpanded ? (
															<ChevronUp className="size-4 text-text-tertiary" />
														) : (
															<ChevronDown className="size-4 text-text-tertiary" />
														) }
													</div>
												</Container.Item>
											</Container>
										</div>
									</Container.Item>

									{ /* Expanded Content */ }
									{ step.isExpanded && (
										<Container.Item>
											<Container
												containerType="flex"
												direction="column"
												gap="md"
												className="p-4 bg-blue-25"
											>
												{ /* Video Section */ }
												{ step.videoThumbnail && (
													<Container.Item>
														<div className="relative bg-gray-300 rounded border overflow-hidden">
															<img
																src={ step.videoThumbnail }
																alt="Video thumbnail"
																className="w-full h-80 object-cover"
															/>
															<div className="absolute inset-0 flex items-center justify-center">
																<Button
																	variant="primary"
																	size="lg"
																	icon={ <Play className="size-6" /> }
																	className="rounded-full px-6 py-6 shadow-2xl"
																	aria-label="Play video"
																/>
															</div>
														</div>
													</Container.Item>
												) }

												{ /* Description */ }
												{ step.description && (
													<Container.Item>
														<Label className="text-sm text-text-secondary px-2 leading-relaxed">
															{ step.description }
														</Label>
													</Container.Item>
												) }

												{ /* Action Buttons */ }
												<Container.Item>
													<Container
														containerType="flex"
														direction="column"
														gap="md"
														className="px-2"
													>
														<Container.Item>
															<Button
																variant="primary"
																size="lg"
																icon={ <Plus className="size-5" /> }
																className="w-full shadow-sm"
															>
																Add New Space
															</Button>
														</Container.Item>
														<Container.Item>
															<Button
																variant="outline"
																size="lg"
																icon={ <Check className="size-5" /> }
																className="w-full shadow-sm"
																onClick={ () => markStepAsCompleted( step.id ) }
															>
																Mark as Completed
															</Button>
														</Container.Item>
													</Container>
												</Container.Item>
											</Container>
										</Container.Item>
									) }
								</Container>
							</Container.Item>
						) ) }
					</Container>
				</Container.Item>
			</Container>
		</div>
	);
};

export const Default = {
	render: Template,
};
