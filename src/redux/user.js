import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isUserLoggedIn: false,
        response: '',
    },
    reducers: {
        loginUser: (state, action) => {
            state.isUserLoggedIn = true;
            state.response = action.payload;
        },
        logoutUser: (state) => {
            state.isUserLoggedIn = false;
        }
    }


})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;