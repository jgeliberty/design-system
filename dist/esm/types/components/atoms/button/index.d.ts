import React, { MouseEventHandler, ReactNode } from 'react';
import './styles.scss';
export interface ButtonProps {
    /** Color of the button */
    color?: string;
    format?: string;
    icon?: string;
    iconSize?: number;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isLoading?: boolean;
    children?: ReactNode;
}
declare const ButtonColor: {
    PRIMARY: string;
    SECONDARY: string;
    BLACK: string;
};
declare const ButtonFormat: {
    FILLED: string;
    OUTLINED: string;
};
declare const Button: ({ color, format, icon, iconSize, className, disabled, isLoading, onClick, children, }: ButtonProps) => React.JSX.Element;
export { ButtonColor, ButtonFormat };
export default Button;
