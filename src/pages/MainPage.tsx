import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootStore';
import { OrderListPageTemplate } from '../components/templates/OrderListPage/OrderListPageTemplate';
import { LOADING_STATE } from '../store/types/types';
import { OrderListTable } from '../components/organism/OrderListTable';

export const MainPage = observer((): JSX.Element => {
  const { authStore, orderListStore } = useContext(RootStoreContext);

  const isLoaded = orderListStore.loadingState === LOADING_STATE.LOADED;

  useEffect(() => {
    authStore.fetchAccessToken();
  }, [authStore]);

  useEffect(() => {
    if (authStore.tokens.accessToken) {
      orderListStore.fetchOrderList();
      orderListStore.fetchOrderListCount();
    }
  }, [orderListStore, authStore.tokens.accessToken]);

  return (
    <OrderListPageTemplate
      orderListTable={<OrderListTable orderList={orderListStore.orderList} isLoaded={isLoaded} />}
    />
  );
});
