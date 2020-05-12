import React from "react";
import {Link} from 'react-router-dom';
import {Container} from "@material-ui/core";
import '../../styles/MovieInfo.scss';
import Typography from '@material-ui/core/Typography';
import {TitleDate} from "../../components/TitleDate/TitleDate";
import Genres from "../genres/genres";
import {ReadMore} from "../../styles/LinkStyles";
import Trailers from "../../components/Trailers/Trailers";

export const MovieInfo = (props) => {
    const imageURL = `http://image.tmdb.org/t/p/original/` + props.image;

    return (
    <Container maxWidth='xl'>
        {props.image ?
            <div className='mdb-backgroundimage'
            style={{
                background: imageURL ?
                    `linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0)), url(${imageURL})`
                    :
                    null
            }}
            >
                <div className="mdb-text-container">
                    <Typography variant="h3" align='left' gutterBottom>
                        {props.title ? props.title : props.name} {props.release_date ? TitleDate(props.release_date) : ''}
                        {props.first_air_date ? `${TitleDate(props.first_air_date)} -` : ''} {props.last_air_date ? TitleDate(props.last_air_date) : ''}
                    </Typography>
                    <Genres genres={props.genres}/>
                    <Typography variant="body1" align='left' className='mdb-overview' gutterBottom>
                        {props.overview}
                    </Typography>
                    <div className='mdb-buttons-content'>
                        <Link style={{ textDecoration: 'none' }}
                              to={{pathname: `/tmdbapi/${props.path}/detail/${props.movieType}/${props.title ? props.title : props.name}/${props.id}`, query: `/tmdbapi/${props.path}/detail`}}>
                            <ReadMore>
                                ...Read more
                            </ReadMore>
                        </Link>
                        <Trailers videos={props.videos}/>
                    </div>

                </div>
            </div>
            :
          ''
        }
    </Container>
    )
}