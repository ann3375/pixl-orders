import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITableCell
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  content?: string | number | null;
  children?: ReactNode;
}

export const TableCell: React.FC<ITableCell> = ({ content, children, ...props }) => {
  return (
    <td {...props}>
      <p>{content} </p>
      {children}
    </td>
  );
};
HTMLTableCellElement;
