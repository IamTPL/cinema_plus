import axios from 'axios';
import { BASE_URL, configHeader } from './config';

export const userServ = {
    postLogin: (account) => {
        return axios({
            url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
            method: 'POST',
            data: account,
            headers: configHeader(),
        });
    },
};
