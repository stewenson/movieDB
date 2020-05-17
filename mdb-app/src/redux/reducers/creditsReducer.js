import {FETCH_CREDITS} from "../actions/detail/fetchCredits";
import {CLEAR_CREDITS} from "../actions/detail/clearCredits";

const initState = {
    credits: [],
}

function moviesReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_CREDITS:
            return {
                ...state,
                credits: action.payload,
            };
        case CLEAR_CREDITS:
            return {
                ...state,
                credits: action.payload,
            };
        default:
            return state;
    }
}

export default moviesReducer;