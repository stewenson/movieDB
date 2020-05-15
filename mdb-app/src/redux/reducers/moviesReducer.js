import {FETCH_POPULAR_MOVIES} from "../actions/movies/fetchPopularMovies";
import {FETCH_DETAIL_MOVIE} from "../actions/detail/fetchDetail";
import {FETCH_VIDEO_MOVIE} from "../actions/movies/fetchVideoMovie";
import {FETCH_TOP_RATED} from "../actions/movies/fetchTopRated";
import {FETCH_UPCOMING_MOVIES} from "../actions/movies/fetchUpcoming";

const initState = {
    movies: [],
    topRated: [],
    upcoming: [],
    detail: [],
    path: [],
    videoMovies: [],
    movieType: [],
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
        case FETCH_DETAIL_MOVIE:
            return {
                ...state,
                detail: action.payload,
                path: action.path,
                movieType: action.movieType,
            };
        case FETCH_VIDEO_MOVIE:
            return {
                ...state,
                videoMovies: action.payload,
            };
        default:
            return state;
    }
}

export default moviesReducer;