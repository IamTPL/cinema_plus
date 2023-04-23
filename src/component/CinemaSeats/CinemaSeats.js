import React, { useEffect, useState } from 'react';
import './CanimaSeatsStyle.css';
import { movieServ } from '../../services/movieService';
import { useDispatch } from 'react-redux';
import { ADD_SEAT } from '../../Page/redux/constant/paymentDetailConstants';

const CinemaSeats = ({ id }) => {
    const [seats, setSeats] = useState();

    let dispatch = useDispatch();

    useEffect(() => {
        movieServ
            .getDetailTicket(id)
            .then((res) => {
                setSeats(res.data.content.danhSachGhe);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleChecked = (seat) => {
        if (!seat.daDat) {
            dispatch({ type: ADD_SEAT, payload: seat });
        }

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
                    <i className="fa-solid fa-couch text-lg md:text-base"></i>
                </span>
            );
        });
    };

    return (
        <div className="my-28 px-10 md:px-5 sm:px-2 w-full flex justify-center flex-col items-center">
            <div className="screen">
                <div className="mt-5 text-zinc-200">screen</div>
            </div>
            <div className="seats mt-10 flex flex-wrap w-full gap-5 md:gap-4 sm:gap-3 justify-center">
                {seats && renderSeats()}
            </div>
            <div className="flex justify-center sm:flex-wrap mt-8 space-x-5 text-zinc-200">
                <div className="flex items-center">
                    <i className="fa-solid fa-couch text-2xl md:text-xl sm:text-base text-zinc-300 mr-5"></i>
                    <span className="md:text-sm">Unavailable</span>
                </div>
                <dir className="flex items-center sm:p-0">
                    <i className="fa-solid fa-couch text-2xl md:text-xl sm:text-base text-orange-600 mr-5"></i>
                    <span className="md:text-sm">Checked</span>
                </dir>
                <dir className="flex items-center sm:p-0">
                    <i className="fa-solid fa-couch text-2xl md:text-xl sm:text-base text-zinc-600 mr-5"></i>
                    <span className="md:text-sm">Standard</span>
                </dir>
                <dir className="flex items-center sm:p-0">
                    <i className="fa-solid fa-couch text-2xl md:text-xl sm:text-base text-yellow-300 text-opacity-60 mr-5"></i>
                    <span className="md:text-sm">VIP</span>
                </dir>
            </div>
        </div>
    );
};

export default CinemaSeats;
