import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { callUserLoginApi } from '../Api';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Card from './Card';

const Login = () => {
    const navigate = useNavigate();
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
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
            setIsPasswordError(false);
        }
    };

    const validateUsernameHandler = () => {
        if (enteredUsername.trim().length === 0 || enteredUsername.trim().length < 6) {
            setIsUsernameError(true);
        } else {
            setIsUsernameError(false);
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if (isUsernameError || isPasswordError) return;

        const { status } = await callUserLoginApi(enteredUsername, enteredPassword);
        if (status === 200) {
            navigate('/dashboard');
        }
    };


    return (
        <Card className="login">
            <h1>Login</h1>
            <TextField
                error={isUsernameError}
                label="Username"
                value={enteredUsername}
                helperText={isUsernameError ? 'Incorrect Username.' : 'Please enter Username'}
                onChange={usernameChangeHandler}
                onBlur={validateUsernameHandler}
            />
            <TextField
                error={isPasswordError}
                label="Password"
                value={enteredPassword}
                helperText={isPasswordError ? 'Incorrect password.' : 'Please enter Password'}
                type="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
            />
            <Button variant="contained" className="button" size="medium" sx={{ display: 'flex' }} onClick={formSubmitHandler}>
                Log In
            </Button>
        </Card>
    );
};

export default Login;
