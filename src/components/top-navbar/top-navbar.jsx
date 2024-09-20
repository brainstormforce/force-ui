import React from 'react'
import { cn } from '@/utilities/functions';

const Topbar = ({ children, className, ...props }) => {
  return (
      <div className={cn('w-full flex items-center justify-between bg-background-primary p-5 gap-5', className)} {...props}>
        {children}
    </div>
  )
}

const Left = ({ children }) => {
    return <div className="flex items-center gap-x-3">{children}</div>;
};

const Middle = ({ children, align = 'center' }) => {
    const alignmentClass = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    }?.[align];

    return <div className={cn('flex items-center gap-x-4 grow', alignmentClass)}>{children}</div>;
    
}

const Right = ({ children }) => {
    return <div className="flex items-center gap-x-3">{children}</div>;
};

const Item = ({ children, className }) => {
    return <div className={cn('flex items-center [&>svg]:block h-full', className)}>{children}</div>;
};

Topbar.Left = Left;
Topbar.Middle = Middle;
Topbar.Right = Right;
Topbar.Item = Item;

export default Topbar;
