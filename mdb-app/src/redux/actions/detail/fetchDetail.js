import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_DETAIL_MOVIE = "FETCH_DETAIL_MOVIE";
export const ERROR = "ERROR";

export const fetchDetail = (id, type, path) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/movie/${id ? id : '419704'}?api_key=${ApiKey}&language=en-US`)
            .then(res =>
                dispatch({
                    type: FETCH_DETAIL_MOVIE,
                    payload: res.data,
                    path: path,
                    movieType: type,
                })
            )
            .catch(e =>
                dispatch({
                    type: ERROR,
                    msg: "Something is wrong"
                })
            );
    };
};

