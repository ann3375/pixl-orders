import React from 'react';
import { ITableCell, TableCell } from '../../atoms/TableCell';
import { Shipping } from '../../../services/types';

interface IShippingInfo extends ITableCell {
  shippingInfo: Shipping;
}

export const ShippingInfo: React.FC<IShippingInfo> = ({ shippingInfo }) => {
  const { Title, Phone, Email } = shippingInfo;
  return (
    <TableCell>
      <p>{Title}</p>
      <p>{Phone}</p>
      <p>{Email}</p>
    </TableCell>
  );
};
