import React from 'react';

export const Container: React.FC<{
    className?: string;
    children?: React.ReactNode;
}> = ({ className, children }) => {
    return (
        <div className={`max-w-screen-xl mx-auto w-full ${className ?? ''}`}>
            {children}
        </div>
    );
};
