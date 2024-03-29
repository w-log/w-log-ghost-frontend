import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Main: React.FC<Props> = ({ className, children }) => {
    return (
        <main className="text-primary-2 dark:text-secondary bg-white dark:bg-primary-1 mt-20">
            {children}
        </main>
    );
};
