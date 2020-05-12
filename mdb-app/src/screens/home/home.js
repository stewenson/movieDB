import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularMovies} from "../../redux/actions/fetchPopularMovies";
import {Carousel} from "../../components/carousel/Carousel";
import '../../styles/Home.scss';
import {MovieInfo} from "../../containers/movieInfo/movieInfo";
import {fetchPopuparSeries} from "../../redux/actions/fetchPopularSeries";
import { getVideo} from "../../redux/actions/fetchVideo";
import {fetchDetail} from "../../redux/actions/fetchDetail";

export default function Home() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.movies);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadData = () => {
            if (!data.detail.id)
                dispatch(fetchDetail())
            dispatch(fetchPopularMovies())
            dispatch(fetchPopuparSeries())
            if (data.detail.id)
                dispatch(getVideo(data.detail.id, data.movieType ? data.movieType : 'movie'))
            setLoading(false);
        };
        loadData();
    }, [loading, dispatch, data.detail.id, data.movieType])

    console.log(data.detail)
    return (
        <React.Fragment>
            <div>
                <MovieInfo
                    videos={data.video}
                    id={data.detail.id}
                    image={data.detail.backdrop_path}
                    name={data.detail.name}
                    title={data.detail.original_title}
                    overview={data.detail.overview}
                    release_date={data.detail.release_date}
                    first_air_date={data.detail.first_air_date}
                    last_air_date={data.detail.last_air_date}
                    genres={data.detail.genres}
                    path={data.path}
                    movieType={data.movieType}
                />

            </div>
            <Container maxWidth='xl' className='mdb-carousels'>
                <Carousel data={data.movies.results} path={'popularMovie'} title={'Popular Movies'} category={'movie'}/>
                <Carousel data={data.series.results} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>
                {/*<Carousel ddata={data.documentary.results} path={'popularMovie'} title={'Popular Family Movies'} marginTop={'3%'} category={'movie'}/>/>*/}
                {/*<Carousel data={dataSeries} path={'popularSeries'} title={'Popular Series'} category={'tv'}/>*/}
                {/*<Carousel data={dataFamily} path={'popularMovie'} title={'Popular Family Movies'} marginTop={'3%'} category={'movie'}/>*/}
                {/*<Carousel data={dataDocument} path={'popularDocument'} title={'Popular Documentary Movies'} marginTop={'3%'} category={'movie'}/>*/}
            </Container>
        </React.Fragment>
    )
}