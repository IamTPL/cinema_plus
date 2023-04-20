import React, { useEffect, useState } from 'react';
import { movieServ } from '../../services/movieService';

const TicketDetail = ({ id }) => {
    const [detailFilm, setDeatailFilm] = useState();

    useEffect(() => {
        movieServ
            .getDetailTicket(id)
            .then((res) => {
                console.log(res.data.content);
                setDeatailFilm(res.data.content.thongTinPhim);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="my-28 px-16 w-full text-zinc-200 space-y-5">
            <h1 className="text-center text-orange-700 text-2xl">0VND</h1>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Theater</span>
                <span>abc</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Address</span>
                <span>abc</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Cinema</span>
                <span>abc</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Time</span>
                <span>abc</span>
            </div>
            <div className="flex justify-between border-b border-zinc-600 py-3">
                <span>Movie</span>
                <span>abc</span>
            </div>
            <div className="flex justify-between">
                <span>Seat</span>
                <span>abc</span>
            </div>
            <button className=" text-zinc-100 border bg-orange-700 border-orange-700 duration-300 hover:bg-black hover:text-orange-700  w-full py-2.5 rounded-md">
                Payment
            </button>
        </div>
    );
};

export default TicketDetail;
