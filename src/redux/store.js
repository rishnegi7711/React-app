import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from './snackbar.js'
import logger from 'redux-logger';

export default configureStore({
    reducer: {
        snackbar: snackbarReducer
    },
    middleware: (func) => func().concat(logger)
})