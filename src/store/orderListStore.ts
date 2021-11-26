import { makeAutoObservable, runInAction } from 'mobx';
import { FetchOrderListType, OrderListItem } from '../services/types';
import { RootStore } from './RootStore';
import { LOADING_STATE } from './types/types';

export class OrderListStore {
  rootStore: RootStore;

  loadingState = LOADING_STATE.NEVER;
  loadingError = '';
  orderList: OrderListItem[] = [];
  page = 1;

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

  setPage(page: number): void {
    this.page += page;
  }

  async fetchOrderList(): Promise<void> {
    this.orderList = [];
    runInAction(() => {
      this.loadingState = LOADING_STATE.PENDING;
    });

    const params = `oauth_token=${this.rootStore.authStore.tokens.accessToken}${
      this.page ? `&skip=${this.page * 10}` : ''
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
}
