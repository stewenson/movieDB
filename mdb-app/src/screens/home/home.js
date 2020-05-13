import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularMovies} from "../../redux/actions/fetchPopularMovies";
import {Carousel} from "../../components/carousel/Carousel";
import '../../styles/Home.scss';
import {MovieInfo} from "../../containers/movieInfo/movieInfo";
import {fetchPopuparSeries} from "../../redux/actions/fetchPopularSeries";
import { getVideo} from "../../redux/actions/fetchVideo";
import {fetchDetail} from "../../redux/actions/fetchDetail";
import {fetchTopRated} from "../../redux/actions/fetchTopRated";
import {fetchUpcoming} from "../../redux/actions/fetchUpcoming";
import {SeriesInfo} from "../../containers/seriesInfo/movieInfo";
import {fetchDetailSeries} from "../../redux/actions/fetchDetailSeries";

export default function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadData = () => {
            if (!data.detail.id)
                dispatch(fetchDetail())
            if (!data.detailSeries.id)
                dispatch(fetchDetailSeries())
            dispatch(fetchPopularMovies())
            dispatch(fetchPopuparSeries())
            dispatch(fetchTopRated())
            dispatch(fetchUpcoming())
            if (data.detail.id)
                dispatch(getVideo(data.detail.id, data.movieType ? data.movieType : 'movie'))
            if (data.detailSeries.id)
                dispatch(getVideo(data.detailSeries.id, data.seriesType ? data.seriesType : 'tv'))

            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, data.detail.id, data.movieType, data.detailSeries.id, data.seriesType])

    // console.log(data)
    return (
        <React.Fragment>
            <div>
                <MovieInfo
                    videos={data.video}
                    id={data.detail.id}
                    image={data.detail.backdrop_path}
                    title={data.detail.original_title}
                    overview={data.detail.overview}
                    release_date={data.detail.release_date}
                    genres={data.detail.genres}
                    path={data.path}
                    movieType={data.movieType}
                />
            </div>
                <Carousel data={data.upcoming.results} path={'upcoming'} title={'Upcoming Movies'} category={'movie'}/>
                <Carousel data={data.topRated.results} path={'topRated'} title={'Top Rated Movies'} category={'movie'}/>
                <Carousel data={data.movies.results} path={'popularMovie'} title={'Popular Movies'} category={'movie'}/>

            <div>
                <SeriesInfo
                    videos={data.video}
                    id={data.detailSeries.id}
                    image={data.detailSeries.backdrop_path}
                    name={data.detailSeries.name}
                    overview={data.detailSeries.overview}
                    first_air_date={data.detailSeries.first_air_date}
                    last_air_date={data.detailSeries.last_air_date}
                    genres={data.detailSeries.genres}
                    seriesPath={data.seriesPath}
                    seriesType={data.seriesType}
                />
            </div>
                <Carousel data={data.series.results} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>
                {/*<Carousel ddata={data.documentary.results} path={'popularMovie'} title={'Popular Family Movies'} marginTop={'3%'} category={'movie'}/>/>*/}
                {/*<Carousel data={dataSeries} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>*/}
                {/*<Carousel data={dataFamily} path={'popularMovie'} title={'Popular Family Movies'} marginTop={'3%'} category={'movie'}/>*/}
                {/*<Carousel data={dataDocument} path={'popularDocument'} title={'Popular Documentary Movies'} marginTop={'3%'} category={'movie'}/>*/}
        </React.Fragment>
    )
}