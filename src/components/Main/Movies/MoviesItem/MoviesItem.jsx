import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from "@mui/material";
import defaultFilmPhoto from '../../../../assets/img/defaultFilmPhoto.jpg';
import SnackbarButton from "./SnackbarButton/SnackbarButton";




const MoviesItem = (props) => {
    const onAddFilmButtonClick = () =>{
        props.addFavouriteFilmInfo(props.id)
    }

    return(
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 375, minHeight: 700, justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="500"
                        image={props.image==='N/A' ? defaultFilmPhoto : props.image}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {/*<SnackbarButton onAddFilmButtonClick={onAddFilmButtonClick} isMovies={props.isMovies} />*/}
                    <Button onClick={onAddFilmButtonClick} size="small" color="primary" >
                        {props.isMovies ? "add" : "delete"}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default MoviesItem;