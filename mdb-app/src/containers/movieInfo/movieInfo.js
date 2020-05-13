import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/MovieInfo.scss';
import {TitleDate} from "../../components/TitleDate/TitleDate";
import Genres from "../genres/genres";
import {ReadMore} from "../../styles/LinkStyles";
import Trailers from "../../components/Trailers/Trailers";

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
                            {props.title} {props.release_date ? TitleDate(props.release_date) : ''}
                        </div>
                        <Genres genres={props.genres}/>
                        <div className="mdb-content-description">
                            {props.overview}
                        </div>
                        <div className='mdb-content-buttons'>
                            <Link style={{ textDecoration: 'none' }}
                                  to={{pathname: `/tmdbapi/${props.path}/detail/${props.movieType}/${props.title}/${props.id}`, query: `/tmdbapi/${props.path}/detail`}}>
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