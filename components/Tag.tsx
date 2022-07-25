interface Props extends React.HTMLProps<HTMLSpanElement> {
    reverse?: boolean;
    children?: React.ReactNode;
}

export const Tag: React.FC<Props> = ({
    reverse,
    children,
    className,
    ...otherProps
}) => {
    return (
        <span
            {...otherProps}
            className={`rounded-full text-xs sm:text-base py-0.5 px-2.5 ${
                reverse
                    ? 'bg-primary-2 text-white dark:text-primary-1 dark:bg-sencondary'
                    : 'text-primary-2 bg-white dark:bg-primary-1 dark:text-sencondary'
            } ${className}`}
        >
            {children}
        </span>
    );
};
