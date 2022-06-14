interface Props {
    children?: React.ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className="rounded-lg bg-primary-2 dark:bg-sencondary text-primary-1 dark:text-white">
            {children}
        </div>
    );
};
