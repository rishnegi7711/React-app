import React, { useState } from 'react';

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from './Card.js'
import './Signup.scss'

const Signup = () => {

    const [isUsernameError, setIsUsernameError] = useState(false)
    const [isPassword1Error, setIsPassword1Error] = useState(false);
    const [isPassword2Error, setIsPassword2Error] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [enteredPassword1, setEnteredPassword1] = useState('');
    const [enteredPassword2, setEnteredPassword2] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredUsername, setEnteredUsername] = useState('');

    const usernameChangehandler = (event) => {
        setEnteredUsername(event.target.value);
        setIsUsernameError(false);
    }

    const password1ChangeHandler = (event) => {
        setEnteredPassword1(event.target.value)
        setIsPassword1Error(false);
    }

    const password2ChangeHandler = (event) => {
        setEnteredPassword2(event.target.value)
        setIsPassword2Error(false);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
        setIsEmailError(false);
    }

    const validateEmailHandler = () => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(enteredEmail).trim())) {
            setIsEmailError(false);
        } else {
            setIsEmailError(true);
        }

    }

    const validateUsernameHandler = () => {
        if (enteredUsername.trim().length === 0 || enteredUsername.trim().length < 6) {
            setIsUsernameError(true)
        } else {
            setIsUsernameError(false);
        }
    }

    const validatePasswordMatchHandler = () => {
        setIsPassword2Error(enteredPassword1 !== enteredPassword2)
    }

    const validatePassword1Handler = () => {
        if (enteredPassword1.trim().length == 0) {
            setIsPassword1Error(true);
        } else {
            setIsPassword1Error(false)
        }
    }




    return <Card className='login'>
        <h1>Sign Up</h1>
        <TextField
            error={isUsernameError}
            label="Username"
            value={enteredUsername}
            helperText={isUsernameError ? "Incorrect entry." : "Please enter username"}
            className='textField'
            onChange={usernameChangehandler}
            onBlur={validateUsernameHandler}
        />
        <TextField
            error={isEmailError}
            label="Email"
            value={enteredEmail}
            helperText={isEmailError ? "Incorrect entry." : "Please enter E-mail"}
            className='textField'
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
        />
        <TextField
            error={isPassword1Error}
            label="Password"
            value={enteredPassword1}
            helperText={isPassword1Error ? "Incorrect entry." : "Please enter password"}
            type="password"
            className='textField'
            onChange={password1ChangeHandler}
            onBlur={validatePassword1Handler}

        />
        <TextField
            error={isPassword2Error}
            label=" Confirm Password"
            value={enteredPassword2}
            helperText={isPassword2Error ? "Incorrect entry." : "Please enter password again"}
            type="password"
            className='textField'
            onChange={password2ChangeHandler}
            onBlur={validatePasswordMatchHandler}

        />
        <Button variant="contained" className="button" size="medium">Submit</Button>


    </Card>



}

export default Signup