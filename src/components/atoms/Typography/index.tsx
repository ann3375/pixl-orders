import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { ColorType, TypographyType, TypographyTypeStyle } from './types/types';

import './typographyStyle.scss';

interface ITypography
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant: TypographyTypeStyle;
  children: ReactNode;
  color?: ColorType;
}

export const Typography: React.FC<ITypography> = ({
  variant,
  children,
  color,
  className,
  ...props
}) => {
  const Component = TypographyType[variant];
  return (
    <Component
      className={classNames('typography', className, {
        [`typography_variant_${variant}`]: variant,
        [`typography_color_${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
