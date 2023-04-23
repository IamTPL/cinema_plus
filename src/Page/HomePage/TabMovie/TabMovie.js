import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { movieServ } from '../../../services/movieService';
import FilmTab from './FilmTab';

const TabMovie = () => {
    const [dataMovie, setDataMovie] = useState(null);

    useEffect(() => {
        movieServ
            .getMovieByTheater()
            .then((res) => {
                setDataMovie(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const renderHeThongRap = () => {
        return (
            dataMovie &&
            dataMovie.map((heThongRap, index) => {
                const renderCumRap = () => {
                    return heThongRap.lstCumRap.map((cumRap, index) => {
                        return {
                            label: (
                                <div className="w-52 text-left">
                                    <div className="text-lg font-bold text-zinc-200 ">
                                        {cumRap.tenCumRap}
                                    </div>
                                    <div className="text-zinc-400">
                                        {cumRap.diaChi}
                                    </div>
                                    <span className="text-red-800">
                                        [chi tiết]
                                    </span>
                                </div>
                            ),
                            key: index,
                            children: (
                                <FilmTab
                                    listFilm={cumRap.danhSachPhim}
                                ></FilmTab>
                            ),
                        };
                    });
                };
                return {
                    label: (
                        <img className="w-16" src={heThongRap.logo} alt="" />
                    ),
                    key: index,
                    children: (
                        <Tabs
                            style={{ height: 600 }}
                            tabPosition="left"
                            defaultActiveKey="1"
                            items={renderCumRap()}
                        />
                    ),
                };
            })
        );
    };

    return (
        <div className="md:hidden block max-w-4xl mx-auto mt-20 border border-zinc-600">
            <Tabs
                style={{ height: 600 }}
                className="bg-zinc-800"
                tabPosition="left"
                defaultActiveKey="1"
                items={renderHeThongRap()}
            />
        </div>
    );
};

export default TabMovie;
