import {FETCH_POPULAR_MOVIES} from "../actions/fetchPopularMovies";
import {GET_DETAIL_MOVIE} from "../actions/fetchDetail";
import {FETCH_POPULAR_SERIES} from "../actions/fetchPopularSeries";
import {GET_VIDEO} from "../actions/fetchVideo";
import {FETCH_TOP_RATED} from "../actions/fetchTopRated";
import {FETCH_UPCOMING_MOVIES} from "../actions/fetchUpcoming";
import {FETCH_DETAIL_SERIES} from "../actions/fetchDetailSeries";

const initState = {
    movies: [],
    topRated: [],
    upcoming: [],
    series: [],
    detail: [],
    path: [],
    video: [],
    movieType: [],
    detailSeries: [],
    seriesPath: [],
    seriesType: [],
}

function moviesReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case FETCH_TOP_RATED:
            return {
                ...state,
                topRated: action.payload,
            };
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                upcoming: action.payload,
            };
        case GET_DETAIL_MOVIE:
            return {
                ...state,
                detail: action.payload,
                path: action.path,
                movieType: action.movieType,
            };
        case FETCH_DETAIL_SERIES:
            return {
                ...state,
                detailSeries: action.payload,
                seriesPath: action.seriesPath,
                seriesType: action.seriesType,
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