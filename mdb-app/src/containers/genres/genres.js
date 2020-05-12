import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Genres(props) {
    return (
        <Grid container spacing={1}>
            {props.genres ?
                Object.entries(props.genres).map(([key, genre]) => (
                        <Grid key={genre.id} item>
                            <Typography variant="h5" align='left' className='mdb-genres' >
                            {genre.name},
                            </Typography>
                        </Grid>
                    )
                )
                : null
            }
        </Grid>
    )
}