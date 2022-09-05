import React from 'react';
import {Box} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

let Preloader = (props) => {
    return (
        <Box sx={{ width: '100%', m: '5px 0px 0px 0' }}>
            <LinearProgress />
        </Box>
    )
}

export default Preloader;