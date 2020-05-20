import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetail} from "../../redux/actions/detail/fetchDetail";
import {fetchPopularMovies} from "../../redux/actions/movies/fetchPopularMovies";
import {fetchTopRated} from "../../redux/actions/movies/fetchTopRated";
import {fetchUpcoming} from "../../redux/actions/movies/fetchUpcoming";
import {MovieInfo} from "../../containers/movieInfo/movieInfo";
import {Carousel} from "../../components/carousel/Carousel";
import './movie.scss';

export const Movie = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const [loading, setLoading] = useState(true);

    // Load movies
    useEffect( () => {
        const loadData = () => {
            if (!movies.detail.id)
                dispatch(fetchDetail())
            dispatch(fetchPopularMovies())
            dispatch(fetchTopRated())
            dispatch(fetchUpcoming())
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, movies.detail.id])
    console.log(movies.detail)

    return(
        <React.Fragment>
                {/*  Movies   */}
            <div className='mdb-movie-container'>
                <MovieInfo
                    id={movies.detail.id}
                    image={movies.detail.backdrop_path}
                    title={movies.detail.original_title}
                    overview={movies.detail.overview}
                    tagline={movies.detail.tagline}
                    release_date={movies.detail.release_date}
                    genres={movies.detail.genres}
                    path={movies.path}
                    movieType={movies.movieType}
                    vote_average={movies.detail.vote_average}
                    runtime={movies.detail.runtime}
                />
            </div>
                <Carousel data={movies.topRated.results} path={'topRated'} title={'Top Rated Movies'} category={'movie'}/>
                <Carousel data={movies.movies.results} path={'popularMovie'} title={'Popular Movies'} category={'movie'}/>
        </React.Fragment>
    )
}
