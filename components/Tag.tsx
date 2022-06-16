interface Props {
    children?: React.ReactNode;
}

export const Tag: React.FC<Props> = ({ children }) => {
    return (
        <span className="rounded-full text-xs py-0.5 px-2.5 text-primary-2 bg-white dark:bg-primary-1 dark:text-sencondary">
            {children}
        </span>
    );
};
