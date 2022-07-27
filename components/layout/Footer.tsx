import { Container } from './Container';
import CommonLinks from './CommonLinks';

export const Footer = () => (
    <footer>
        <Container className="flex relative px-6 pb-6 sm:px-12 sm:pb-12 font-bold justify-between dark:text-secondary text-primary-2">
            <p id="copyright">© {new Date().getFullYear()} W Log</p>
            <CommonLinks />
        </Container>
    </footer>
);
