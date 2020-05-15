import {FETCH_POPULAR_SERIES} from "../actions/tv/fetchPopularSeries";
import {FETCH_DETAIL_SERIES} from "../actions/detail/fetchDetailSeries";
import {FETCH_VIDEO_SERIES} from "../actions/tv/fetchVideoSeries";
import {FETCH_TOP_RATED_SERIES} from "../actions/tv/fetchTopRatedSeries";
import {FETCH_AIR_TODAY} from "../actions/tv/fetchAiringToday";

const initState = {
    series: [],
    topRatedSeries: [],
    airToday: [],
    detailSeries: [],
    videoSeries: [],
    movieType: [],
    seriesPath: [],
    seriesType: [],
}

function seriesReducer(state = initState, action) {
    switch (action.type) {
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
        case FETCH_AIR_TODAY:
            return {
                ...state,
                airToday: action.payload,
            };
        case FETCH_TOP_RATED_SERIES:
            return {
                ...state,
                topRatedSeries: action.payload,
            };
        case FETCH_VIDEO_SERIES:
            return {
                ...state,
                videoSeries: action.payload,
            };
        default:
            return state;
    }
}

export default seriesReducer;