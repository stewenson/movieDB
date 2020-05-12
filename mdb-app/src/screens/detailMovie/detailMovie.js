import React from "react";
import {useSelector} from "react-redux";

export default function DetailMovie() {
    const data = useSelector(state => state.movies);

    console.log(data.detail)
    return (
        <div>
            <h1>{data.detail.title ? data.detail.title : data.detail.name}</h1>
        </div>
    )
}