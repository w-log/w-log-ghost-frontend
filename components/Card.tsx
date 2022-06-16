import Link from 'next/link';
import { OutLink } from './icons';

interface Props {
    className?: string;
    href?: string;
    children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ className, href, children }) => {
    const isLink = typeof href === 'string';

    return (
        <article
            className={`relative rounded-lg bg-primary-2 text-white dark:bg-sencondary dark:text-primary-1 ${
                className ?? ''
            }`}
        >
            {isLink && (
                <Link href={href}>
                    <a target={'_blank'} className="absolute top-3.5 right-3.5">
                        <OutLink />
                    </a>
                </Link>
            )}
            {isLink ? (
                <Link href={href}>
                    <a>{children}</a>
                </Link>
            ) : (
                children
            )}
        </article>
    );
};
