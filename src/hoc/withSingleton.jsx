import { memo, useRef } from "react";

let hasRendered = false;

const withSingleton = (WrappedComponent) => {

    const SingletonComponent = memo((props) => {
        if (hasRendered) {
            return null; // or return an alternative component
        } else {
            hasRendered = true;
            return <WrappedComponent {...props} />;
        }
    });

    return SingletonComponent;
};

export default withSingleton;
