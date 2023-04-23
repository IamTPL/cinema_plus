import React, { useEffect, useState } from 'react';
import { userServ } from '../../services/userService';
import moment from 'moment';
import {
    OFF_LOADING,
    ON_LOADING,
} from '../../Page/redux/constant/spinnerConstant';
import { useDispatch } from 'react-redux';

const BookingHistory = () => {
    const [info, setInfo] = useState();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ON_LOADING });
        userServ
            .getInfoAccount()
            .then((res) => {
                setInfo(res.data.content);
                dispatch({ type: OFF_LOADING });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: OFF_LOADING });
            });
    }, []);

    return (
        <div className="container sm:px-4 mx-auto text-zinc-200 py-20 bg-zinc-800">
            <h1 className="text-center text-4xl font-semibold text-orange-700 border-b border-zinc-500 pb-5 mb-10">
                Booking History
            </h1>
            <div className="flex flex-wrap justify-center gap-5">
                {info?.thongTinDatVe.reverse().map((item, index) => {
                    return (
                        <div key={index} className=" bg-black p-3 rounded-2xl">
                            <div className="flex justify-between items-center border-b border-zinc-600 pb-2 mb-4">
                                <div className="flex space-x-3 items-center">
                                    <h2 className="font-semibold text-xl sm:text-base">
                                        {item.tenPhim}
                                    </h2>
                                    <span className="text-xs px-2.5 bg-zinc-500 rounded-full -translate-y-1">{`${item.thoiLuongPhim}'`}</span>
                                </div>
                                <div className="text-red-500 text-lg">
                                    ${Intl.NumberFormat().format(item.giaVe)}
                                </div>
                            </div>
                            <div className="flex gap-x-14 sm:gap-x-4 my-6 sm:my-3 mb-10 sm:text-xs">
                                <div>
                                    <div className="text-sm text-zinc-500">
                                        Booking date
                                    </div>
                                    <span className="text-lg font-semibold sm:text-sm">
                                        {moment(item.ngayDat).format(
                                            'DD-MM-YYYY ~ h:mm'
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm text-zinc-500 sm:text-xs">
                                        Booking code
                                    </div>
                                    <span className="text-lg font-semibold sm:text-sm">
                                        {item.maVe}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-sm text-zinc-500 sm:text-xs">
                                        Theater
                                    </div>
                                    <span className="text-lg font-semibold sm:text-sm">
                                        {item.danhSachGhe[0].maHeThongRap}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-5 text-black">
                                    <div className="bg-orange-700 space-x-2 px-3 sm:px-2 sm:py-0 py-0.5 rounded-full">
                                        <i className="fa-solid fa-couch text-sm"></i>
                                        <span className="sm:text-sm">
                                            {item.danhSachGhe.length}
                                        </span>
                                    </div>

                                    <div className="bg-orange-700 space-x-2 px-3 sm:px-2 sm:py-0 py-0.5 rounded-full">
                                        <i className="fa-solid fa-film"></i>
                                        <span className="sm:text-sm">
                                            {item.danhSachGhe[0].tenCumRap}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <i className="fa-solid fa-masks-theater text-zinc-300 text-4xl sm:text-xl"></i>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingHistory;
