import React, { useEffect, useState } from 'react';
import { movieServ } from '../../../services/movieService';
import { useDispatch } from 'react-redux';
import { OFF_LOADING, ON_LOADING } from '../../redux/constant/spinnerConstant';
import MultipleItems from '../../../component/ReactSlick/MultipleItem';

export default function ListMovie() {
    const [movies, setMovies] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: ON_LOADING });
        movieServ
            .getMovieList()
            .then((res) => {
                setMovies(res.data.content.filter((movie) => !movie.sapChieu));
                dispatch({ type: OFF_LOADING });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: OFF_LOADING });
            });
    }, []);

    return (
        <div className="listMovie mt-20 sm:mt-10">
            {/* {movies?.map((item, index) => {
                return <CardMovie movie={item} key={index}></CardMovie>;
            })} */}
            <h2
                className="text-2xl font-bold text-zinc-200 container px-10 md:px-5 sm:px-1 mx-auto mb-10"
                style={{ userSelect: 'none' }}
            >
                Movie Selection
            </h2>
            <MultipleItems movies={movies}></MultipleItems>
        </div>
    );
}
