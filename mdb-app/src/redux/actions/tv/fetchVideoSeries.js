import axios from "axios";
import {ApiKey} from "../../apiKey";
export const FETCH_VIDEO_SERIES = "FETCH_VIDEO_SERIES";
export const ERROR = "ERROR";

export const fetchVideoSeries = (id) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${ApiKey}&language=en-US`)
            .then(res =>
                dispatch({
                    type: FETCH_VIDEO_SERIES,
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