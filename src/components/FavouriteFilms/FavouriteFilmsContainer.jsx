import React from 'react';
import {connect} from "react-redux";
import {deleteFavouriteFilmAC, deleteNumberOfFilmsAC} from "../../redux/favouriteFilmsReducer";
import Movies from "../Main/Movies/Movies";
import {compose} from "redux";


class FavouriteFilmsContainer extends React.Component {
    addFavouriteFilmInfo = (id) => {
        this.props.favouriteFilms.map(f => { if(id===f.imdbID){ this.props.deleteFavouriteFilm(f.imdbID)
                                                                this.props.deleteNumberOfFilms()}})
    }

    render() {
        return (
                <Movies movies={this.props.favouriteFilms}
                        addFavouriteFilmInfo={this.addFavouriteFilmInfo}
                        isMovies={false}
                />
        )
    }
}


let mapStateToProps = (state) => {
    return{
        favouriteFilms: state.favouriteFilmsReducer.favouriteFilms,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFavouriteFilm: (film) => {
            dispatch(deleteFavouriteFilmAC(film));
        },
        deleteNumberOfFilms: () => {
            dispatch(deleteNumberOfFilmsAC())
        }
    }
}

export default compose(
        connect(mapStateToProps, mapDispatchToProps),
)(FavouriteFilmsContainer)
