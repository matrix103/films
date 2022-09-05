import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import FavouriteFilmsContainer from "./components/FavouriteFilms/FavouriteFilmsContainer";
import {Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
  return (
    <div>
        <HeaderContainer />
        <Container fixed sx={{ minHeight: 'calc(100vh - 124px)' }}>
            <Routes>
                <Route path='/favouriteFilms' element={<FavouriteFilmsContainer />}/>
                <Route path='/films' element={<Main />}/>
            </Routes>
        </Container>
        <Footer />
    </div>
  );
}

export default App;
