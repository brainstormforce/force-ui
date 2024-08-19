import React from "react";
import { cn } from '../../utilities/functions';

const Container = (props) => {
    const {
        containerType = "grid", // flex, grid
        gap = 0,
        direction, // flex directions (row, row-reverse, colum, column reverse)
        justify, // justify-content
        align, // align-items
        wrap = 'nowrap', // nowrap, wrap, wrap-reverse
        className, 
        children, 
        extraProps,
    } = props;

    const containerTypeClass = {
        flex: 'flex',
        grid: 'grid'
    }?.[containerType];

    const gapClasses = {
        'xs': 'gap-1',
        'sm': 'gap-2',
        'md': 'gap-3',
        'lg': 'gap-4',
        'xl': 'gap-6',
        '2xl': 'gap-8'
    }?.[gap];

    const directionClasses = {
        'row': 'flex-row',
        'row-reverse': 'flex-row-reverse',
        'column': 'flex-col',
        'column-reverse': 'flex-col-reverse',
    }?.[direction];

    const justifyContentClasses = {
        'normal': 'justify-normal',
        'start': 'justify-start',
        'end': 'justify-end',
        'center': 'justify-center',
        'between': 'justify-between',
        'around': 'justify-around',
        'evenly': 'justify-evenly',
        'stretch': 'justify-stretch'
    }?.[justify]

    const alignItemsClasses = {
        'start': 'items-start',
        'end': 'items-end',
        'center': 'items-center',
        'baseline': 'items-baseline',
        'stretch': 'items-stretch'
    }?.[align]

    const wrapClasses = {
        'wrap': 'flex-wrap',
        'wrap-reverse': 'flex-wrap-reverse',
        'nowrap': 'flex-nowrap',
    }?.[wrap]

    const combinedClasses = cn(containerTypeClass, gapClasses, directionClasses, justifyContentClasses, alignItemsClasses, wrapClasses, className);

    return (
        <div className={combinedClasses} { ...extraProps }>
            {children}
        </div>
    )
}

const Item = (props) => {
    const {
        grow,
        shrink,
        basis,
        order,
        alignSelf,
        className,
        children,
        ...extraProps
    } = props;

    const growClasses = {
        0: 'grow-0',
        1: 'grow'
    }?.[grow];

    const shrinkClasses = {
        0: 'shrink-0',
        1: 'shrink'
    }?.[shrink];

    const alignSelfClasses = {
        auto: 'self-auto',
        start: 'self-start',
        end: 'self-end',
        center: 'self-center',
        stretch: 'self-stretch',
        baseline: 'self-baseline'
    }?.[alignSelf];

    const orderClasses = {
        '1': 'order-1',
        '2': 'order-2',
        '3': 'order-3',
        '4': 'order-4',
        '5': 'order-5',
        '6': 'order-6',
        '7': 'order-7',
        '8': 'order-8',
        '9': 'order-9',
        '10': 'order-10',
        '11': 'order-11',
        '12': 'order-12',
        'first': 'order-first',
        'last': 'order-last',
        'none': 'order-none',
    }?.[order];

    return (
        <div className={cn(growClasses, shrinkClasses, alignSelfClasses, orderClasses, className)} {...extraProps}>
            {children}
        </div>
    )
}

Container.Item = Item;


export default Container;