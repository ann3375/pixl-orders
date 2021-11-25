import { createContext } from 'react';
import { AuthStore } from './authStore';
import { OrderListStore } from './orderListStore';

export class RootStore {
  authStore = new AuthStore(this);
  orderListStore = new OrderListStore(this);

  constructor() {
    this.authStore = new AuthStore(this);
    this.orderListStore = new OrderListStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
