import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

export default function DetailMovie() {
    const params = useParams();
    const data = useSelector(state => state.movies);

    let loadData;
    if (params.category === 'movie')
        loadData = data.detail
    if (params.category === 'tv')
        loadData = data.detailSeries

    return (
        <div>
            <h1>{loadData.name ? loadData.name : loadData.title}</h1>
        </div>
    )
}