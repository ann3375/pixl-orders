import React from 'react';

import './orderPageListTemplate.scss';

interface IOrderListPageTemplateProps {
  orderListTable?: React.ReactElement;
}

export const OrderListPageTemplate: React.FC<IOrderListPageTemplateProps> = ({
  orderListTable,
}) => {
  return <div className="wrapper">{orderListTable}</div>;
};
