import React from 'react';
import { ITableCell, TableCell } from '../../atoms/TableCell';
import { DeliveryAddressType } from '../../../services/types';

interface IDeliveryInfo extends ITableCell {
  deliveryInfo: DeliveryAddressType;
}

export const DeliveryInfo: React.FC<IDeliveryInfo> = ({ deliveryInfo }) => {
  const { City, State, AddressLine1, AddressLine2, FullName, Phone } = deliveryInfo;
  return (
    <TableCell>
      <p>{City}</p>
      <p>{State}</p>
      <p>{AddressLine1}</p>
      <p>{AddressLine2}</p>
      <p>{FullName}</p>
      <p>{Phone}</p>
    </TableCell>
  );
};
