import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailSeries} from "../../redux/actions/detail/fetchDetailSeries";
import {fetchPopuparSeries} from "../../redux/actions/tv/fetchPopularSeries";
import {fetchTopRatedSeries} from "../../redux/actions/tv/fetchTopRatedSeries";
import {fetchAiringToday} from "../../redux/actions/tv/fetchAiringToday";
import {SeriesInfo} from "../../containers/seriesInfo/seriesInfo";
import {Carousel} from "../../components/carousel/Carousel";

export const Tv = () => {
    const dispatch = useDispatch();
    const series = useSelector(state => state.series)
    const [loading, setLoading] = useState(true);

    // // Load series
    useEffect( () => {
        const loadData = () => {
            if (!series.detailSeries.id)
                dispatch(fetchDetailSeries())
            dispatch(fetchPopuparSeries())
            dispatch(fetchTopRatedSeries())
            dispatch(fetchAiringToday())
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, series.detailSeries.id])

    return(
        <React.Fragment>
            {/*
                    Seriies
            */}
            <div className='mdb-seriesInfo-container'>
                <SeriesInfo
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
            <Carousel data={series.series.results} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>
            <Carousel data={series.topRatedSeries.results} path={'topRatedSeries'} title={'Top Rated Series'} category={'tv'}/>
        </React.Fragment>
    )
}
