import React, {useEffect, useState} from "react";
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import {fetchGenre} from "../../redux/actions/search/fetchGenre";
import Button from '@material-ui/core/Button';
import {fetchMovieByGenre} from "../../redux/actions/search/fetchMovieByGenre";


export default function SearchMovie() {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.search.genre);
    const movies = useSelector(state => state.search.movie);
    const [genre, setGenre] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadData = () => {
            if (genre)
                dispatch(fetchMovieByGenre(genre))
            dispatch(fetchGenre())
            setLoading(false);
        };
        loadData();
    },[dispatch, loading, genre])

    if (loading) return null;

    return (
        <Grid container spacing={3} style={{ padding: '5% 5%'}}>
            <Grid item xs={12} sm={3}>
                {genres.genres ? genres.genres.map(genre => (
                    <Button key={genre.id}
                            color="secondary"
                            onClick={()=>setGenre(genre.id)}
                    >
                        {genre.name}
                    </Button>
                ))
                :
                ''
                }
            </Grid>
            <Grid item xs={12} sm={9} >
                <Grid container spacing={3}>
                {movies.results ? movies.results.map(movie => (
                        <Grid item key={movie.id}>
                            <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt=""/>
                        </Grid>
                    ))
                    :
                    ''
                }
            </Grid>
            </Grid>
        </Grid>
    )
}