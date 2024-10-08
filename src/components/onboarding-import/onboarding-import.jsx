import React from 'react';

const OnboardingImport = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingImport.displayName = 'OnboardingImport';

export default OnboardingImport;
