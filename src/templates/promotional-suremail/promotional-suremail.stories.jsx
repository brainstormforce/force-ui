import {
	Container,
	Title,
	Text,
	Button,
} from '../../components';
import {
	Mail,
	Shield,
	Bell,
	Settings,
	BarChart,
	Users,
	Plus,
	Rocket,
	CloudLightning,
} from 'lucide-react';

export default {
	title: 'Templates/Promotional/SureMail Promotional',
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		( Story, parameters ) => (
			<div className="@container">
				<div className="box-border [&_*]:box-border max-w-screen overflow-x-hidden">
					<Story { ...parameters } />
				</div>
			</div>
		),
	],
	tags: [ 'autodocs' ],
};

// SureMail Promotional Template
export const SureMailPromotional = () => {
	return (
		<div className="bg-white min-h-screen w-full overflow-hidden">
			{ /* Hero Section with Icons and Formula */ }
			<section className="py-4 flex justify-center">
				<Container className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
					<div className="flex flex-col items-center mb-6 md:mb-10 max-w-3xl">
						<div className="flex items-center justify-center mb-4 gap-3 flex-wrap">
							<div className="flex items-center justify-center bg-white p-4 md:p-5 rounded-lg shadow-sm">
								<Shield size={ 32 } className="text-blue-600" />
							</div>
							<div className="mx-1 md:mx-3">
								<Plus size={ 20 } className="text-gray-500" />
							</div>
							<div className="flex items-center justify-center bg-white p-4 md:p-5 rounded-lg shadow-sm">
								<Mail size={ 32 } className="text-purple-600" />
							</div>
							<div className="mx-1 md:mx-3">
								<span className="text-xl md:text-2xl font-bold text-gray-700">=</span>
							</div>
							<div className="flex items-center justify-center bg-white p-4 md:p-5 rounded-lg shadow-sm">
								<Rocket size={ 32 } className="text-green-600" />
							</div>
						</div>

						<Title
							tag="h1"
							size="lg"
							title="SureMail"
							className="mb-2 text-text-primary text-center"
						/>
						<Text className="text-base md:text-lg mb-6 text-text-secondary max-w-2xl mx-auto text-center">
							The complete solution for email deliverability, authentication, and performance analytics.
							Send emails that always reach the inbox, not the spam folder.
						</Text>
						<Button
							variant="primary"
							size="lg"
						>
							Install SureMail
						</Button>
					</div>
				</Container>
			</section>

			{ /* Video Section */ }
			<section className="py-4 ">
				<Container className="max-w-4xl mx-auto px-4 sm:px-6">
					<div className="w-full aspect-video bg-gray-200 rounded-lg shadow-lg">
						{ /* Replace with actual video component when available */ }
						<div className="w-full h-full flex items-center justify-center bg-black">
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/fFKJfbWLif4?si=Mln71qIFzw9H5AAK"
								title="SureMail Tutorial"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</div>
					</div>
				</Container>
			</section>

			{ /* Features Section - 3 rows with 2 boxes each */ }
			<section className="py-4 ">
				<Container className="max-w-4xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col gap-6 md:gap-8">
						{ /* Row 1 */ }
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							{ /* Feature Box 1 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<Shield className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="Email Authentication"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										Set up SPF, DKIM, and DMARC with our step-by-step wizard.
									</Text>
								</div>
							</div>

							{ /* Feature Box 2 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<BarChart className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="Advanced Analytics"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										Track open rates and metrics to optimize your campaigns.
									</Text>
								</div>
							</div>
						</div>

						{ /* Row 2 */ }
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							{ /* Feature Box 3 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<Bell className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="Email Notifications"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										Get instant alerts for bounces and spam complaints.
									</Text>
								</div>
							</div>

							{ /* Feature Box 4 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<Settings className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="Easy Configuration"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										Simple setup wizard for email settings without technical expertise.
									</Text>
								</div>
							</div>
						</div>

						{ /* Row 3 */ }
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
							{ /* Feature Box 5 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<Users className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="List Management"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										Manage email lists and maintain sender reputation with ease.
									</Text>
								</div>
							</div>

							{ /* Feature Box 6 */ }
							<div className="bg-white p-5 rounded-lg border border-border-subtle shadow-sm">
								<div className="flex flex-col">
									<div className="bg-brand-background-50 p-3 rounded-full w-14 h-14 flex mb-3">
										<CloudLightning className="text-brand-primary-600 w-7 h-7" />
									</div>
									<Title
										tag="h3"
										size="sm"
										title="Automatic Retry"
										className="mb-2"
									/>
									<Text className="text-sm md:text-base text-text-secondary">
										SureMail automatically retries failed emails to ensure delivery.
									</Text>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{ /* Final CTA Section */ }
			<section className="py-4 flex justify-center">
				<Container className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
					<div className="flex flex-col items-center max-w-3xl">
						<Title
							tag="h2"
							size="lg"
							title="Ready to Transform Your Email Experience?"
							className="mb-4 md:mb-6 text-text-primary text-center"
						/>
						<Button
							variant="primary"
							size="lg"
							className="px-8"
						>
							Install SureMail
						</Button>
					</div>
				</Container>
			</section>
		</div>
	);
};
