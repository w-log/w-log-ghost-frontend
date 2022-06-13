import { Container } from './Container';
import { HeaderTitle } from './HeaderTitle';

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 flex w-full h-20 bg-white dark:bg-primary-1">
            <Container className="w-100 flex flex-1 px-6 flex-row justify-between items-center">
                <HeaderTitle />
            </Container>
        </header>
    );
};
