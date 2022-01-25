import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from './snackbar.js'

export default configureStore({
    reducer: {
        snackbar: snackbarReducer
    }
})