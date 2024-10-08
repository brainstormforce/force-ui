import React from 'react';

const OnboardingSocial = ( { children, ...props } ) => {
	return <div { ...props }>{ children }</div>;
};
OnboardingSocial.displayName = 'OnboardingSocial';

export default  OnboardingSocial;