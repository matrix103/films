import {applyMiddleware, combineReducers, createStore} from "redux";
import moviesReducer from "./moviesReducer";
import searchReducer from "./searchReducer";
import addMoviesReducer from "./addMoviesReducer";
import favouriteFilmsReducer from "./favouriteFilmsReducer";
import thunkMiddlewere from "redux-thunk";

let reducers = combineReducers({
    moviesReducer,
    searchReducer,
    addMoviesReducer,
    favouriteFilmsReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddlewere));
window.store = store;

export default store;