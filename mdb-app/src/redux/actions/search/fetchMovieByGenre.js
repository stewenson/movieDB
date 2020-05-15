import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_MOVIE_BY_GENRE = "FETCH_MOVIE_BY_GENRE";
export const ERROR = "ERROR";

export const fetchMovieByGenre = (id) => {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
            .then(res =>
                dispatch({
                    type: FETCH_MOVIE_BY_GENRE,
                    payload: res.data,
                })
            )
            .catch( e => {
                dispatch({
                    type: ERROR,
                    msg: e.message
                })
            });
    };
};