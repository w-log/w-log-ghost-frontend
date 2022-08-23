import React from 'react';

export const Container = React.forwardRef<
    HTMLDivElement,
    {
        className?: string;
        children?: React.ReactNode;
    }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={`max-w-screen-lg mx-auto w-full ${className ?? ''}`}
        >
            {children}
        </div>
    );
});

Container.displayName = 'Container';
