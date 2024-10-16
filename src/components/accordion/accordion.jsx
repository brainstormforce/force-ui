import React, { useState } from 'react';

const Accordion = ({ children, className, defaultValue }) => {
    const [activeItem, setActiveItem] = useState(defaultValue);

    // Handler to control the active item
    const handleToggle = (value) => {
        setActiveItem((prev) => (prev === value ? null : value));
    };

    return (
        <div className={className}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    isActive: child.props.value === activeItem,
                    onToggle: () => handleToggle(child.props.value),
                })
            )}
        </div>
    );
};

const AccordionItem = ({ children, value, isActive, onToggle }) => {
    return (
        <div className="accordion-item">
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { isActive, onToggle })
            )}
        </div>
    );
};

const AccordionTrigger = ({ children, onToggle, isActive }) => {
    return (
        <button
            className="accordion-trigger"
            onClick={onToggle}
            aria-expanded={isActive}
        >
            {children}
        </button>
    );
};

const AccordionContent = ({ children, isActive }) => {
    return (
        <div
            className={`accordion-content ${isActive ? 'block' : 'hidden'}`}
            aria-hidden={!isActive}
        >
            {children}
        </div>
    );
};

export default Object.assign(Accordion, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
});