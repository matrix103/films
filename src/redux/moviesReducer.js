import getFilms from "../api/api";
import {setTotalPagesAC} from "./addMoviesReducer";

const SET_MOVIES = 'SET_MOVIES'
const ADD_MOVIES = 'ADD_MOVIES'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    movies: [

    ],
    isFetching: true,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES: {
            return { ...state, movies: action.movies };
        }
        case ADD_MOVIES: {
            let arr = []
            state.movies.map(f => arr.push(f))
            action.movies.map(f => arr.push(f))
            return {...state, movies: arr };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }

    }
}


export const setMoviesAC = (movies) => {
    return {type: SET_MOVIES, movies }
}
export const addMoviesAC = (movies) => {
    return {type: ADD_MOVIES, movies }
}
export const toggleIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching }
}

export const getFilmsThunkCreator = (totalPages, moviesLength, previousName, currentPage) => {
    return (dispatch) => {
        if (totalPages !== 0 && moviesLength === 0) {
            dispatch(toggleIsFetchingAC(true));
            getFilms(previousName, currentPage).then(data => {
                dispatch(setMoviesAC(data.Search));
                dispatch(setTotalPagesAC(data.totalResults));
                dispatch(toggleIsFetchingAC(false));
            });
        }
    }
}
export const addMoviesThunkCreator = (currentPage, previousName) => {
    return (dispatch) => {
        if(currentPage!==1){
            getFilms(previousName, currentPage).then(data => {
                dispatch(addMoviesAC(data.Search));
            });}
    }
}
export const setMoviesFromSearchThunkCreator = (searchText) => {
    return (dispatch) => {
       dispatch(setTotalPagesAC(1))
        getFilms(searchText, 1).then(data => {
            if(data.Search){
                dispatch(setTotalPagesAC(data.totalResults));
                dispatch(setMoviesAC(data.Search));
            }
            else{
                dispatch(setTotalPagesAC(0));
                dispatch(setMoviesAC([]));
            }
        });
    }
}

export default moviesReducer;