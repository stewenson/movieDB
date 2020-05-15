import {FETCH_GENRE} from "../actions/search/fetchGenre";
import {FETCH_MOVIE_BY_GENRE} from "../actions/search/fetchMovieByGenre";

const initState = {
    genre: [],
    movie: [],
}

function searchReducer(state = initState, action) {
    switch (action.type) {
        case FETCH_GENRE:
            return {
                ...state,
                genre: action.payload,
            };
        case FETCH_MOVIE_BY_GENRE:
            return {
                ...state,
                movie: action.payload,
            };
        default:
            return state;
    }
}

export default searchReducer;