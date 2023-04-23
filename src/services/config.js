import { localUser } from './localStorage';
export const BASE_URL = 'https://movienew.cybersoft.edu.vn';

export const configHeader = () => {
    return {
        TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNiIsIkhldEhhblN0cmluZyI6IjIwLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NTE2ODAwMDAwMCIsIm5iZiI6MTY3MDYwNTIwMCwiZXhwIjoxNjk1MzE1NjAwfQ.JzTLdv1wGMs2Mtmv6ICgnAZl8M1Jc0hBDFR2OXH1JN0',
        Authorization: `Bearer ${localUser.get()?.accessToken}`,
    };
};
