import moviesReducer from '../reducers/moviesReducer';
import seriesReducer from "../reducers/seriesReducer";
import searchReducer from "../reducers/searchReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    search : searchReducer,
});

export default rootReducer;