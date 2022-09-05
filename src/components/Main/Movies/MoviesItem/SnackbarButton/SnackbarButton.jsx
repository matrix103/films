// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import {Alert} from "@mui/material";
//
// const SnackbarButton = (props) => {
//     const [open, setOpen] = React.useState(false);
//
//     const handleClick = () => {
//         debugger
//         props.onAddFilmButtonClick()
//         setOpen(true);
//     };
//
//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };
//
//     return (
//         <div>
//             <Button onClick={handleClick} size="small" color="primary" >
//                 {props.isMovies ? "add" : "delete"}
//             </Button>
//             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//                 <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//                     Фильм успешно добавлен
//                 </Alert>
//             </Snackbar>
//         </div>
//     );
// }
//
// export default SnackbarButton;
