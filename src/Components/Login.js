import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { callUserLoginApi } from '../Api';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '../redux/snackbar';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            const payloadBody = { isSnackbarOpen: true, snackbarType: 'warning', snackbarMessage: 'Please enter password' };
            dispatch(openSnackbar(payloadBody))
        } else {
            setIsPasswordError(false);
        }
    };

    const validateUsernameHandler = () => {
        if (enteredUsername.trim().length === 0) {
            setIsUsernameError(true);
            const payloadBody = { isSnackbarOpen: true, snackbarType: 'warning', snackbarMessage: 'Please enter username.' }
            dispatch(openSnackbar(payloadBody))
        } else if (enteredUsername.trim().length < 6) {
            setIsUsernameError(true);
        }
        else {
            setIsUsernameError(false);
        }
    };

    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if (isUsernameError || isPasswordError) return;

        const body = {
            username: enteredUsername, password: enteredPassword
        }

        const { status } = await callUserLoginApi(body);
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
