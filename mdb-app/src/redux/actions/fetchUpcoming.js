import axios from "axios";
export const FETCH_UPCOMING_MOVIES = "FETCH_UPCOMING_MOVIES";
export const ERROR = "ERROR";

export const fetchUpcoming = () => {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=3005d94c9609dfff31bb87e2643367b4&language=en-US&page=1`)
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
