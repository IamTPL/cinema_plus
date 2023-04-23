import React, { useEffect, useState } from 'react';
import { movieServ } from '../../../services/movieService';
import { useDispatch } from 'react-redux';
import { OFF_LOADING, ON_LOADING } from '../../redux/constant/spinnerConstant';
import MultipleItems from '../../../component/ReactSlick/MultipleItem';

export default function ListMovieComingSoon() {
    const [movies, setMovies] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ON_LOADING });
        movieServ
            .getMovieList()
            .then((res) => {
                setMovies(res.data.content.filter((movie) => movie.sapChieu));
                dispatch({ type: OFF_LOADING });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: OFF_LOADING });
            });
    }, []);

    return (
        <div className="mt-20 sm:mt-10 relative">
            {/* {movies?.map((item, index) => {
                return <CardMovie movie={item} key={index}></CardMovie>;
            })} */}
            <h2
                className="text-2xl font-bold text-zinc-200 px-10 md:px-5 sm:px-1 mx-auto mb-10"
                style={{ userSelect: 'none' }}
            >
                Coming Soon
            </h2>
            <MultipleItems movies={movies}></MultipleItems>
        </div>
    );
}
