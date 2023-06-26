import React, { MouseEventHandler, ReactNode } from 'react';
import styleInject from '/home/jgeneve/Workspace/Sites/vhosts/design-system/node_modules/style-inject/dist/style-inject.es.js';

var css_248z$3 = ".disabled{fill:#eee!important;border-color:#eee!important;color:#eee!important;cursor:not-allowed!important}.Counter{align-items:center;display:flex;gap:8px}";
styleInject(css_248z$3);

interface CounterInterface {
    value?: number;
}
declare const Counter: ({ value }: CounterInterface) => React.JSX.Element;

var css_248z$2 = ".disabled{fill:#eee!important;border-color:#eee!important;color:#eee!important;cursor:not-allowed!important}.Counter{align-items:center;display:flex;gap:8px}";
styleInject(css_248z$2);

declare const CounterDisplay: () => React.JSX.Element;

var css_248z$1 = ".disabled{fill:#eee!important;border-color:#eee!important;color:#eee!important;cursor:not-allowed!important}.button{align-items:center;font-weight:900;height:48px;justify-content:center;padding:10px 16px}.button,.button-textLoader span{display:flex}.button .gimliIcon,.button-loader{display:flex;margin-right:8px}.button-filled-primary{background-color:var(--main-color,#e82f4f);border:none;color:#fff}.button-filled-secondary{background-color:var(--salefunnelv2_gl_utilitary_color,#112846);border:none;color:#fff}.button-filled-black{background-color:#000;border:none;color:#fff}.button-outlined-primary{background-color:#fff;border:1px solid var(--main-color,#e82f4f);color:var(--main-color,#e82f4f)}.button-outlined-primary .button-textLoader span span{background-color:var(--main-color,#e82f4f)}.button-outlined-primary .button-loader span{border-color:var(--main-color,#e82f4f);border-bottom-color:transparent}.button-outlined-secondary{background-color:#fff;border:1px solid var(--salefunnelv2_gl_utilitary_color,#112846);color:var(--salefunnelv2_gl_utilitary_color,#112846)}.button-outlined-secondary .button-textLoader span span{background-color:var(--salefunnelv2_gl_utilitary_color,#112846)}.button-outlined-secondary .button-loader span{border-color:var(--salefunnelv2_gl_utilitary_color,#112846);border-bottom-color:transparent}.button-outlined-black{background-color:#fff;border:1px solid #000;color:#000}.button-outlined-black .button-textLoader span span{background-color:#000}.button-outlined-black .button-loader span{border-color:#000 #000 transparent}.button-filled-disabled{background-color:#eee;border:1px solid #eee;color:#9a9a9a;cursor:not-allowed!important}.button-outlined-disabled{border:1px solid #9a9a9a;color:#9a9a9a;cursor:not-allowed!important}.button-outlined-disabled .button-textLoader span span{background-color:#9a9a9a}.button-outlined-disabled .button-loader span{border-color:#9a9a9a #9a9a9a transparent}";
styleInject(css_248z$1);

interface ButtonProps {
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

var css_248z = ".disabled{fill:#eee!important;border-color:#eee!important;color:#eee!important;cursor:not-allowed!important}.gimliIcon.pointer{cursor:pointer}.gimliIcon-primary{color:var(--main-color,#e82f4f)}.gimliIcon-secondary{color:var(--salefunnelv2_gl_utilitary_color,#112846)}.gimliIcon-white{color:#fff}.gimliIcon-disabled{color:#9a9a9a}";
styleInject(css_248z);

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

export { Button, ButtonColor, ButtonFormat, Counter, CounterDisplay, GimliIcon, IconColor };
