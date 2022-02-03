import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import snackbarReducer from './snackbar.js'
import userReducer from './user.js'
import logger from 'redux-logger';


const reducers = combineReducers({
    snackbar: snackbarReducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (func) => func().concat(logger)
});

export default store