import React, { MouseEventHandler } from 'react';

const useClickAccessHandler = (eventFn: () => void, disabled?: boolean) => {
    const handleKeyPress = React.useCallback(
        (e: React.KeyboardEvent) => {
            if (
                e.key === 'Enter' ||
                e.key === 'Space' ||
                e.charCode === 13 ||
                e.charCode === 32
            ) {
                e.preventDefault();
                eventFn();
            }
        },
        [eventFn, disabled]
    );

    const handleClick = React.useCallback(
        () => !disabled && eventFn(),
        [eventFn, disabled]
    );

    return {
        tabIndex: disabled ? undefined : 0,
        ariaDisabled: disabled,
        onClick: handleClick,
        onKeyPress: handleKeyPress,
    };
};

export default useClickAccessHandler;
