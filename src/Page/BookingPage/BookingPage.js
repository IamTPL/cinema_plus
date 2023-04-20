import React from 'react';
import CinemaSeats from '../../component/CinemaSeats/CinemaSeats';
import TicketDetail from '../../component/TicketDetail/TicketDetail';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams();

    return (
        <div className="flex">
            <div className="w-[65%]">
                <CinemaSeats id={id}></CinemaSeats>
            </div>
            <div className="w-[35%]">
                <TicketDetail id={id}></TicketDetail>
            </div>
        </div>
    );
};

export default BookingPage;
