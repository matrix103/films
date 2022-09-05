import React from 'react';
import {connect} from "react-redux";
import {deleteFavouriteFilmAC, deleteNumberOfFilmsAC, updateNumberOfFilmsAC} from "../../redux/favouriteFilmsReducer";
import Header from "./Header";
import {compose} from "redux";


class HeaderContainer extends React.Component {
    render() {
        return (
            <>
                <Header numberOfFilms={this.props.numberOfFilms}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        numberOfFilms: state.favouriteFilmsReducer.numberOfFilms,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(HeaderContainer)
