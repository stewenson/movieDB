import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const ERROR = "ERROR";

export const fetchTopRated = () => {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: FETCH_TOP_RATED,
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
