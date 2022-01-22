import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3000'
})


instance.interceptors.request.use(function (config) {
    console.log('Request sent successfully');
    return config;
}, function (err) {
    console.log(err.status)
    return Promise.reject(err);
})

instance.interceptors.response.use(function (response) {
    console.log(response.status);
    return response;
}, function (err) {
    console.log(err.message);
    return Promise.reject(err);
})

export const callUserLoginApi = (enteredUsername, enteredPassword) => {
    return instance.post('/login', {
        username: enteredUsername,
        password: enteredPassword,
    });

}

export const callUserSignupApi = (enteredUsername, enteredPassword, enteredEmail) => {
    return instance.post('/signup', {
        username: enteredUsername,
        password: enteredPassword,
        email: enteredEmail
    });
}

export const callCreateNoteApi = (id, title, description, date,) => {
    return instance.post('/article', {
        id: id,
        title: title,
        description: description,
        date: date
    });
}

export const callInitialDataApi = () => {
    return instance.get('/articles', {})
}

export const callDeleteNoteApi = (noteId) => {
    return instance.delete(`/article/${noteId}`)
}

export const callEditNoteApi = (activeEditNoteId, activeEditTitle, activeEditDescription) => {
    return instance.patch(`/article/${activeEditNoteId}`, {
        title: activeEditTitle,
        description: activeEditDescription
    })
}