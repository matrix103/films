import React from 'react';
import {connect} from "react-redux";
import {setTotalPagesAC} from "../../../redux/addMoviesReducer";
import getFilms from "../../../api/api";
import {setMoviesFromSearchThunkCreator} from '../../../redux/moviesReducer';
import Search from "./Search";
import {clearSearchTextAC, updateSearchTextAC} from "../../../redux/searchReducer";
import {compose} from "redux";


class SearchContainer extends React.Component {
    setMoviesFromSearch = () => {
        this.props.setMovies(this.props.searchText)
    }

    render() {
        return (
            <Search
                setMoviesFromSearch={this.setMoviesFromSearch}
                updateSearchText={this.props.updateSearchText}
                clearSearchText={this.props.clearSearchText}
                searchText={this.props.searchText}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return{
        searchText: state.searchReducer.searchText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMovies: (searchText) => {
            dispatch(setMoviesFromSearchThunkCreator(searchText));
        },
        updateSearchText: (text) => {
            dispatch(updateSearchTextAC(text));
        },
        clearSearchText: () => {
            dispatch(clearSearchTextAC());
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(SearchContainer);
