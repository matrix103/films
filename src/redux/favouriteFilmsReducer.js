const ADD_FAVOURITE_FILM = 'ADD_FAVOURITE_FILM'
const DELETE_FAVOURITE_FILM = 'DELETE_FAVOURITE_FILM'
const ADD_NUMBERS_OF_FILMS = 'ADD_NUMBERS_OF_FILMS'
const DELETE_NUMBERS_OF_FILMS = 'DELETE_NUMBERS_OF_FILMS'

let initialState = {
    favouriteFilms: [

    ],
    numberOfFilms: 0,
};

const favouriteFilmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVOURITE_FILM: {
            let arr = []
            state.favouriteFilms.map(f => arr.push(f))
            arr.push(action.film)
            return {...state, favouriteFilms: arr };
        }
        case DELETE_FAVOURITE_FILM: {
            let arr = []
            state.favouriteFilms.map(f => { if( action.id !== f.imdbID ){arr.push(f)}})
            return {...state, favouriteFilms: arr };
        }
        case ADD_NUMBERS_OF_FILMS: {
            return {...state, numberOfFilms: state.numberOfFilms + 1 };
        }
        case DELETE_NUMBERS_OF_FILMS: {
            return {...state, numberOfFilms: state.numberOfFilms - 1 };
        }
        default: {
            return state;
        }

    }
}


export const addFavouriteFilmAC = (film) => {
    return {type: ADD_FAVOURITE_FILM, film }
}
export const deleteFavouriteFilmAC = (id) => {
    return {type: DELETE_FAVOURITE_FILM, id }
}
export const addNumberOfFilmsAC = () => {
    return {type: ADD_NUMBERS_OF_FILMS }
}
export const deleteNumberOfFilmsAC = () => {
    return {type: DELETE_NUMBERS_OF_FILMS }
}

export default favouriteFilmsReducer;