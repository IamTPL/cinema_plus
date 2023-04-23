import React, { useEffect, useState } from 'react';
import { movieServ } from '../../services/movieService';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
    OFF_LOADING,
    ON_LOADING,
} from '../../Page/redux/constant/spinnerConstant';
import './ticketDetail.css';
import { CLEAR_SEAT } from '../../Page/redux/constant/bookingConstant';

const TicketDetail = ({ id }) => {
    const [detailFilm, setDeatailFilm] = useState();
    let { seatsArr } = useSelector((state) => state.paymentDetailReducer);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ON_LOADING });
        movieServ
            .getDetailTicket(id)
            .then((res) => {
                setDeatailFilm(res.data.content.thongTinPhim);
                dispatch({ type: OFF_LOADING });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: OFF_LOADING });
            });
    }, []);

    const getTotal = () => {
        let totalPay = seatsArr.reduce((total, item) => {
            return total + item.giaVe;
        }, 0);
        return Intl.NumberFormat().format(totalPay);
    };

    const handlePayment = () => {
        const MySwal = withReactContent(Swal);
        if (seatsArr.length !== 0) {
            MySwal.fire({
                icon: 'success',
                title: 'Booking successful!',
                text: 'View booking history',
                confirmButtonText: 'ok',
            })
                .then(() => {
                    return MySwal.fire(
                        <div>
                            <h3 className="text-orange-700 mb-5">
                                Booking Details
                            </h3>
                            <div className="flex justify-between text-zinc-200">
                                <span>Movie:</span>
                                <span className="text-zinc-500">
                                    {detailFilm.tenPhim}
                                </span>
                            </div>
                            <div className="flex justify-between text-zinc-200">
                                <span>Ticket Quantity:</span>
                                <span className="text-zinc-500">
                                    {seatsArr.length}
                                </span>
                            </div>
                            <div className="flex justify-between text-zinc-200">
                                <span>Seats:</span>
                                <span className="text-zinc-500 flex flex-wrap">
                                    {seatsArr.map((seat) => (
                                        <span className="text-zinc-500 mx-1 seat">
                                            {seat.tenGhe}
                                        </span>
                                    ))}
                                </span>
                            </div>
                            <div className="flex justify-between text-zinc-200">
                                <span>Date:</span>
                                <span className="text-zinc-500">
                                    {detailFilm.ngayChieu}
                                </span>
                            </div>
                            <div className="flex justify-between text-zinc-200">
                                <span>Time:</span>
                                <span className="text-zinc-500">
                                    {detailFilm.gioChieu}
                                </span>
                            </div>
                        </div>
                    );
                })
                .then(() => {
                    dispatch({ type: CLEAR_SEAT });
                    window.location.href = '/';
                });
        } else {
            MySwal.fire({
                icon: 'error',
                title: "You haven't selected a seat!",
                text: 'Please choose your seat',
            });
        }
    };

    return (
        <div className="my-28 md:mt-14 md:border-t md:border-orange-700 px-10 sm:px-6 w-full text-zinc-200 space-y-5">
            <h1 className="text-center text-orange-700 text-2xl md:mt-5">
                {`${getTotal()} VND`}
            </h1>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Theater</span>
                <span className="text-zinc-400">{detailFilm?.tenCumRap}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Address</span>
                <span className="text-zinc-400">{detailFilm?.diaChi}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Cinema</span>
                <span className="text-zinc-400">{detailFilm?.tenRap}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Time</span>
                <span className="text-zinc-400">{`${detailFilm?.ngayChieu} - ${detailFilm?.gioChieu}`}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Movie</span>
                <span className="text-zinc-400">{detailFilm?.tenPhim}</span>
            </div>
            <div className="flex justify-between">
                <span>Seats</span>
                <span className="text-zinc-400 flex flex-wrap">
                    {seatsArr?.map((item, index) => {
                        return (
                            <span className="mx-2 seat" key={index}>
                                {item.tenGhe}
                            </span>
                        );
                    })}
                </span>
            </div>
            <button
                onClick={() => {
                    handlePayment();
                }}
                className=" text-zinc-100 border bg-orange-700 border-orange-700 duration-300 hover:bg-black hover:text-orange-700  w-full py-2.5 rounded-md"
            >
                Payment
            </button>
        </div>
    );
};

export default TicketDetail;
