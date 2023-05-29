import React, { MouseEventHandler } from 'react';

interface GimliIconProps {
    name: string;
    size?: number;
    disabled?: boolean;
    color?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
declare const IconColor: {
    PRIMARY: string;
    SECONDARY: string;
    WHITE: string;
    DISABLED: string;
};
declare const GimliIcon: ({ name, size, disabled, color, className, onClick }: GimliIconProps) => React.JSX.Element;

export { GimliIcon, IconColor };
