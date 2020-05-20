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
import Genres from "../../containers/genres/genres";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';

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
    // let posterURL;
    if (loadData.backdrop_path) {
        imageURL = `http://image.tmdb.org/t/p/original/` + loadData.backdrop_path;
        // posterURL = `http://image.tmdb.org/t/p/w300` + loadData.poster_path
    }

    if (loading) return null;

    let crewLength;
    if (credits.credits.crew)
        crewLength = credits.credits.crew.length;

    let castLength;
    if (credits.credits.cast)
        castLength = credits.credits.cast.length;

    console.log(loadData)
    return (
        <React.Fragment>
            <div className="mdb-detail"
                 style={{ backgroundImage: imageURL ?
                         `linear-gradient(to right, rgba(0, 0, 0, 0.75)
                         100%,
                         rgba(0, 0, 0, 0)),
                         url(${imageURL})` : '' }}
            >
                <Container maxWidth='xl'>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6} lg={5}>
                            <div className='mdb-detail-content'>
                                <h1>{loadData.name ? loadData.name : loadData.title}</h1>
                                {/*        Basix Info           */}
                                <Grid container spacing={3} justify="center" className='mdb-detail-basicInfo'>
                                    <Grid item className='mdb-detail-vote-average'>
                                        <h5>{loadData.release_date} ({loadData.original_language})</h5>
                                    </Grid>
                                    <Grid item className='mdb-detail-vote-average'>
                                        <StarIcon /> <h5>{loadData.vote_average}</h5>
                                    </Grid>
                                    <Grid item>
                                        <Genres genres={loadData.genres}/>
                                    </Grid>
                                </Grid>

                                {/*     Box Office      */}
                                <Grid container spacing={3} justify="center" className='mdb-detail-boxOffice'>
                                    <Grid item>
                                        <h4>Budget {loadData.budget}$ (estimated)</h4>
                                    </Grid>
                                    <Grid item>
                                        <h4>Revenue {loadData.revenue}$</h4>
                                    </Grid>
                                    <Grid item>
                                        <h4>Runtime {loadData.runtime} min</h4>
                                    </Grid>
                                    <Grid item>
                                        <h4> </h4>
                                    </Grid>
                                </Grid>


                                <h3>{loadData.tagline}</h3>
                                <p>{loadData.overview ? loadData.overview: ''}</p>
                                <Trailers  videos={videos}/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={7}>
                            <div className='mdb-detail-credits'>
                                <h2>Cast & Crews</h2>
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
                            <div className='mdb-detail-credits'>
                                <h2>Recommendations</h2>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

                {/*<div className='mdb-detail-content'>*/}
                {/*    <h1>{loadData.name ? loadData.name : loadData.title}</h1>*/}
                {/*    <Genres genres={loadData.genres}/>*/}
                {/*    <h2>{loadData.tagline}</h2>*/}
                {/*    <p>{loadData.overview ? loadData.overview: ''}</p>*/}
                {/*    <Trailers  videos={videos}/>*/}
                {/*    {castLength > 0 ?*/}
                {/*        <div className='mdb-detail-cast'>*/}
                {/*            <CreditsCaousel casts={credits.credits.cast}*/}
                {/*                            title={'Casts'}/>*/}
                {/*        </div>*/}
                {/*        :*/}
                {/*        ''*/}
                {/*    }*/}

                {/*    {crewLength > 0 ?*/}
                {/*        <div className='mdb-detail-crew'>*/}
                {/*            <CreditsCaousel casts={credits.credits.crew}*/}
                {/*                            title={'Crew'}/>*/}
                {/*        </div>*/}
                {/*        :*/}
                {/*        ''*/}
                {/*    }*/}

                {/*</div>*/}
            </div>
        </React.Fragment>
    )
}