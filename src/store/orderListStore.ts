import { makeAutoObservable, runInAction } from 'mobx';
import { FetchOrderListCountType, FetchOrderListType, OrderListItem } from '../services/types';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

export interface FETCHAPITYPE<T> {
  ApiVersion: string;
  Result: T;
  ResponseCode: number;
}

export class OrderListStore {
  rootStore: RootStore;

  loadingState = LOADING_STATE.NEVER;
  loadingError = '';
  orderList: OrderListItem[] = [];
  orderListCount = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setError(error: string): void {
    this.loadingError = error;
  }

  setOrderList(orderList: OrderListItem[]): void {
    this.orderList = orderList;
  }

  async fetchOrderList(skip?: number): Promise<void> {
    this.loadingState = LOADING_STATE.PENDING;

    const params = `oauth_token=${this.rootStore.authStore.tokens.accessToken}${
      skip ? `&skip=${skip}` : ''
    }`;
    try {
      await fetch(`/orders?${params}`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          res.json().then((res: FetchOrderListType) => {
            runInAction(() => {
              this.setOrderList(res.Result);
            });
          });
        }
        if (!res.ok) {
          runInAction(() => {
            this.setError('Something goes wrong');
          });
        }
      });
    } catch (e) {
      runInAction(() => {
        this.setError((e as Error).message);
      });
    } finally {
      runInAction(() => {
        this.loadingState = LOADING_STATE.LOADED;
      });
    }
  }

  async fetchOrderListCount(): Promise<void> {
    this.loadingState = LOADING_STATE.PENDING;
    const params = `oauth_token=${this.rootStore.authStore.tokens.accessToken}`;
    try {
      await fetch(`/orders/count?${params}`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          res.json().then((res: FetchOrderListCountType) => {
            runInAction(() => {
              this.orderListCount = res.Result.count;
            });
          });
        }
        if (!res.ok) {
          runInAction(() => {
            this.setError('Something goes wrong');
          });
        }
      });
    } catch (e) {
      runInAction(() => {
        this.setError((e as Error).message);
      });
    } finally {
      runInAction(() => {
        this.loadingState = LOADING_STATE.LOADED;
      });
    }
  }
}
