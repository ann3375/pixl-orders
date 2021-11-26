import React from 'react';
import { ITableCell, TableCell } from '../../atoms/TableCell';
import { Shipping } from '../../../services/types';

interface IShippingInfo extends ITableCell {
  shippingInfo: Shipping;
}

export const ShippingInfo: React.FC<IShippingInfo> = ({ shippingInfo, className, ...props }) => {
  return (
    <TableCell className={className} {...props}>
      <p>{shippingInfo?.Title}</p>
      <p>{shippingInfo?.Phone}</p>
      <p>{shippingInfo?.Email}</p>
    </TableCell>
  );
};
