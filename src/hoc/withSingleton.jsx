import { memo } from 'react';

let hasRendered = false;

const withSingleton = (WrappedComponent) => {
	const SingletonComponent = memo((props) => {
		const isSingleTon = props.singleTon; // singleTon is a prop passed to the component to check if it is a singleton component
		if (hasRendered && isSingleTon) {
			return null; // or return an alternative component
		}
		hasRendered = true;
		return <WrappedComponent {...props} />;
	});

	return SingletonComponent;
};

export default withSingleton;
