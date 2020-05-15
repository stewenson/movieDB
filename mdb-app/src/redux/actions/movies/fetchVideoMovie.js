import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_VIDEO_MOVIE = "FETCH_VIDEO_MOVIE";
export const ERROR = "ERROR";

export const fetchVideoMovie = (id) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
            .then(res =>
                dispatch({
                    type: FETCH_VIDEO_MOVIE,
                    payload: res.data,
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