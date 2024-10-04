import { Topbar } from "@/components";
import { Container } from "@/components";
import { ArrowUpRight, CircleHelp, Bell, User } from 'lucide-react';
import { Button } from "@/components";
import { Badge } from "@/components";
import { Avatar } from "@/components";

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


export const Dashboard = () => {
    return (
        <>
            {/* Topbar - just for storybook purpose I need to use style for setting the height*/}
            <Topbar gap={0} className="min-h-[unset] !important h-24 p-0 shadow-sm bg-yellow-200">
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
                        <button className="relative h-full text-text-primary text-sm font-medium py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer">
                            <span>Dashboard</span>
                            <span className="absolute w-full h-px bg-brand-primary-600 bottom-0 left-0 "></span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer">
                            <span>Settings</span>
                        </button>
                        <button className="h-full text-text-tertiary text-sm font-medium py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer">
                            <span>Starter Templates</span>
                        </button>
                        <Button
                            variant="ghost"
                            icon={ <ArrowUpRight /> }
                            iconPosition="right"
                            className="h-full inline-flex items-center py-0 px-1 m-0 bg-transparent outline-none shadow-none border-0 focus:outline-none cursor-pointer text-sm font-semibold text-brand-primary-600"
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
                        <CircleHelp />
                        <Bell />
                    </Topbar.Item>
                    <Topbar.Item>
                        <Avatar size="sm"  border="none"
                        url="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"/>
                    </Topbar.Item>
                </Topbar.Right>
            </Topbar>

            {/* <Container containerType="flex" direction="column" gap={0} className="bg-blue-400">
                <Container.Item>
                    <Container containerType="flex" gap="2xl" className="p-8">
                        <Container.Item className="border border-solid bg-yellow-400 p-10">
                            Welcome Astra
                        </Container.Item>
                        <Container.Item>
                            Integrations
                        </Container.Item>
                    </Container>
                </Container.Item>


            </Container> */}
        </>
    )
}

