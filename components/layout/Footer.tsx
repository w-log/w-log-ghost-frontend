import { Container } from './Container';
import CommonLinks from './CommonLinks';

export const Footer = () => (
    <footer>
        <Container className="flex px-12 relative pb-12 font-bold justify-between dark:text-sencondary text-primary-2">
            <p id="copyright">© {new Date().getFullYear()} W Log</p>
            <CommonLinks />
        </Container>
    </footer>
);
