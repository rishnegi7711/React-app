import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import RoutePaths from './Components/RoutePaths';
import { closeSnackbar } from './redux/snackbar';

const App = () => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeSnackbar());
    }
    const { isSnackbarOpen, snackbarType, snackbarMessage } = useSelector((state) => state.snackbar)
    return (
        <>
            <Router>
                <RoutePaths />
            </Router>
            <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snackbarType} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default App;
