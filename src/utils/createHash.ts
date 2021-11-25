import crypto from 'crypto';

export const createHash = (requestToken: string | null): string => {
  return crypto
    .createHash('sha1')
    .update(`${requestToken}${process.env.REACT_APP_SECRET_PRIVATE_KEY}`)
    .digest('hex');
};
