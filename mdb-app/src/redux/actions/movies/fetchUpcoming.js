import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_UPCOMING_MOVIES = "FETCH_UPCOMING_MOVIES";
export const ERROR = "ERROR";

export const fetchUpcoming = () => {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: FETCH_UPCOMING_MOVIES,
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
