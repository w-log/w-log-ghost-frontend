interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => (
    <button
        {...props}
        className={`py-2 px-3 text-sm font-medium sm:text-base rounded border-[1px] transition
        bg-primary-2 text-white border-primary-2 hover:text-primary-2 hover:bg-white
        dark:hover:bg-primary-1 dark:bg-secondary dark:text-primary-1  dark:border-secondary dark:hover:border-secondary-1 dark:hover:text-secondary ${className}`}
    >
        {children}
    </button>
);
