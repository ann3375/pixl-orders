import React from 'react';
import { OrderListItem } from '../../../services/types';
import { transformToDate } from '../../../utils/transformToDate';
import { Typography } from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { HEADER_TABLE_TITLE } from '../constants/constants';

import './orderPageList.scss';

interface IorderListPageProps {
  orderList: OrderListItem[];
}

export const OrderListPage: React.FC<IorderListPageProps> = ({ orderList }) => {
  return (
    <div className="main-container">
      <div className="wrapper">
        <table className="table">
          <thead className="table__header">
            <tr>
              {HEADER_TABLE_TITLE.map((title) => (
                <th key={title}>
                  <Typography variant={TypographyTypeStyle.p}>{title}</Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orderList &&
              orderList.map((order, index) => (
                <tr key={order.CustomId} className="table__row">
                  <td>{index + 1}</td>
                  <td>{transformToDate(order.DateCreated)}</td>
                  <td>{order.Title}</td>
                  <td>{transformToDate(order.DatePaid)}</td>
                  <td>{transformToDate(order.DateReady)}</td>
                  <td>
                    <p>{order.DeliveryAddress.City}</p>
                    <p>{order.DeliveryAddress.State}</p>
                    <p>Улица: {order.DeliveryAddress.AddressLine1}</p>
                    <p>{order.DeliveryAddress.AddressLine2}</p>
                    <p>{order.DeliveryAddress.FullName}</p>
                    <p>{order.DeliveryAddress.Phone}</p>
                  </td>
                  <td>{order.Shipping.Title}</td>
                  <td>{order.DeliveryPrice}</td>
                  <td>{order.DiscountPrice}</td>
                  <td>{order.DiscountTitle}</td>
                  <td>{order.Price}</td>
                  <td>{order.TotalPrice}</td>
                  <td>{order.Status}</td>
                  <td>{order.PaymentStatus}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
