import React from 'react';
import { ITableCell, TableCell } from '../../atoms/TableCell';
import { DeliveryAddressType } from '../../../services/types';

interface IDeliveryInfo extends ITableCell {
  deliveryInfo: DeliveryAddressType;
}

export const DeliveryInfo: React.FC<IDeliveryInfo> = ({ deliveryInfo, className }) => {
  return (
    <TableCell className={className}>
      <p>{deliveryInfo?.City}</p>
      <p>{deliveryInfo?.State}</p>
      <p>{deliveryInfo?.AddressLine1}</p>
      <p>{deliveryInfo?.AddressLine2}</p>
      <p>{deliveryInfo?.FullName}</p>
      <p>{deliveryInfo?.Phone}</p>
    </TableCell>
  );
};
