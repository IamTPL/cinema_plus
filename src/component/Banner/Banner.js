import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import './bannerStyle.css';
import { movieServ } from '../../services/movieService';
import { SHOW_MODAL } from '../../Page/redux/constant/modalConstant';
import { useDispatch } from 'react-redux';

const contentStyle = {
    // height: '600px',
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
        <div className="banner mt-[65px] md:mt-16">
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
                                            className="object-cover h-[600px] md:h-[300px] sm:h-[200px]"
                                        />
                                        <button
                                            type="button"
                                            className="text-zinc-50 text-lg md:text-base sm:text-xs font-bold border bg-orange-700 border-orange-700 duration-300 hover:bg-black hover:text-orange-700 hover:border-orange-700 px-5 sm:px-2.5 py-2.5 sm:py-2 absolute bottom-20 md:bottom-12 sm:bottom-8 left-16 sm:left-8 rounded-3xl"
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
