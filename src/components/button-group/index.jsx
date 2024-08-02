import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const buttonSizes = {
    xs: "py-1 px-1 text-sm gap-0.5 [&>svg]:h-4 [&>svg]:w-4",
    sm: 'py-2 px-2 text-base gap-1 [&>svg]:h-4 [&>svg]:w-4',
    md: 'py-2.5 px-2.5 text-base gap-1 [&>svg]:h-5 [&>svg]:w-5',
};

// const buttonStates = {
//     normal: 'bg-background-primary text-secondary',
//     hover: 'hover:bg-gray-200',
//     active: 'active:bg-gray-300',
//     disabled: 'disabled:bg-gray-100 cursor-not-allowed',
// };

const ButtonGroup = (props) => {

    const { buttons, size = "md", iconPosition, activeItem, onButtonClick, className } = props;
    const sizeClasses = buttonSizes[size];

    const handleButtonClick = (event, value) => {
        if (onButtonClick) {
            onButtonClick({ event, value });
        }
    };

    const groupChildClasses = "[&>*]:box-border";

    const groupClassName = twMerge(
        'box-border flex border border-border-subtle border-solid rounded',
        groupChildClasses,
        className
    );
    // #F9FAFB

    const buttonBaseClasses = "bg-background-primary text-secondary cursor-pointer flex items-center justify-center hover:bg-button-tertiary-hover";

    const buttonFirstChildClasses = "rounded-tl rounded-bl border-0 border-r border-border-subtle";
    const buttonLastChildClasses = "rounded-tr rounded-br border-0";
    const remainingClasses = "border-0 border-r border-border-subtle border-solid";

    return (
        <div className={groupClassName}>
            {buttons.map((button, index) => {
                const { text, icon, id, props, state } = button;
                const isActive = activeItem === id;
                const activeClass = isActive ? 'bg-gray-300' : '';
                {/* const buttonStateClass = buttonStates?.[state] || buttonStates?.normal; */ }
                const buttonClassName = props?.className || '';

                return (
                    <button
                        key={id || index}
                        id={id}
                        className={twMerge(
                            buttonBaseClasses,
                            sizeClasses,
                            // buttonStateClass,
                            activeClass,
                            buttonClassName,
                            remainingClasses,
                            0 === index ? buttonFirstChildClasses : '',
                            buttons.length - 1 === index ? buttonLastChildClasses : '',
                        )}
                        disabled={state === 'disabled'}
                        onClick={(event) => handleButtonClick(event, { id, text })}
                        {...props}
                    >
                        {iconPosition === 'left' && icon && <span className="mr-1">{icon}</span>}
                        {text}
                        {iconPosition === 'right' && icon && <span className="ml-1">{icon}</span>}
                    </button>
                );
            })}
        </div>
    );
};

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.node,
            id: PropTypes.string,
            props: PropTypes.object,
            state: PropTypes.oneOf(['normal', 'hover', 'active', 'disabled']),
        })
    ).isRequired,
    size: PropTypes.oneOf(['xs', 's', 'm']),
    iconPosition: PropTypes.oneOf(['left', 'right']),
    activeItem: PropTypes.string,
    onButtonClick: PropTypes.func,
    className: PropTypes.string,
};

ButtonGroup.defaultProps = {
    size: 'm',
    iconPosition: 'left',
    activeItem: '',
    onButtonClick: null,
    className: '',
};

export default ButtonGroup;
