import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/MovieInfo.scss';
import {TitleDate} from "../../components/TitleDate/TitleDate";
import Genres from "../genres/genres";
import {ReadMore} from "../../styles/LinkStyles";
import Trailers from "../../components/Trailers/Trailers";
import Grid from "@material-ui/core/Grid";

export const MovieInfo = (props) => {
    let imageURL;
    if (props.image)
         imageURL = `http://image.tmdb.org/t/p/w1280/` + props.image;

    return (
        <React.Fragment>
            <div className="mdb-content">
                <div className="mdb-content-background">
                    <div className="mdb-content-background-shadow" />
                    <div
                        className="mdb-content-background-image"
                        style={{ backgroundImage: imageURL ? `url(${imageURL})` : '' }}
                    />
                </div>
                <div className="mdb-content-area">
                    <div className="mdb-content-area-container">
                        <div className="mdb-content-title">
                            {props.title}
                        </div>
                        <Grid container spacing={1} className="mdb-content-subtitle">
                            <Grid item>
                                <p>
                                    {props.release_date ? TitleDate(props.release_date) : ''}
                                </p>
                            </Grid>
                            <Grid item style={{ color: 'gold'}}>
                                <p>
                                    {props.vote_average}/10
                                </p>
                            </Grid>
                            <Grid item>
                                <p>
                                    {props.runtime} min
                                </p>
                            </Grid>
                        </Grid>
                        <div>
                            <Genres genres={props.genres}/>
                        </div>
                        <div className="mdb-content-description">
                            {props.tagline}
                        </div>
                        <div className="mdb-content-description">
                            {props.overview ? props.overview.slice(0, 500) +'...' : ''}
                        </div>
                        <div className='mdb-content-buttons'>
                            <Link style={{ textDecoration: 'none' }}
                                  to={{pathname: `/tmdbapi/${props.path ? props.path : 'popularMovies'}/detail/${props.movieType ? props.movieType : 'movie'}/${props.title}/${props.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                                <ReadMore>
                                    ...Read more
                                </ReadMore>
                            </Link>
                            <Trailers videos={props.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}