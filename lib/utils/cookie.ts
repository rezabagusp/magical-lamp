import { parse } from 'cookie';

export const parseCookie = (cookieString: string) => parse(cookieString) as any;
