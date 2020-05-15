import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function DetailMovie() {
    const params = useParams();
    const movies = useSelector(state => state.movies);
    const series = useSelector(state => state.series);

    let loadData;
    if (params.category === 'movie')
        loadData = movies.detail
    if (params.category === 'tv')
        loadData = series.detailSeries

    if (!loadData) return null;


    return (
        <div>
            <h1>{loadData.name ? loadData.name : loadData.title}</h1>
        </div>
    )
}