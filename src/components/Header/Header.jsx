
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';
import {NavLink} from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 5,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink to="/films">
                            Movies
                        </NavLink>
                    </Typography>
                    <IconButton aria-label="cart">
                        <NavLink to="/favouriteFilms">
                            <StyledBadge badgeContent={props.numberOfFilms} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </NavLink>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;