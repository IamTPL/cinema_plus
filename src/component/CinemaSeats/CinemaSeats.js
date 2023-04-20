import React, { useEffect, useState } from 'react';
import './CanimaSeatsStyle.css';
import { movieServ } from '../../services/movieService';
import { useDispatch } from 'react-redux';

const CinemaSeats = ({ id }) => {
    const [seats, setSeats] = useState();

    let dispatch = useDispatch();

    useEffect(() => {
        movieServ
            .getDetailTicket(id)
            .then((res) => {
                console.log(res.data.content);
                setSeats(res.data.content.danhSachGhe);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleChecked = (seat) => {
        let newSeats = [...seats];
        let index = newSeats.findIndex((i) => i.maGhe === seat.maGhe);
        newSeats[index].isChecked = !newSeats[index].isChecked;
        setSeats(newSeats);
    };

    const renderSeats = () => {
        return seats.map((seat, index) => {
            let seatClass = 'standard';
            if (seat.loaiGhe === 'Vip') {
                seatClass = 'vip';
            }
            if (seat.daDat) {
                seatClass = 'unavailable';
            } else if (seat?.isChecked) {
                seatClass = 'checked';
            } else {
                seat.isChecked = false;
            }

            return (
                <span
                    key={index}
                    className={`${seatClass}`}
                    onClick={() => {
                        handleChecked(seat);
                    }}
                >
                    <i className="fa-solid fa-couch text-lg"></i>
                </span>
            );
        });
    };

    return (
        <div className="my-28 px-10 w-full flex justify-center flex-col items-center">
            <div className="screen">
                <div className="mt-5 text-zinc-200">screen</div>
            </div>
            <div className="seats mt-10 flex flex flex-wrap w-full gap-5 justify-center">
                {seats && renderSeats()}
            </div>
            <div className="flex mt-8 space-x-20 text-zinc-200">
                <div className="flex items-center">
                    <i className="fa-solid fa-couch text-2xl text-zinc-300 mr-5"></i>
                    <span>Unavailable</span>
                </div>
                <dir className="flex items-center">
                    <i className="fa-solid fa-couch text-2xl text-orange-600 mr-5"></i>
                    <span>Checked</span>
                </dir>
                <dir className="flex items-center">
                    <i className="fa-solid fa-couch text-2xl text-zinc-600 mr-5"></i>
                    <span>Standard</span>
                </dir>
                <dir className="flex items-center">
                    <i className="fa-solid fa-couch text-2xl text-yellow-300 text-opacity-60 mr-5"></i>
                    <span>VIP</span>
                </dir>
            </div>
        </div>
    );
};

export default CinemaSeats;
