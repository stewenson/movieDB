import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Genres(props) {
    return (
        <Grid container spacing={1} justify="center">
            {props.genres ?
                Object.entries(props.genres).map(([key, genre]) => (
                        <Grid key={genre.id} item>
                            <h5>
                            {genre.name},
                            </h5>
                        </Grid>
                    )
                )
                : null
            }
        </Grid>
    )
}