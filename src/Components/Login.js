import React, { useState } from 'react';
import Card from './Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.scss';
import Axios from 'axios';

const Login = () => {
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [formValidity, setFormValidity] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        setIsUsernameError(false);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setIsPasswordError(false);
    };

    const validatePasswordHandler = () => {
        if (enteredPassword.trim().length === 0) {
            setIsPasswordError(true);
        } else {
            setIsPasswordError(false)
        }
    }

    const validateUsernameHandler = () => {
        if (enteredUsername.trim().length === 0 || enteredUsername.trim().length < 6) {
            setIsUsernameError(true)
        } else {
            setIsUsernameError(false)
        }
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!isUsernameError && !isPasswordError) {
            setFormValidity(true);
        }
        if (formValidity === true) {
            Axios.post("http://localhost:3000/login", { username: enteredUsername, password: enteredPassword })
                .then(response => {
                    // if (!response.ok) {
                    console.log(response);
                    // }
                })
                .catch(err => alert("Error Code:" + err.response.status + " Error: " + err.response.statusText))
        }

    }

    return (
        <Card className="login">
            <h1>Login</h1>
            <TextField
                error={isUsernameError}
                label="Username"
                value={enteredUsername}
                helperText={isUsernameError ? "Incorrect Username." : "Please enter Username"}
                onChange={usernameChangeHandler}
                onBlur={validateUsernameHandler}
            />
            <TextField
                error={isPasswordError}
                label="Password"
                value={enteredPassword}
                helperText={isPasswordError ? "Incorrect password." : "Please enter Password"}
                type="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
            />
            <Button variant="contained" className="button" size="medium" onClick={formSubmitHandler}>
                Log In
            </Button>
        </Card>
    );
};

export default Login;
