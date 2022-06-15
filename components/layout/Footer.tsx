import Link from 'next/link';

import { Github, Instagram, Mail } from '@components/icons';

import { Container } from './Container';

export const Footer = () => (
    <footer>
        <Container className="flex px-12 relative pb-12 font-bold justify-between dark:text-sencondary text-primary-2">
            <p id="copyright">© {new Date().getFullYear()} W Log</p>
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
    </footer>
);
