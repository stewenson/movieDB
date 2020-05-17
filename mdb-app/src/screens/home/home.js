import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularMovies} from "../../redux/actions/movies/fetchPopularMovies";
import {Carousel} from "../../components/carousel/Carousel";
import '../../styles/Home.scss';
import {MovieInfo} from "../../containers/movieInfo/movieInfo";
import {fetchPopuparSeries} from "../../redux/actions/tv/fetchPopularSeries";
import {fetchVideoMovie} from "../../redux/actions/movies/fetchVideoMovie";
import {fetchDetail} from "../../redux/actions/detail/fetchDetail";
import {fetchTopRated} from "../../redux/actions/movies/fetchTopRated";
import {fetchUpcoming} from "../../redux/actions/movies/fetchUpcoming";
import {SeriesInfo} from "../../containers/seriesInfo/seriesInfo";
import {fetchDetailSeries} from "../../redux/actions/detail/fetchDetailSeries";
import {fetchVideoSeries} from "../../redux/actions/tv/fetchVideoSeries";
import {fetchTopRatedSeries} from "../../redux/actions/tv/fetchTopRatedSeries";
import {fetchAiringToday} from "../../redux/actions/tv/fetchAiringToday";

export default function Home() {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const series = useSelector(state => state.series)
    const [loading, setLoading] = useState(true);

    // Load movies
    useEffect( () => {
        const loadData = () => {
            if (!movies.detail.id)
                dispatch(fetchDetail())
            dispatch(fetchPopularMovies())
            dispatch(fetchTopRated())
            dispatch(fetchUpcoming())
            if (movies.detail.id)
                dispatch(fetchVideoMovie(movies.detail.id))
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, movies.detail.id])

    // // Load series
    useEffect( () => {
        const loadData = () => {
            if (!series.detailSeries.id)
                dispatch(fetchDetailSeries())
            dispatch(fetchPopuparSeries())
            dispatch(fetchTopRatedSeries())
            dispatch(fetchAiringToday())
            if (series.detailSeries.id)
                dispatch(fetchVideoSeries(series.detailSeries.id))
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, series.detailSeries.id])

    return (
        <React.Fragment>
            {/*
                Movies
            */}
            <div className='mdb-movieInfo-container'>
                <MovieInfo
                    videos={movies.videoMovies}
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
                <Carousel data={movies.upcoming.results} path={'upcoming'} title={'Upcoming Movies'} category={'movie'}/>
                <Carousel data={movies.topRated.results} path={'topRated'} title={'Top Rated Movies'} category={'movie'}/>
                <Carousel data={movies.movies.results} path={'popularMovie'} title={'Popular Movies'} category={'movie'}/>

            {/*
                    Seriies
            */}
            <div className='mdb-seriesInfo-container'>
                <SeriesInfo
                    videos={series.videoSeries}
                    id={series.detailSeries.id}
                    image={series.detailSeries.backdrop_path}
                    name={series.detailSeries.name}
                    overview={series.detailSeries.overview}
                    first_air_date={series.detailSeries.first_air_date}
                    last_air_date={series.detailSeries.last_air_date}
                    genres={series.detailSeries.genres}
                    vote_average={series.detailSeries.vote_average}
                    episode_run_time={series.detailSeries.episode_run_time}
                    number_of_seasons={series.detailSeries.number_of_seasons}
                    number_of_episodes={series.detailSeries.number_of_episodes}
                    seriesPath={series.seriesPath}
                    seriesType={series.seriesType}
                />
            </div>
                <Carousel data={series.airToday.results} path={'airToday'} title={'TV shows that are airing today'} category={'tv'}/>
                <Carousel data={series.series.results} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>
                <Carousel data={series.topRatedSeries.results} path={'topRatedSeries'} title={'Top Rated Series'} category={'tv'}/>
        </React.Fragment>
    )
}