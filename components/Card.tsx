interface Props {
    className?: string;
    children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ className, children }) => {
    return (
        <article
            className={`rounded-lg bg-primary-2 text-white dark:bg-sencondary dark:text-primary-1 ${
                className ?? ''
            }`}
        >
            {children}
        </article>
    );
};
