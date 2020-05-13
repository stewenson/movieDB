import axios from "axios";
export const FETCH_DETAIL_SERIES = "FETCH_DETAIL_SERIES";
export const ERROR = "ERROR";

export const fetchDetailSeries = (id, type, path) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/tv/${id ? id : '60735'}?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US`)
            .then(res =>
                dispatch({
                    type: FETCH_DETAIL_SERIES,
                    payload: res.data,
                    seriesPath: path,
                    seriesType: type,
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
