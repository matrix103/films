import React from 'react';
import MoviesContainer from "./Movies/MoviesContainer";
import SearchContainer from "./Search/SearchContainer";

const Main = () => {
    return(
        <>
            <SearchContainer />
            <MoviesContainer />
        </>
    )
}

export default Main;