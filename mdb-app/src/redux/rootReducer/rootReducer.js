import moviesReducer from '../reducers/moviesReducer';
import seriesReducer from "../reducers/seriesReducer";
import searchReducer from "../reducers/searchReducer";
import creditsReducer from '../reducers/creditsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    movies: moviesReducer,
    series: seriesReducer,
    search : searchReducer,
    credits: creditsReducer,
});

export default rootReducer;