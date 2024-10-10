import React from 'react';

const OnboardingSpam = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingSpam.displayName = 'OnboardingSpam';

export default OnboardingSpam;
