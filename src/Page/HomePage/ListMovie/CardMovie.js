import React from 'react';
import { Card } from 'antd';
import './CardStyle.css';
import { useDispatch } from 'react-redux';
import { SHOW_MODAL } from '../../redux/constant/modalConstant';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;

export default function CardMovie({ movie }) {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="relative rounded-3xl overflow-hidden mx-2">
                <Card
                    className="bg-black border-none rounded-3xl overflow-hidden"
                    hoverable
                    style={{
                        margin: '0',
                    }}
                    cover={
                        <img
                            className="h-[400px] object-cover object-top"
                            alt="example"
                            src={movie.hinhAnh}
                        />
                    }
                ></Card>
                <div className="overlayCard absolute inset-0 opacity-0">
                    <div className="absolute bottom-0 flex w-full flex-col items-center justify-center mb-5">
                        <h2 className="text-zinc-100 font-bold mb-5 ">
                            {movie.tenPhim}
                        </h2>
                        <button
                            type="button"
                            className="text-black bg-orange-700 duration-300  hover:bg-black hover:text-orange-700 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 min-w-[140px]"
                            onClick={() => {
                                dispatch({
                                    type: SHOW_MODAL,
                                    payload: movie.trailer,
                                });
                            }}
                        >
                            Watch trailer
                        </button>
                        {!movie.sapChieu && (
                            <NavLink to={`/detail/${movie.maPhim}`}>
                                <button
                                    type="button"
                                    className="text-orange-700 bg-black border border-orange-700 duration-300 hover:border-black hover:text-white hover:bg-orange-700 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 min-w-[140px]"
                                >
                                    Booking
                                </button>
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
