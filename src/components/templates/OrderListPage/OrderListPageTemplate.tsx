import React from 'react';

import './orderPageListTemplate.scss';

interface IOrderListPageTemplateProps {
  orderListTable?: React.ReactElement;
  pagination?: React.ReactElement;
}

export const OrderListPageTemplate: React.FC<IOrderListPageTemplateProps> = ({
  orderListTable,
  pagination,
}) => {
  return (
    <div className="wrapper">
      {orderListTable}
      {pagination}
    </div>
  );
};
