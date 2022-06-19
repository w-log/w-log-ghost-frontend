import dynamic from 'next/dynamic';

import { Container } from './Container';
import { HeaderTitle } from './HeaderTitle';
import { HeaderLink } from './HeaderLink';

const ToggleTheme = dynamic(
    () =>
        import('@components/ToggleTheme')
            .then((result) => result.ToggleTheme)
            .catch((error) => error),
    {
        ssr: false,
    }
);

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20 flex w-full h-20 text-primary-2 dark:text-sencondary bg-white dark:bg-primary-1">
            <Container className="w-100 flex flex-1 px-6 flex-row justify-between items-center">
                <HeaderTitle />
                <ul className="inline-flex space-x-4">
                    <li>
                        <HeaderLink href="/posts">Posts</HeaderLink>
                    </li>
                    <li>
                        <ToggleTheme />
                    </li>
                </ul>
            </Container>
        </header>
    );
};
