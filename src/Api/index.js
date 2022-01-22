import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3000'
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