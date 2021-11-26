import React from 'react';
import classNames from 'classnames';
import { TableCell } from '../../atoms/TableCell';
import { TableColumnTitle } from '../../atoms/TableColumnTitle';
import { DeliveryInfo } from '../../molecules/DeliveryInfo';
import { Link } from '../../atoms/Link';
import { ShippingInfo } from '../../molecules/ShippingInfo';
import { changeOrderListItemIndex } from '../../../utils/changeOrderListIndex';
import { HEADER_TABLE_TITLE } from './constants/constants';
import { OrderListItem } from '../../../services/types';
import { transformToDate } from '../../../utils/transformToDate';
import { IconName } from '../../atoms/Icon/types/types';

import './orderListTable.scss';

interface IOrderListTable {
  isLoaded: boolean;
  orderList: OrderListItem[];
  currentPage: number;
}

export const OrderListTable: React.FC<IOrderListTable> = ({ isLoaded, orderList, currentPage }) => {
  const classProps = classNames('table__body', {
    table__body_loading: !isLoaded,
  });

  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          {HEADER_TABLE_TITLE.map((title) => (
            <TableColumnTitle key={title} title={title} className="head" />
          ))}
        </tr>
      </thead>

      <tbody className={classProps}>
        {orderList &&
          orderList.map((order, index) => (
            <tr key={order.CustomId} className="table__row">
              <TableColumnTitle
                className="table__index"
                key={index}
                title={changeOrderListItemIndex(currentPage, index)}
              />

              <TableCell content={transformToDate(order.DateCreated)} />
              <TableCell content={order.Title} />
              <TableCell content={transformToDate(order.DatePaid)} />
              <TableCell content={transformToDate(order.DateReady)} />

              <DeliveryInfo className="table__delivery-info" deliveryInfo={order.DeliveryAddress} />
              <ShippingInfo shippingInfo={order.Shipping} />

              <TableCell content={order.DeliveryPrice} />
              <TableCell content={order.DiscountPrice} />
              <TableCell content={order.DiscountTitle} />
              <TableCell content={order.Price} />
              <TableCell content={order.TotalPrice} />
              <TableCell content={order.Status} />
              <TableCell content={order.PaymentStatus} />
              <TableCell className="table__load-link">
                <Link downloadLink={order.DownloadLink} iconName={IconName.loadIcon} />
              </TableCell>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
