import React, { useCallback, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../store/RootStore';
import { OrderListPageTemplate } from '../components/templates/OrderListPage/OrderListPageTemplate';
import { LOADING_STATE } from '../store/types/types';
import { OrderListTable } from '../components/organism/OrderListTable';
import { autorun } from 'mobx';
import { Button } from '../components/atoms/Button';
import { Pagination } from '../components/molecules/Pagination';

export const MainPage = observer((): JSX.Element => {
  document.title = 'Order list';
  const { authStore, orderListStore } = useContext(RootStoreContext);
  const isLoaded = orderListStore.loadingState === LOADING_STATE.LOADED;

  useEffect(() => {
    authStore.fetchAccessToken();

    autorun(() => {
      if (authStore.tokens.accessToken) {
        orderListStore.fetchOrderList();
      }
    });
  }, [authStore, orderListStore]);

  const handleSetPage = useCallback(
    (page: number) => {
      orderListStore.setPage(page);
    },
    [orderListStore]
  );

  return (
    <OrderListPageTemplate
      orderListTable={
        <OrderListTable
          orderList={orderListStore.orderList}
          isLoaded={isLoaded}
          currentPage={orderListStore.page}
        />
      }
      pagination={
        <Pagination
          className="order-list__pagination"
          setPage={handleSetPage}
          page={orderListStore.page}
          isLoaded={isLoaded}
        />
      }
    />
  );
});
