
import React from 'react'
import { cn } from '@/utilities/functions';

const Topbar = ({ children, className, ...props }) => {
  return (
    <div className={cn('w-full flex items-center justify-between bg-transparent', className)}>
        {children}
    </div>
  )
}

const Left = ({ children }) => {
    return <div className="flex items-center space-x-4">{children}</div>;
};

const Middle = ({ children }) => {
    return <div className="flex items-center justify-center space-x-4 flex-1">{children}</div>;
};

const Right = ({ children }) => {
    return <div className="flex items-center space-x-4">{children}</div>;
};

const Item = ({ children, className }) => {
    return <div className={`text-sm ${className}`}>{children}</div>;
};

Topbar.Left = Left;
Topbar.Middle = Middle;
Topbar.Right = Right;
Topbar.Item = Item;

export default Topbar;