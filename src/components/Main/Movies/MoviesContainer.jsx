import React from 'react';
import {connect} from "react-redux";
import Movies from "./Movies";
import {getFilmsThunkCreator,} from '../../../redux/moviesReducer';
import {addFavouriteFilmAC, addNumberOfFilmsAC} from "../../../redux/favouriteFilmsReducer";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";


class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.getFilms(this.props.totalPages, this.props.movies.length, this.props.previousName, this.props.currentPage)
    }

    addFavouriteFilmInfo = (id) => {
        let isFavouriteContain = false
        this.props.favouriteFilms.map(f => { if(id===f.imdbID){ isFavouriteContain = true}})
        if (!isFavouriteContain){ this.props.movies.map(f => { if(id===f.imdbID){ this.props.addFavouriteFilm(f)
                                                                                  this.props.addNumberOfFilms()}})}
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Movies movies={this.props.movies}
                                                                addFavouriteFilmInfo={this.addFavouriteFilmInfo}
                                                                isMovies={true}/>
                }

            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        movies: state.moviesReducer.movies,
        isFetching: state.moviesReducer.isFetching,
        currentPage: state.addMoviesReducer.currentPage,
        previousName: state.searchReducer.previousName,
        totalPages: state.addMoviesReducer.totalPages,
        favouriteFilms: state.favouriteFilmsReducer.favouriteFilms,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavouriteFilm: (film) => {
            dispatch(addFavouriteFilmAC(film));
        },
        addNumberOfFilms: () => {
            dispatch(addNumberOfFilmsAC())
        },
        getFilms: (totalPages, moviesLength, previousName, currentPage) => {
            dispatch(getFilmsThunkCreator(totalPages, moviesLength, previousName, currentPage))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(MoviesContainer)
