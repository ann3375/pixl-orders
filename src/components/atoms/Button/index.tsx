import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import './button.scss';

interface IButton
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  downLoadLink?: string;
}

export const Button: React.FC<IButton> = ({ children, downLoadLink, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
