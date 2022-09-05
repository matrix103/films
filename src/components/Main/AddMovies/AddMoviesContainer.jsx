import React from 'react';
import {connect} from "react-redux";
import {
    addMoviesThunkCreator,
} from '../../../redux/moviesReducer';
import AddMovies from "./AddMovies";
import {updateCurrentPageAC} from "../../../redux/addMoviesReducer";
import {compose} from "redux";

class AddMoviesContainer extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.addMovies(this.props.currentPage, this.props.previousName)
    }

    render() {
        if(this.props.totalPages!==this.props.currentPage){
            return (
                <AddMovies
                    setCurrentPage={this.props.updateCurrentPage}
                />
            )
        }
    }
}


let mapStateToProps = (state) => {
    return{
        totalPages: state.addMoviesReducer.totalPages,
        currentPage: state.addMoviesReducer.currentPage,
        previousName: state.searchReducer.previousName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovies: (currentPage, previousName) => {
            dispatch(addMoviesThunkCreator(currentPage, previousName));
        },
        updateCurrentPage: () => {
            dispatch(updateCurrentPageAC());
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(AddMoviesContainer)
