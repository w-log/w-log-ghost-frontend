import React from 'react';
import { StyledIconBase, StyledIconProps } from '@styled-icons/styled-icon';

export interface BaseIconProps extends StyledIconProps {
    iconAttrs?: React.SVGProps<SVGSVGElement>;
    iconViewBox?: string;
    iconVerticalAlign?: string;
}

export const BaseIcon = React.forwardRef<SVGElement, BaseIconProps>(
    (props, ref) => {
        const { iconAttrs, iconVerticalAlign, iconViewBox, ...otherProps } =
            props;
        return (
            <StyledIconBase
                iconAttrs={React.useMemo(
                    () =>
                        Object.assign(
                            {
                                fill: 'currentColor',
                            },
                            props.iconAttrs ?? {}
                        ),
                    [props.iconAttrs]
                )}
                iconVerticalAlign={iconVerticalAlign ?? 'middle'}
                iconViewBox={iconViewBox ?? '0 0 24 24'}
                {...otherProps}
                className={`w-log-icon ${props.className ?? ''}`}
                ref={ref}
            >
                {props.children}
            </StyledIconBase>
        );
    }
);

BaseIcon.displayName = 'BaseIcon';
