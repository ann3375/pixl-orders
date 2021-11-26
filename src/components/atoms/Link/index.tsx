import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icon } from '../Icon';

interface ILink
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  downloadLink: string;
  iconName?: string;
}

export const Link: React.FC<ILink> = ({ downloadLink, iconName, ...props }) => {
  return (
    <a href={downloadLink} download={!!downloadLink} {...props}>
      {iconName && <Icon name={iconName} width={40} />}
    </a>
  );
};
