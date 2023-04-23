import React, { useEffect, useState } from 'react';
import './AdsAppStyle.css';
import iphone from '../../../assets/img/phone.png';
import phone_banner1 from '../../../assets/img/phone_banner1.jpg';
import phone_banner2 from '../../../assets/img/phone_banner2.jpg';
import phone_banner3 from '../../../assets/img/phone_banner3.jpg';
import phone_banner4 from '../../../assets/img/phone_banner4.jpg';
import phone_banner5 from '../../../assets/img/phone_banner5.jpg';
const AdsApp = () => {
    const [urlImage, setUrlImage] = useState(phone_banner1);

    const changeUrlImage = () => {
        const rndInt = Math.floor(Math.random() * 5) + 1;
        switch (rndInt) {
            case 2:
                setUrlImage(phone_banner2);
                break;
            case 3:
                setUrlImage(phone_banner3);
                break;
            case 4:
                setUrlImage(phone_banner4);
                break;
            case 5:
                setUrlImage(phone_banner5);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const setChange = setInterval(changeUrlImage, 2000);
        return () => {
            clearInterval(setChange);
        };
    }, []);

    return (
        <div className="adsApp py-10 md:py-5 mt-20 sm:mt-10">
            <div className="flex md:flex-wrap">
                <div className="content w-1/2 md:w-full mx-auto text-zinc-200 pl-60 md:px-20 sm:px-10">
                    <h2 className=" text-3xl font-bold mt-20 leading-[70px] md:leading-[40px] md:text-2xl sm:text-lg">
                        Ứng dụng tiện lợi dành cho người yêu điện ảnh
                    </h2>
                    <p className="my-10 md:my-5 sm:text-sm">
                        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm
                        điểm rạp và đổi quà hấp dẫn.
                    </p>
                    <button
                        type="button"
                        className="text-base md:text-sm sm:text-xs text-zinc-100 bg-orange-700 border border-orange-700 duration-200 hover:border-orange-700 hover:bg-black hover:text-orange-700  font-bold rounded-lg px-10 py-3 mr-2 mb-2 min-w-[140px]"
                    >
                        DOWNLOAD
                    </button>
                </div>
                <div className="img_block w-1/2 my-auto md:w-fit relative ml-32 md:mx-auto md:mt-10">
                    <img className="w-[250px] h-[480px]" src={iphone} alt="" />
                    <img
                        className="w-[236px] h-[456px] absolute top-[12px] left-[7px] rounded-3xl"
                        src={urlImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AdsApp;
