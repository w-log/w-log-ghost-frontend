const useClickActiveHandler = (eventFn: () => {}, disabled?: boolean) => {
    return {
        tabIndex: disabled ? undefined : 0,
        ariaDisabled: disabled,
        onClick: (e: MouseEvent) => !disabled && eventFn(),
    };
};

export default useClickActiveHandler;
