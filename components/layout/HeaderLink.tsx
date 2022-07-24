import Link, { LinkProps } from 'next/link';

export const HeaderLink: React.FC<
    LinkProps & { children?: React.ReactNode }
> = ({ children, ...linkProps }) => (
    <Link {...linkProps}>
        <a className="inline-flex font-medium px-1.5 h-6 text-primary-2 dark:text-sencondary text-base sm:text-lg">
            {children}
        </a>
    </Link>
);
