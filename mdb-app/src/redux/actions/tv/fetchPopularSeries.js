import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_POPULAR_SERIES = "FETCH_POPULAR_SERIES";
export const ERROR = "ERROR";

export const fetchPopuparSeries =()=> {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: FETCH_POPULAR_SERIES,
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
