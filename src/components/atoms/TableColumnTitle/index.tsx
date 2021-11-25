import React from 'react';

interface ITableColumnTitle {
  title: string | number;
  className?: string;
}

export const TableColumnTitle: React.FC<ITableColumnTitle> = ({ title, className }) => {
  return (
    <th className={className}>
      <p>{title}</p>
    </th>
  );
};
