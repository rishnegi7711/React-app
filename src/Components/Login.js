import React, { useState } from 'react';
import Card from './Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.scss';

const Login = () => {
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
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

    return (
        <Card className="signup">
            <h1>Login</h1>
            <TextField
                error
                id="outlined-error-helper-text"
                label="Username"
                defaultValue="Username"
                value={enteredUsername}
                helperText={isUsernameError ? 'Incorrect Username.' : 'Please enter Username'}
                onChange={usernameChangeHandler}
                onBlur={validateUsernameHandler}
            />
            <TextField
                error
                id="outlined-error-helper-text"
                label="Password"
                defaultValue="Password"
                value={enteredPassword}
                helperText={isPasswordError ? 'Incorrect password.' : 'Please enter Password'}
                type="password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
            />
            <Button variant="contained" className="button" size="medium">
                Log In
            </Button>
        </Card>
    );
};

export default Login;
