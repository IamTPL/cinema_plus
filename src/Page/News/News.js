import React from 'react';
import { Tabs } from 'antd';
import discountImg from '../../assets/img/DISCOUNT.jpg';
import eventImg1 from '../../assets/img/event1.jpg';
import eventImg2 from '../../assets/img/event2.png';
import eventImg3 from '../../assets/img/event3.jpg';
import eventImg4 from '../../assets/img/event4.jpg';

import './NewsStyle.css';
const items = [
    {
        key: '1',
        label: `NEWS`,
        children: (
            <div className="grid grid-cols-6 grid-rows-2 gap-8">
                <div className="col-start-1 col-end-4 cursor-pointer">
                    <img
                        className="w-full rounded-md"
                        src="https://images.bauerhosting.com/empire/2023/04/russos-zack-snyder.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top"
                        alt=""
                    />
                    <h3 className="text-zinc-200 text-lg font-medium mt-3">
                        The Russo Brothers Interview Zack Snyder About Justice
                        League In Pizza Film School Episode
                    </h3>
                    <p className="text-zinc-400 mt-4 mb-1">
                        Recently, we heard James Gunn talking about the
                        possibility of a DC and Marvel...
                    </p>
                    <div>
                        <span className="text-orange-700">Movies</span>
                        <span className="text-zinc-500 text-lg mx-2">|</span>
                        <span className="text-zinc-500">16 hours ago</span>
                    </div>
                </div>

                <div className="col-start-4 col-end-7 cursor-pointer">
                    <img
                        className="w-full rounded-md"
                        src="https://images.bauerhosting.com/empire/2023/04/boogeyman-main.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top"
                        alt=""
                    />
                    <h3 className="text-zinc-200 text-lg font-medium mt-3">
                        New Trailer For The Boogeyman: The Horror Is Not All In
                        Their Head
                    </h3>
                    <p className="text-zinc-400 mt-4 mb-1">
                        You might have seen our recent exclusive interview with
                        Host and now The...
                    </p>
                    <div>
                        <span className="text-orange-700">Movies</span>
                        <span className="text-zinc-500 text-lg mx-2">|</span>
                        <span className="text-zinc-500">23 hours ago</span>
                    </div>
                </div>

                <div className="col-start-1 col-end-3 cursor-pointer">
                    <img
                        className="w-full rounded-md"
                        src="https://images.bauerhosting.com/empire/2023/04/mia-goth.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top"
                        alt=""
                    />
                    <h3 className="text-zinc-200 text-lg font-medium mt-3">
                        Mia Goth Joins Marvel’s Blade
                    </h3>
                    <p className="text-zinc-400 mt-4 mb-1">
                        Mia Goth is having quite the moment. Between the success
                        of her character from...
                    </p>
                    <div>
                        <span className="text-orange-700">Movies</span>
                        <span className="text-zinc-500 text-lg mx-2">|</span>
                        <span className="text-zinc-500">18 04 2023</span>
                    </div>
                </div>

                <div className="col-start-3 col-end-5 cursor-pointer">
                    <img
                        className="w-full rounded-md"
                        src="https://images.bauerhosting.com/empire/2023/04/ethan-coen.jpg?q=80&auto=format&w=400&ar=16:9&fit=crop&crop=top"
                        alt=""
                    />
                    <h3 className="text-zinc-200 text-lg font-medium mt-3">
                        Ethan Coen Has A New Film Drive-Away Dolls, And It’s
                        Arriving Later This Year
                    </h3>
                    <p className="text-zinc-400 mt-4 mb-1">
                        For decades, the Coen Brothers were one of the most
                        consistently brilliant...
                    </p>
                    <div>
                        <span className="text-orange-700">Movies</span>
                        <span className="text-zinc-500 text-lg mx-2">|</span>
                        <span className="text-zinc-500">15 04 2023</span>
                    </div>
                </div>

                <div className="col-start-5 col-end-7 cursor-pointer">
                    <img
                        className="w-full rounded-md"
                        src="https://images.bauerhosting.com/empire/2023/04/hypnotic-main.jpg?q=80&auto=format&w=750&ar=16:9&fit=crop&crop=top"
                        alt=""
                    />
                    <h3 className="text-zinc-200 text-lg font-medium mt-3">
                        Ben Affleck’s having a good year so far, with Air
                        successful and his...
                    </h3>
                    <p className="text-zinc-400 mt-4 mb-1">
                        You might have seen our recent exclusive interview with
                        Host and now The...
                    </p>
                    <div>
                        <span className="text-orange-700">Movies</span>
                        <span className="text-zinc-500 text-lg mx-2">|</span>
                        <span className="text-zinc-500">13 04 2023</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        key: '2',
        label: `DISCOUNT`,
        children: (
            <div className="text-center">
                <h3 className="text-zinc-400 font-bold text-2xl mb-5">
                    * No discount available now. Please come back later.
                    <i className="fa-solid fa-face-sad-tear text-2xl ml-2"></i>
                    <i className="fa-solid fa-face-sad-tear text-2xl mx-2"></i>
                    <i className="fa-solid fa-face-sad-tear text-2xl"></i>
                </h3>
                <img
                    className="w-[500px] mx-auto"
                    src={discountImg}
                    alt="Discount Image"
                />
            </div>
        ),
    },
    {
        key: '3',
        label: `EVENT`,
        children: (
            <div className="flex space-x-3">
                <a
                    href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="rounded-md"
                        src={eventImg1}
                        alt="event image"
                    />
                </a>
                <a
                    href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="rounded-md"
                        src={eventImg2}
                        alt="event image"
                    />
                </a>
                <a
                    href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="rounded-md"
                        src={eventImg3}
                        alt="event image"
                    />
                </a>
                <a
                    href="https://apps.apple.com/vn/app/tix-đặt-vé-nhanh-nhất/id615186197"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="rounded-md w-60 h-52"
                        src={eventImg4}
                        alt="event image"
                    />
                </a>
            </div>
        ),
    },
];

const News = () => {
    return (
        <div className="news mt-20 container mx-auto lg:px-32">
            <Tabs defaultActiveKey="1" items={items} centered />
        </div>
    );
};

export default News;
