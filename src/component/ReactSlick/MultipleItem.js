import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick.css';
import CardMovie from '../../Page/HomePage/ListMovie/CardMovie';

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow slick-prev"
            onClick={onClick}
            style={{
                fontSize: '40px',
                color: '#aaa',
                transform: 'translateX(-10px)',
            }}
        >
            <i className="fas fa-angle-left"></i>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="slick-arrow slick-next"
            onClick={onClick}
            style={{ fontSize: '40px', color: '#aaa' }}
        >
            <i className="fas fa-angle-right"></i>
        </div>
    );
};

export default class MultipleItems extends Component {
    render() {
        const renderFilm = () => {
            return this.props.movies?.map((item, index) => {
                // if (item.trailer.includes('/watch?v=')) {
                //     item.trailer = item.trailer.replace('/watch?v=', '/embed/');
                // }
                return <CardMovie movie={item} key={index}></CardMovie>;
            });
        };
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            className: 'center variable-width',
            centerPadding: '60px',
            style: { color: 'white', maxWidth: '80%' },
            autoplay: true,
            centerMode: true,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    },
                },
            ],
        };
        return (
            <div className="multipleItem flex justify-center">
                <Slider {...settings}>{renderFilm()}</Slider>
            </div>
        );
    }
}
