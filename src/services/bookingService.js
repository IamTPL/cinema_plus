import axios from 'axios';
import { BASE_URL, configHeader } from './config';

export const bookingServ = {
    bookTicket: (bookingData) => {
        return axios({
            method: 'POST',
            url: `${BASE_URL}/api/QuanLyDatVe/DatVe`,
            data: bookingData,
            headers: configHeader(),
        });
    },
};
