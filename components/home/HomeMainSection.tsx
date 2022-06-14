import React from 'react';
import Link from 'next/link';

import { Github, Instagram, Mail } from '@components/icons';
import { Container } from '@components/layout/Container';

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
        <section className="fixed left-0 top-20 bottom-0 w-full flex justify-start items-center bg-white dark:bg-primary-1 text-primary-2 dark:text-sencondary">
            <Container className="px-12 ">
                <h2 className="font-bold text-4xl" aria-label={title}>
                    {titleContent}
                </h2>
                <p className="text-base font-medium mt-2 mb-7">{description}</p>
                <ul className="inline-flex space-x-4">
                    <li className="inline-flex justify-center items-center">
                        <Link href={'mailto:taewoong431@gmail.com'}>
                            <a target="_blank">
                                <Mail />
                            </a>
                        </Link>
                    </li>
                    <li className="inline-flex justify-center items-center">
                        <Link href={'https://github.com/w-log'}>
                            <a target="_blank">
                                <Github />
                            </a>
                        </Link>
                    </li>
                    <li className="inline-flex justify-center items-center">
                        <Link href={'https://instagram.com'} target="_blank">
                            <a target="_blank">
                                <Instagram />
                            </a>
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    );
};
