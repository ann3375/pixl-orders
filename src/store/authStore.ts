import { makeAutoObservable, runInAction } from 'mobx';
import { FetchRequestTokenType } from '../services/types';
import { createHash } from '../utils/createHash';
import { RootStore } from './RootStore';
import { LOADING_STATE, TokensType } from './types/types';

export class AuthStore {
  rootStore: RootStore;
  tokens: TokensType = {
    requestToken: '',
    refreshToken: '',
    accessToken: '',
  };
  loadingState = LOADING_STATE.NEVER;
  loadingError = '';

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setError(error: string): void {
    this.loadingError = error;
  }

  async fetchRequestToken(): Promise<void> {
    runInAction(() => {
      this.loadingState = LOADING_STATE.PENDING;
    });

    try {
      await fetch(`/oauth/requesttoken`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          res.json().then((res: FetchRequestTokenType) => {
            runInAction(() => {
              this.tokens = { ...this.tokens, requestToken: res.RequestToken };
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

  async fetchAccessToken(): Promise<void> {
    await this.fetchRequestToken();
    const hash = createHash(this.tokens.requestToken);

    const params = `oauth_token=${this.tokens.requestToken}&grant_type=api&username=${process.env.REACT_APP_SECRET_PUBLIC_KEY}&password=${hash}`;

    try {
      await fetch(`/oauth/accesstoken?${params}`, {
        method: 'GET',
      }).then((res) => {
        if (res.ok) {
          res.json().then((res: FetchRequestTokenType) => {
            runInAction(() => {
              this.tokens = {
                ...this.tokens,
                accessToken: res.AccessToken,
                refreshToken: res.RefreshToken,
              };
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
