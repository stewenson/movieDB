import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../styles/DetailMovie.scss';
import {fetchDetail} from "../../redux/actions/detail/fetchDetail";
import {fetchDetailSeries} from "../../redux/actions/detail/fetchDetailSeries";
import {fetchCredits} from "../../redux/actions/detail/fetchCredits";
import {CreditsCaousel} from "../../components/creditsCarousel/creditsCarousel";
import {clearCredits} from "../../redux/actions/detail/clearCredits";
import Trailers from "../../components/Trailers/Trailers";
import {fetchVideoMovie} from "../../redux/actions/movies/fetchVideoMovie";
import {fetchVideoSeries} from "../../redux/actions/tv/fetchVideoSeries";

export default function DetailMovie() {
    const params = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const series = useSelector(state => state.series);
    const credits = useSelector(state => state.credits);
    const [loading, setLoading] = useState(true);

    // Load Detail movies
    useEffect( () => {
        const loadData = () => {
            if (params.category === 'movie'){
                dispatch(fetchDetail(params.id))
                dispatch(fetchCredits(params.category, params.id))
                dispatch(fetchVideoMovie(params.id))
            }
            if (params.category === 'tv') {
                dispatch(fetchDetailSeries(params.id))
                dispatch(fetchCredits(params.category, params.id))
                dispatch(fetchVideoSeries(params.id))
            }
            setLoading(false);
        };
        loadData();
        return ()=> {
            dispatch(clearCredits());
            setLoading(true)
        }
    }, [loading, dispatch, params.id, params.category])

    let loadData;
    let videos;
    if (params.category === 'movie'){
        loadData = movies.detail;
        videos = movies.videoMovies;
    }
    if (params.category === 'tv'){
        loadData = series.detailSeries;
        videos = series.videoSeries;
    }

    let imageURL;
    if (loadData.backdrop_path)
        imageURL = `http://image.tmdb.org/t/p/original/` + loadData.backdrop_path;

    if (loading) return null;

    let crewLength;
    if (credits.credits.crew)
        crewLength = credits.credits.crew.length;

    let castLength;
    if (credits.credits.cast)
        castLength = credits.credits.cast.length;

    return (
        <React.Fragment>
            <div className="mdb-detail"
                 style={{ backgroundImage: imageURL ?
                         `linear-gradient(to right, rgba(0, 0, 0, 1)
                         30%,
                         rgba(0, 0, 0, 0)),
                         url(${imageURL})` : '' }}
            >
                <div className='mdb-detail-content'>
                    <h1>{loadData.name ? loadData.name : loadData.title}</h1>
                    <h2>{loadData.tagline}</h2>
                    <p>{loadData.overview ? loadData.overview: ''}</p>
                    <Trailers  videos={videos}/>
                    {castLength > 0 ?
                        <div className='mdb-detail-cast'>
                            <CreditsCaousel casts={credits.credits.cast}
                                            title={'Casts'}/>
                        </div>
                        :
                        ''
                    }

                    {crewLength > 0 ?
                        <div className='mdb-detail-crew'>
                            <CreditsCaousel casts={credits.credits.crew}
                                            title={'Crew'}/>
                        </div>
                        :
                        ''
                    }

                </div>
            </div>
        </React.Fragment>
    )
}