import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        isSnackbarOpen: false,
        snackbarType: '',
        snackbarMessage: ''
    },
    reducers: {
        openSnackbar: (state, action) => {
            state.isSnackbarOpen = true
            state.snackbarType = action.payload.snackbarType
            state.snackbarMessage = action.payload.snackbarMessage
        },
        closeSnackbar: (state) => {
            state.isSnackbarOpen = false
        }
    }
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;