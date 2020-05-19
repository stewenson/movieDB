import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/MovieInfo.scss';
import {TitleDate} from "../../components/TitleDate/TitleDate";
import Genres from "../genres/genres";
import {ReadMore} from "../../styles/LinkStyles";
import Grid from "@material-ui/core/Grid";

export const MovieInfo = (props) => {
    let imageURL;
    if (props.image)
         imageURL = `http://image.tmdb.org/t/p/original/` + props.image;

    return (
        <div className="mdb-content"
             style={{ backgroundImage: imageURL ?
                     `linear-gradient(to right, rgba(0, 0, 0, 1)
                        30%,
                        rgba(0, 0, 0, 0)),
                        url(${imageURL})` : '' }}
        >
            <div className='mdb-content-description'>
                <h1>{props.title}</h1>
                <Grid container spacing={1}>
                    <Grid item>
                        <h2>
                            {props.release_date ? TitleDate(props.release_date) : ''}
                        </h2>
                    </Grid>
                    <Grid item>
                        <h2>
                            - {props.vote_average}/10
                        </h2>
                    </Grid>
                    <Grid item>
                        <h2>
                            - {props.runtime} min
                        </h2>
                    </Grid>
                </Grid>
                <Genres genres={props.genres}/>
                <p>{props.overview ? props.overview.slice(0, 400) +'...' : ''}</p>
                <div className='mdb-content-buttons'>
                    <Link style={{ textDecoration: 'none' }}
                          to={{pathname: `/tmdbapi/${props.path ? props.path : 'popularMovies'}/detail/${props.movieType ? props.movieType : 'movie'}/${props.title}/${props.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                        <ReadMore>
                            ...Read more
                        </ReadMore>
                    </Link>
                </div>
            </div>
        </div>
    )
}