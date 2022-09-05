import React from 'react';
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

const AddMovies = (props) => {

    let onAddMoviesButtonClick = () => {
        props.setCurrentPage();
    }

    return(
        <Box autoComplete="off"
             sx={{ textAlign: 'center', width: '100%', m: '30px' }}>
            <Button variant="contained"
                    onClick={onAddMoviesButtonClick}
                    sx={{ p: '12px 25px' }}
            >
                Add Films
            </Button>
        </Box>
    )
}

export default AddMovies;