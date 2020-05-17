import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import '../../styles/DetailMovie.scss';
import {fetchDetail} from "../../redux/actions/detail/fetchDetail";
import {fetchDetailSeries} from "../../redux/actions/detail/fetchDetailSeries";
import {fetchCredits} from "../../redux/actions/detail/fetchCredits";
import {CreditsCaousel} from "../../components/creditsCarousel/creditsCarousel";
import {clearCredits} from "../../redux/actions/detail/clearCredits";

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
            }
            if (params.category === 'tv') {
                dispatch(fetchDetailSeries(params.id))
                dispatch(fetchCredits(params.category, params.id))
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
    if (params.category === 'movie')
        loadData = movies.detail
    if (params.category === 'tv')
        loadData = series.detailSeries

    let imageURL;
    if (loadData.backdrop_path)
        imageURL = `http://image.tmdb.org/t/p/w1280/` + loadData.backdrop_path;

    if (loading) return null;

    console.log(credits)

    return (
        <div className="mdb-detail">
            <div className="mdb-detail-background">
                <div className="mdb-detail-background-shadow" />
                <div
                    className="mdb-detail-background-image"
                    style={{ backgroundImage: imageURL ? `url(${imageURL})` : '' }}
                />
            </div>
            <div className="mdb-detail-area">
                <div className="mdb-detail-area-container">
                    <div className="mdb-detail-title">
                        {loadData.name ? loadData.name : loadData.title}
                    </div>
                    <div className="mdb-detail-subtitle">
                        {loadData.tagline}
                    </div>
                    {/*             Overview              */}
                    <div className="mdb-detail-description">
                        {loadData.overview ? loadData.overview: ''}
                    </div>
                    {/*             Credits Casts           */}
                    <div className='mdb-detail-cast'>
                        <CreditsCaousel casts={credits.credits.cast}
                                        title={'Casts'}
                        />
                    </div>
                    <div className='mdb-detail-cast'>
                        <CreditsCaousel casts={credits.credits.crew}
                                        title={'Crew'}
                        />
                    </div>
                    {/*<div className='mdb-detail-buttons'>*/}
                    {/*    /!*<Trailers videos={props.videos}/>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
        // <div>
        //     <h1>{loadData.name ? loadData.name : loadData.title}</h1>
        // </div>
    )
}