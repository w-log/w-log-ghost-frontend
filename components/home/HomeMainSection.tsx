import React from 'react';

import { Container } from '@components/layout/Container';
import CommonLinks from '@components/layout/CommonLinks';

interface Props {
    title: string;
    titleContent: React.ReactNode;
    description: string;
}

export const HomeMainSection: React.FC<Props> = ({
    title,
    titleContent,
    description,
}) => {
    return (
        <section className="fixed left-0 z-0 top-20 bottom-0 w-full flex justify-start items-center bg-white dark:bg-primary-1 text-primary-2 dark:text-sencondary">
            <Container className="px-8 sm:px-12">
                <h2 className="font-bold text-4xl" aria-label={title}>
                    {titleContent}
                </h2>
                <p className="text-base font-medium mt-2 mb-7">{description}</p>
                <CommonLinks />
            </Container>
        </section>
    );
};
