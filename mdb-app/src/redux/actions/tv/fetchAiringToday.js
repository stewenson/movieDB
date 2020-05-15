import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_AIR_TODAY = "FETCH_AIR_TODAY";
export const ERROR = "ERROR";

export const fetchAiringToday =()=> {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${ApiKey}&language=en-US&page=1`)
            .then(res =>
                dispatch({
                    type: FETCH_AIR_TODAY,
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
