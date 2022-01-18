import React, { useState } from 'react';
import Card from './Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.scss';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

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
            const login = async () => {
                try {
                    let res = await Axios.post('http://localhost:3000/login', { username: enteredUsername, password: enteredPassword });
                    let data = res.data;
                    console.log(data);
                    if (data.message === 'Ok') {
                        console.log('login successful');
                        navigate('/dashboard');
                    }
                } catch (err) {
                    console.log("Error Code:" + err.response.status + " Error: " + err.response.statusText)
                }

            }
            // Axios.post("http://localhost:3000/login", { username: enteredUsername, password: enteredPassword })
            //     .then(response => {
            //         if (response.status == 200) {
            //             console.log("Login successful");
            //             navigate('/dashboard');
            //         }
            //     })
            //     .catch(err => console.log("Error Code:" + err.response.status + " Error: " + err.response.statusText))
            login();
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
