import React from 'react';
import MoviesItem from "./MoviesItem/MoviesItem";
import AddMoviesContainer from "../AddMovies/AddMoviesContainer";
import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Movies = (props) => {
    if(props.movies.length){
       let moviesItems = props.movies.map(f => <MoviesItem addFavouriteFilmInfo={props.addFavouriteFilmInfo} image={f.Poster}
                                                            name={f.Title} year={f.Year} type={f.Type} id={f.imdbID}
                                                            isMovies={props.isMovies}/>)
        return(
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container sx={{mt: 5}} spacing={1} >
                        {moviesItems}
                    </Grid>
                    {props.isMovies ? <AddMoviesContainer /> : null}
                </Box>
        )
    }
    else{
        return(
            <div>
                {props.isMovies ?
                    <Typography variant="h4" gutterBottom component="div">
                        Фильмов не найдено
                    </Typography>
                    :
                    <Typography variant="h4" gutterBottom component="div">
                        Корзина пуста
                    </Typography>}
            </div>
        )
    }
}

export default Movies;