import React from 'react';
import ListMovie from './ListMovie/ListMovie';
import TabMovie from './TabMovie/TabMovie';
import Banner from '../../component/Banner/Banner';
import ModalTrailer from '../../component/Modal/ModalTrailer';
import ListMovieComingSoon from './ListMovie/ListMovieComingSoon';
import AdsApp from './AdsApp/AdsApp';
import News from '../News/News';

export default function HomePage() {
    return (
        <div>
            <ModalTrailer></ModalTrailer>
            <Banner></Banner>
            <ListMovieComingSoon></ListMovieComingSoon>
            <ListMovie></ListMovie>
            <TabMovie></TabMovie>
            <News></News>
            <AdsApp></AdsApp>
        </div>
    );
}
