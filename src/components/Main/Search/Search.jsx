import React from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Search = (props) => {
    let searchText = props.searchText;

    let onSearchTextClick = () => {
        props.setMoviesFromSearch();
        props.clearSearchText();
    }

    let onSearchTextChange = (e) => {
        let body = e.target.value;
        props.updateSearchText(body);
    }

    let onEnterClick = (e) => {
        if (e.key === 'Enter') {
            onSearchTextClick()
        }
    }

    return(
        <Box autoComplete="off"
             sx={{ display: 'flex', p: '30px 0px 0px 0px', alignItems: 'center', width: '100%' }}>
            <TextField label="Find Movies"
                       variant="outlined"
                       value={searchText}
                       onChange={onSearchTextChange}
                       sx={{ ml: 1, flex: 1, width: '100%' }}
                       onKeyPress={onEnterClick}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSearchTextClick}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}

export default Search;