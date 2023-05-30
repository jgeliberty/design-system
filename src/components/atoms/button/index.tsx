import React, { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import { BeatLoader, ClipLoader } from 'react-spinners';

import { GimliIcon, IconColor } from '~atoms';

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

// Constants of colors possible for the button
const ButtonColor = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLACK: 'black',
};

// Constants of format possible for the button
const ButtonFormat = {
  FILLED: 'filled',
  OUTLINED: 'outlined',
};

const Button = ({
  color = ButtonColor.PRIMARY,
  format = ButtonFormat.FILLED,
  icon = '',
  iconSize = 16,
  className = '',
  disabled = false,
  isLoading = false,
  onClick = () => {},
  children = <>Button</>,
}: ButtonProps) => {

  // Build class for the button depending of the color and the format used (ex: button-filled-primary)
  const getClassForButton = () => {
    let buttonClassColor = 'button';

    switch (format) {
      case ButtonFormat.FILLED:
        buttonClassColor += '-filled';
        break;
      case ButtonFormat.OUTLINED:
        buttonClassColor += '-outlined';
        break;
      default:
        break;
    }

    if (disabled) {
      buttonClassColor += '-disabled';
    } else {
      switch (color) {
        case ButtonColor.PRIMARY:
          buttonClassColor += '-primary';
          break;
        case ButtonColor.SECONDARY:
          buttonClassColor += '-secondary';
          break;
        case ButtonColor.BLACK:
          buttonClassColor += '-black';
          break;
        default:
          break;
      }
    }

    return buttonClassColor;
  };

  // Get the color's icon depending of the color of the button
  const getColorIcon = () => {
    console.debug('color', color);

    if (disabled) {
      return IconColor.DISABLED;
    }
    if (format === ButtonFormat.FILLED) {
      return IconColor.WHITE;
    }


    switch (color) {
      case ButtonColor.PRIMARY:
        return IconColor.PRIMARY;
      case ButtonColor.SECONDARY:
        return IconColor.SECONDARY;
      default:
        return IconColor.PRIMARY;
    }
  };

  // Render icon depending of the loading state
  const renderIcon = () => {
    if (isLoading) {
      return (
        <div className="button-loader">
          {/* Todo fix the color for outlined format */}
          <ClipLoader color="#fff" size={16} />
        </div>
      );
    }
    return <GimliIcon name={icon} color={getColorIcon()} size={iconSize} />;
  };

  return (
    <button
      type="button"
      className={classNames(className, 'button', getClassForButton())}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && renderIcon()}
      {isLoading && !icon ? (
        <div className="button-textLoader">
          <BeatLoader color="#fff" size={12} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export { ButtonColor, ButtonFormat };
export default Button;
