import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootStore';
import { OrderListPage } from '../components/templates/OrderListPage/OrderListPage';

export const MainPage = observer(() => {
  const { authStore, orderListStore } = useContext(RootStoreContext);

  useEffect(() => {
    authStore.fetchAccessToken();
  }, [authStore]);

  useEffect(() => {
    if (authStore.tokens.accessToken) {
      orderListStore.fetchOrderList();
      orderListStore.fetchOrderListCount();
    }
  }, [orderListStore, authStore.tokens.accessToken]);

  return <OrderListPage orderList={orderListStore.orderList} />;
});
