import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import snackbarReducer from './snackbar.js'
import logger from 'redux-logger';

const reducers = combineReducers({
    snackbar: snackbarReducer,
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