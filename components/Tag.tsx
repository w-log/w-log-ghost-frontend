interface Props {
    reverse?: boolean;
    children?: React.ReactNode;
}

export const Tag: React.FC<Props> = ({ reverse, children }) => {
    return (
        <span
            className={`rounded-full text-xs py-0.5 px-2.5 ${
                reverse
                    ? 'bg-primary-2 text-white dark:text-primary-1 dark:bg-sencondary'
                    : 'text-primary-2 bg-white dark:bg-primary-1 dark:text-sencondary'
            }`}
        >
            {children}
        </span>
    );
};
