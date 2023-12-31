export const API_URI = process.env.NEXT_PUBLIC_API_URI as string;
export const SOCKET_URI = process.env.NEXT_SOCKET_SERVER_URL as string;
export const IS_DEV = process.env.NODE_ENV === 'development';
export const ACCESS_TOKEN_KEY = `access_token`;
export const USER_KEY = `user`;
