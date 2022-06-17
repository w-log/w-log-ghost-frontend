import dynamic from 'next/dynamic';

import { Container } from './Container';
import { HeaderTitle } from './HeaderTitle';

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
        <header className="fixed top-0 left-0 z-20 flex w-full h-20 bg-white dark:bg-primary-1">
            <Container className="w-100 flex flex-1 px-6 flex-row justify-between items-center">
                <HeaderTitle />

                <ToggleTheme />
            </Container>
        </header>
    );
};
