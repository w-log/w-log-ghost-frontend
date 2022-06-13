import React from 'react';
import { Container } from './Container';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const Main: React.FC<Props> = ({ className, children }) => {
    return (
        <main className="bg-white dark:bg-primary-1">
            <Container
                className={`w-100 flex px-12 flex-column justify-between items-center ${
                    className ?? ''
                }`}
            >
                {children}
            </Container>
        </main>
    );
};
