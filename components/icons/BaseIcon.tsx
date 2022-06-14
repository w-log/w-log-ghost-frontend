import React from 'react';
import { StyledIconBase, StyledIconProps } from '@styled-icons/styled-icon';

export const BaseIcon = React.forwardRef<any, StyledIconProps>((props, ref) => {
    return (
        <StyledIconBase
            iconAttrs={React.useMemo(
                () => ({
                    fill: 'currentColor',
                }),
                []
            )}
            iconVerticalAlign="middle"
            iconViewBox="0 0 24 24"
            {...props}
            className={`w-log-icon ${props.className ?? ''}`}
            ref={ref}
        >
            {props.children}
        </StyledIconBase>
    );
});

BaseIcon.displayName = 'BaseIcon';
