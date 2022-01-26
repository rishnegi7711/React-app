import axios from 'axios';
import store from '../redux/store';
import { openSnackbar } from '../redux/snackbar';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

const outgoingRequestSuccessInterceptor = (config) => {
    console.log('Request sent successfully')
    return config;
}

const outgoingRequestFailureInterceptor = (err) => {
    console.log(err.status)
    const payloadBody = { isSnackbarOpen: true, snackbarType: 'error', snackbarMessage: err.status };
    store.dispatch(payloadBody)
    return Promise.reject(err);
}

const incomingResponseSuccessInterceptor = (response) => {
    console.log(response.status)
    return response;
}

const incomingResponseFailureInterceptor = (err) => {
    console.log(err.message);
    const payloadBody = { isSnackbarOpen: true, snackbarType: 'error', snackbarMessage: err.message };
    store.dispatch(openSnackbar(payloadBody))
    return Promise.reject(err)
}

instance.interceptors.request.use(outgoingRequestSuccessInterceptor, outgoingRequestFailureInterceptor)

instance.interceptors.response.use(incomingResponseSuccessInterceptor, incomingResponseFailureInterceptor)

export const callUserLoginApi = (body) => {
    return instance.post('/login', body);

}

export const callUserSignupApi = (body) => {
    return instance.post('/signup', body);
}

export const callCreateNoteApi = (body) => {
    return instance.post('/article', body);
}

export const callInitialDataApi = () => {
    return instance.get('/articles', {})
}

export const callDeleteNoteApi = (noteId) => {
    return instance.delete(`/article/${noteId}`)
}

export const callEditNoteApi = (body) => {
    return instance.patch(`/article/${body.id}`, body)
}