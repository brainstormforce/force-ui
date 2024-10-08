import React from 'react';

const OnboardingDone = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingDone.displayName = 'OnboardingDone';

export default  OnboardingDone ;
