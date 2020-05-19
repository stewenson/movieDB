import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/MovieInfo.scss';
import {TitleDate} from "../../components/TitleDate/TitleDate";
import Genres from "../genres/genres";
import {ReadMore} from "../../styles/LinkStyles";
import Grid from '@material-ui/core/Grid';

export const SeriesInfo = (props) => {
    let imageURL;
    if (props.image)
         imageURL = `http://image.tmdb.org/t/p/w1280/` + props.image;

    return (
        <div className="mdb-content"
             style={{ backgroundImage: imageURL ?
                     `linear-gradient(to right, rgba(0, 0, 0, 1)
                        30%,
                        rgba(0, 0, 0, 0)),
                        url(${imageURL})` : '' }}
        >
            <div className='mdb-content-description'>
                <h1>{props.name}</h1>
                <Grid container spacing={1}>
                    <Grid item>
                        <h2>
                           {props.first_air_date ? `${TitleDate(props.first_air_date)} -` : ''} {props.last_air_date ? TitleDate(props.last_air_date) : ''}
                        </h2>
                    </Grid>
                    <Grid item>
                        <h2>
                            - {props.vote_average}/10
                        </h2>
                    </Grid>
                    <Grid item>
                        <h2>
                            - {props.episode_run_time} min
                        </h2>
                    </Grid>
                    <Grid item>
                        <p>
                           - Seasons: {props.number_of_seasons} Episodes: {props.number_of_episodes}
                        </p>
                    </Grid>
                </Grid>
                <Genres genres={props.genres}/>
                <p>{props.overview ? props.overview.slice(0, 400) +'...' : ''}</p>
                <div className='mdb-content-buttons'>
                    <Link style={{ textDecoration: 'none' }}
                          to={{pathname: `/tmdbapi/${props.seriesPath ? props.seriesPath : 'popularSeries'}/detail/${props.seriesType ? props.seriesType : 'tv'}/${props.name}/${props.id}`, query: `/tmdbapi/${props.seriesPath}/detail`}}>
                        <ReadMore>
                            ...Read more
                        </ReadMore>
                    </Link>
                </div>
            </div>
        </div>

    )
}