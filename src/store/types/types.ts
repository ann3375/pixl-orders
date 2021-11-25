export enum LOADING_STATE {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  PENDING = 'PENDING',
}

export type TokensType = {
  requestToken: string | null;
  refreshToken: string | null;
  accessToken: string | null;
};
