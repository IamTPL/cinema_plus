import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { movieServ } from '../../services/movieService';
import moment from 'moment/moment';
import { SHOW_MODAL } from '../redux/constant/modalConstant';
import { useDispatch } from 'react-redux';
import ModalTrailer from '../../component/Modal/ModalTrailer';
import { OFF_LOADING, ON_LOADING } from '../redux/constant/spinnerConstant';
import { Tabs } from 'antd';
import './DetailPage.css';

const DetailPage = () => {
    let { id } = useParams();
    let dispatch = useDispatch();
    const [movie, setMovie] = useState();

    useEffect(() => {
        dispatch({ type: ON_LOADING });
        movieServ
            .getShowtimes(id)
            .then((res) => {
                console.log(res.data.content);
                setMovie(res.data.content);
                dispatch({ type: OFF_LOADING });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: OFF_LOADING });
            });
    }, []);

    const renderHeThongRap = () => {
        return movie?.heThongRapChieu.map((heThongRap, index) => {
            return {
                key: index,
                label: <img src={heThongRap.logo} alt="" className="w-20" />,
                children: heThongRap.cumRapChieu.map((cumRap, index) => {
                    return (
                        <div key={index} className="showtimes">
                            <div className="flex my-5 mb-8">
                                <span className="bg-orange-600 text-zinc-300 font-bold rounded-md px-2 leading-[25px]">
                                    C16
                                </span>
                                <span className="mx-3 text-zinc-500">|</span>
                                <h3 className="text-lg font-bold">
                                    {cumRap.tenCumRap}
                                </h3>
                            </div>
                            <div className="mb-5">
                                {cumRap.lichChieuPhim.map((lich, index) => {
                                    return (
                                        <NavLink
                                            to={`/booking/${lich.maLichChieu}`}
                                            key={index}
                                        >
                                            <span className="text-orange-700 bg-zinc-400 border-2 border-zinc-600 px-3 py-1.5 rounded-md mr-5 text-xl">
                                                {moment(
                                                    lich.ngayChieuGioChieu
                                                ).format('h:mm')}
                                            </span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }),
            };
        });
    };

    return (
        movie && (
            <div className="detail max-w-5xl mx-auto my-32 text-zinc-200">
                <ModalTrailer></ModalTrailer>
                <div>
                    <h1 className="text-zinc-100 text-3xl border-b border-orange-700 pb-3">
                        Movie Details
                    </h1>
                    <div className="mt-5 flex">
                        <img
                            className="w-80 rounded-lg"
                            src={movie.hinhAnh}
                            alt=""
                        />
                        <div className="content ml-10">
                            <h2 className="border-b border-zinc-600 pb-2 text-2xl">
                                {movie.tenPhim}
                            </h2>
                            <p className="text-sm text-zinc-400 mt-5 leading-6">
                                {movie.moTa}
                            </p>
                            <div className="flex my-5">
                                <span className="w-40">Rated</span>
                                <span className="text-red-700">
                                    C16 - This movie is intended for viewers
                                    aged 16 years and over
                                </span>
                            </div>
                            <div className="flex my-5">
                                <span className="w-40">Director</span>
                                <span className="text-zinc-400">
                                    Gary Scott Thompson
                                </span>
                            </div>
                            <div className="flex my-5">
                                <span className="w-40">Release date</span>
                                <span className="text-zinc-400">
                                    {moment(movie.ngayChieuGioChieu).format(
                                        'DD-MM-YYYY'
                                    )}
                                </span>
                            </div>
                            <div className="flex my-5">
                                <span className="w-40">Running time</span>
                                <span className="text-zinc-400">120m</span>
                            </div>
                            <div className="flex mt-10">
                                <button
                                    className="text-zinc-50 border bg-orange-700 border-orange-700 duration-300 hover:bg-black hover:text-orange-700 hover:border-orange-700 px-5 py-2.5 rounded-md"
                                    onClick={() => {
                                        dispatch({
                                            type: SHOW_MODAL,
                                            payload: movie.trailer,
                                        });
                                    }}
                                >
                                    Watch trailer
                                </button>
                                <a href="#ticketPlace">
                                    <button className="ml-5 text-orange-700 border bg-black border-orange-700 duration-300 hover:bg-orange-700 hover:text-white hover:border-orange-700 px-9 py-2.5 rounded-md">
                                        Booking
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-40">
                    <h2
                        id="ticketPlace"
                        className="text-zinc-200 text-3xl text-center pb-5 border-b border-orange-700"
                    >
                        SELECT TICKET INFORMATION
                    </h2>
                    <div className="mt-20 w-[600px] mx-auto">
                        <Tabs
                            style={{ height: 500 }}
                            className="text-zinc-200"
                            tabPosition="left"
                            defaultActiveKey="1"
                            items={renderHeThongRap()}
                        />
                    </div>
                </div>
            </div>
        )
    );
};

export default DetailPage;