import React from 'react';

const OnboardingSmtpError = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingSmtpError.displayName = 'OnboardingSmtpError';

export default OnboardingSmtpError;
