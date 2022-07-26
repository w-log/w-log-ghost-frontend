import React, { MouseEventHandler } from 'react';

const useClickAccessHandler = (eventFn?: () => void, disabled?: boolean) => {
    const handleKeyPress = React.useCallback(
        (e: React.KeyboardEvent) => {
            if (disabled) return;

            if (
                e.key === 'Enter' ||
                e.key === 'Space' ||
                e.charCode === 13 ||
                e.charCode === 32
            ) {
                e.preventDefault();
                eventFn && eventFn();
            }
        },
        [eventFn, disabled]
    );

    const handleClick = React.useCallback(
        () => !disabled && eventFn && eventFn(),
        [eventFn, disabled]
    );

    return {
        tabIndex: disabled || !eventFn ? undefined : 0,
        'aria-disabled': !!disabled,
        onClick: handleClick,
        onKeyPress: handleKeyPress,
    };
};

export default useClickAccessHandler;
