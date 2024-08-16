import React from "react";
import { cn } from '../../utilities/functions';

const Container = (props) => {
    const {
        containerType = "grid", // flex, grid
        gap = 0,
        spacing,
        flexWrap,
        columns, 
        padding = 0,
        justifyContent, 
        alignItems, 
        alignContent,
        justifyItems,
        direction, 
        className, 
        children, 
        extraProps,
    } = props;

    const directionToClassMap = {
        'flex-row': 'flex-row',
        'flex-row-reverse': 'flex-row-reverse',
        'flex-column': 'flex-col',
        'flex-column-reverse': 'flex-col-reverse',
    };

    let tailwindClasses = [
        containerType === "flex" ? "flex" : "grid", 
        justifyContent && `justify-${justifyContent}`, 
        alignContent && `content-${alignContent}`,
        alignItems && `items-${alignItems}`, 
        direction && directionToClassMap[direction],
        flexWrap && `flex-${flexWrap}`
    ].filter(Boolean); 

    const paddingClass = padding !== 0 ? `p-${padding}` : '';
    const gapClass = gap !== 0 ? `gap-${gap}` : '';

    const combinedClasses = `${tailwindClasses.join(' ')} ${paddingClass} ${gapClass}`;

    return (
        <div className={cn(combinedClasses, className) } { ...extraProps }>
            {React.Children.map(children, (child) => {
                const {
                    grow,
                    shrink,
                    basis,
                    order,
                    className: childClassName,
                    ...childProps
                } = child.props;

                const childClasses = cn(
                    grow !== undefined && `grow-${grow}`,
                    shrink !== undefined && `shrink-${shrink}`,
                    basis && `basis-${basis}`,
                    order && `order-${order}`,
                    childClassName
                );

                return React.cloneElement(child, {
                    className: childClasses,
                    ...childProps
                });
            })}
        </div>
    )

}


export default Container;