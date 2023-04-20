import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import './bannerStyle.css';
import { movieServ } from '../../services/movieService';
import { SHOW_MODAL } from '../../Page/redux/constant/modalConstant';
import { useDispatch } from 'react-redux';

const contentStyle = {
    height: '600px',
    color: '#fff',
    textAlign: 'center',
};

const Banner = () => {
    const [bannerData, setBannerData] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        movieServ
            .getBanners()
            .then((res) => {
                setBannerData(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="banner mt-[65px]">
            <Carousel autoplay>
                {bannerData &&
                    bannerData.map((banner, index) => {
                        let urlTrailerBanner =
                            'https://www.youtube.com/embed/uoKSzOuPcfY';
                        switch (banner.maBanner) {
                            case 2: {
                                urlTrailerBanner =
                                    'https://www.youtube.com/embed/-iCBapAoAsM';
                                break;
                            }
                            case 3: {
                                urlTrailerBanner =
                                    'https://www.youtube.com/embed/Eu9G8nO5-Ug';
                                break;
                            }
                            default:
                                break;
                        }
                        return (
                            <div key={index} className="">
                                <div className="flex justify-center items-center text-center">
                                    <div className="w-fit relative">
                                        <img
                                            style={contentStyle}
                                            src={banner.hinhAnh}
                                            alt=""
                                            className="object-contain"
                                        />
                                        <button
                                            type="button"
                                            className="text-zinc-50 text-lg font-bold border bg-orange-700 border-orange-700 duration-300 hover:bg-black hover:text-orange-700 hover:border-orange-700 px-5 py-2.5 absolute bottom-20 left-16 rounded-3xl"
                                            onClick={() => {
                                                dispatch({
                                                    type: SHOW_MODAL,
                                                    payload: urlTrailerBanner,
                                                });
                                            }}
                                        >
                                            Watch the trailer
                                            <i className="fa-solid fa-play ml-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
};

export default Banner;
