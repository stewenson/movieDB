import {FETCH_POPULAR_MOVIES} from "../actions/fetchPopularMovies";
import {GET_DETAIL_MOVIE} from "../actions/fetchDetail";
import {FETCH_POPULAR_SERIES} from "../actions/fetchPopularSeries";
import {GET_VIDEO} from "../actions/fetchVideo";

const initState = {
    movies: [],
    series: [],
    detail: [],
    path: [],
    video: [],
    movieType: [],
}

function moviesReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case GET_DETAIL_MOVIE:
            return {
                ...state,
                detail: action.payload,
                path: action.path,
                movieType: action.movieType,
            };
        case FETCH_POPULAR_SERIES:
            return {
                ...state,
                series: action.payload,
            };
        case GET_VIDEO:
            return {
                ...state,
                video: action.payload,
            };
        default:
            return state;
    }
}

export default moviesReducer;