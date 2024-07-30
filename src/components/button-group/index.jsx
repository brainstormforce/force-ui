import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const buttonSizes = {
    xs: 'py-1 px-1 text-xs gap-0.5',
    s: 'py-2 px-2 text-sm gap-1',
    m: 'py-2.5 px-2.5 text-base gap-1',
};

const buttonStates = {
    normal: 'bg-background-primary text-secondary border border-subtle',
    hover: 'hover:bg-gray-200',
    active: 'active:bg-gray-300',
    disabled: 'disabled:bg-gray-100 cursor-not-allowed',
};

const ButtonGroup = ({ buttons, size, iconPosition, activeItem, onButtonClick }) => {
    const sizeClasses = buttonSizes[size] || buttonSizes.m;

    const handleButtonClick = (event, value) => {
        if (onButtonClick) {
            onButtonClick({ event, value });
        }
    };

    return (
        <div className="flex space-x-2">
            {buttons.map((button, index) => {
                const { text, icon, id, props, state } = button;
                const isActive = activeItem === id;
                const activeClass = isActive ? 'bg-gray-300' : '';
                const buttonStateClass = buttonStates[state] || buttonStates.normal;
                const buttonClassName = props?.className || '';

                return (
                    <button
                        key={id || index}
                        id={id}
                        className={twMerge(
                            `rounded-md flex ${sizeClasses}`,
                            buttonStateClass,
                            activeClass,
                            buttonClassName
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
};

ButtonGroup.defaultProps = {
    size: 'm',
    iconPosition: 'left',
    activeItem: '',
    onButtonClick: null,
};

export default ButtonGroup;
