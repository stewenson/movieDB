import axios from "axios";
export const FETCH_CREDITS = "FETCH_CREDITS";
export const ERROR = "ERROR";


export const fetchCredits = (type, id) =>  {
    return async dispatch => {
        await axios
            .get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=3005d94c9609dfff31bb87e2643367b4`)
            .then(res =>
                dispatch({
                    type: FETCH_CREDITS,
                    payload: res.data
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