import Link from 'next/link';
import React from 'react';
import { Container } from '../layout/Container';

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
                <p className="text-base font-medium mt-1 mb-9">{description}</p>
                <ul className="inline-flex space-x-4">
                    <li>
                        <Link
                            href={'mailto:taewoong431@gmail.com'}
                            target="_blank"
                        >
                            메일
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://github.com/w-log'} target="_blank">
                            깃허브
                        </Link>
                    </li>
                    <li>
                        <Link href={'https://instagram.com'} target="_blank">
                            인스타
                        </Link>
                    </li>
                </ul>
            </Container>
        </section>
    );
};
