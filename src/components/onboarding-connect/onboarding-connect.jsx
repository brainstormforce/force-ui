import React from 'react';

const OnboardingConnect = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingConnect.displayName = 'OnboardingConnect';

export default OnboardingConnect;
