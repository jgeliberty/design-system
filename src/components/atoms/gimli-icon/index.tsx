import React, { MouseEventHandler } from 'react';
import classNames from 'classnames';

import './styles.scss';

interface GimliIconProps {
  name: string;
  size?: number;
  disabled?: boolean;
  color?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const IconColor = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WHITE: 'white',
  DISABLED: 'disabled',
};

const GimliIcon = ({ name, size = 24, disabled = false, color, className, onClick}: GimliIconProps) => {
  return (
    <div
      className={classNames(
        'gimliIcon',
        className,
        name,
        disabled && 'disabled',
        onClick && 'pointer',
        color && `gimliIcon-${color}`,
      )}
      onClick={onClick}
      style={{ fontSize: size }}
    />
  );
};

export { IconColor };
export default GimliIcon;
