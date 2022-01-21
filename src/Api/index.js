import Axios from 'axios';

export const callUserLoginApi = (enteredUsername, enteredPassword) => {
    return Axios.post('http://localhost:3000/login', {
        username: enteredUsername,
        password: enteredPassword,
    });

}

export const callUserSignupApi = (enteredUsername, enteredPassword, enteredEmail) => {
    return Axios.post('http://localhost:3000/signup', {
        username: enteredUsername,
        password: enteredPassword,
        email: enteredEmail
    });
}

export const callInitialDataApi = () => {
    return Axios.get('http://localhost:3000/articles', {})
}

export const callDeleteNoteApi = (noteId) => {
    return Axios.delete(`http://localhost:3000/article/${noteId}`)
}

export const callEditNoteApi = (activeEditNoteId, activeEditTitle, activeEditDescription) => {
    return Axios.patch(`http://localhost:3000/article/${activeEditNoteId}`, {
        title: activeEditTitle,
        description: activeEditDescription
    })
}