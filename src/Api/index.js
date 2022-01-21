import Axios from 'axios';

export const callUserLoginApi = (enteredUsername, enteredPassword) => {
    return Axios.post('http://localhost:3000/login', {
        username: enteredUsername,
        password: enteredPassword,
    });

}
callUserLoginApi();

