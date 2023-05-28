import axios from 'axios';
import { BASE_URL, configHeader } from './config';

export const movieServ = {
    getMovieList: () => {
        return axios.get(
            `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`,
            { headers: configHeader() }
        );
    },
    getMovieByTheater: () => {
        return axios.get(
            `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
            {
                headers: configHeader(),
            }
        );
    },
    getBanners: () => {
        return axios.get(`${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`, {
            headers: configHeader(),
        });
    },

    getDetailMovie: (id) => {
        return axios.get(
            `${BASE_URL}/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            {
                headers: configHeader(),
            }
        );
    },
    getShowtimes: (id) => {
        return axios.get(
            `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            {
                headers: configHeader(),
            }
        );
    },
    getDetailTicket: (id) => {
        return axios.get(
            `${BASE_URL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            {
                headers: configHeader(),
            }
        );
    },
};
