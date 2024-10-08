import React from 'react';

const OnboardingProfile = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingProfile.displayName = 'OnboardingProfile';

export default  OnboardingProfile;