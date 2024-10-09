import React from 'react';

const OnboardingEmailSmtp = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingEmailSmtp.displayName = 'OnboardingEmailSmtp';

export default OnboardingEmailSmtp;