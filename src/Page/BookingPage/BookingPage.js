import React, { useEffect, useState } from 'react';
import CinemaSeats from '../../component/CinemaSeats/CinemaSeats';
import TicketDetail from '../../component/TicketDetail/TicketDetail';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams();

    return (
        <div className="flex md:block">
            <div className="w-[65%] md:w-full">
                <CinemaSeats id={id}></CinemaSeats>
            </div>
            <div className="w-[35%] md:w-full">
                <TicketDetail id={id}></TicketDetail>
            </div>
        </div>
    );
};

export default BookingPage;
