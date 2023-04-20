import moment from 'moment/moment';
import React from 'react';
import './TabMovieStyle.css';

const FilmTab = ({ listFilm }) => {
    return (
        <div className="filmTab overflow-y-auto" style={{ height: 600 }}>
            {listFilm.map((film, index) => {
                return (
                    <div key={index}>
                        <div className="flex">
                            <img
                                className="w-28 h-36 mr-5"
                                src={film.hinhAnh}
                                alt=""
                            />
                            <div className="flex flex-col">
                                <p className="font-extrabold text-lg mb-3 text-zinc-300 ">
                                    <span className="bg-orange-600 text-zinc-300  rounded-md px-1 mr-3">
                                        C18
                                    </span>
                                    {film.tenPhim}
                                </p>
                                <div className="flex flex-wrap gap-5 items-center">
                                    {film.lstLichChieuTheoPhim.map(
                                        (lich, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="text-orange-700 bg-zinc-400 border-2 border-zinc-600 px-3 py-1.5 rounded-md"
                                                >
                                                    {moment(
                                                        lich.ngayChieuGioChieu
                                                    ).format(
                                                        'DD-MM-YYYY ~ h:mm'
                                                    )}
                                                </span>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                    </div>
                );
            })}
        </div>
    );
};

export default FilmTab;
