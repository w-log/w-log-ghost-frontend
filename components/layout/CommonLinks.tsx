import Link from 'next/link';

import { useGlobalContext } from '@/context/global';
import { Github, Instagram, Mail } from '@components/icons';

const CommonLinks = () => {
    const { contact } = useGlobalContext();

    return (
        <ul className="inline-flex space-x-4">
            {contact?.email && (
                <li className="inline-flex justify-center items-center">
                    <Link href={`mailto:${contact.email}`}>
                        <a target="_blank">
                            <Mail />
                        </a>
                    </Link>
                </li>
            )}
            {contact?.github && (
                <li className="inline-flex justify-center items-center">
                    <Link href={contact.github}>
                        <a target="_blank">
                            <Github />
                        </a>
                    </Link>
                </li>
            )}
            {contact?.instagram && (
                <li className="inline-flex justify-center items-center">
                    <Link href={'https://instagram.com'} target="_blank">
                        <a target="_blank">
                            <Instagram />
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    );
};

export default CommonLinks;
