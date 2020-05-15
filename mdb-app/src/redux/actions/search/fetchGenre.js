import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_GENRE = "FETCH_GENRE";
export const ERROR = "ERROR";

export const fetchGenre =()=> {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`)
            .then(res =>
                dispatch({
                    type: FETCH_GENRE,
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
