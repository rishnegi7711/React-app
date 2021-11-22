import React, { useState } from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Card from './Card.js'
import './Login.scss'

const Login = () => {

    const [isUsernameError, setIsUsernameError] = useState(false)
    const [isPasswordError,setIsPasswordError]= useState(false);
    const [enteredPassword1,setEnteredPassword1] = useState('');
    const [enteredPassword2,setEnteredPassword2] = useState('');
    const [enteredUsername,setEnteredUsername]=useState('');


    return <Card className='login'>
        <h1>Sign Up</h1>
        <TextField
            error={isUsernameError}
            id="outlined-error-helper-text"
            label="Username"
            value={enteredUsername}
            helperText={isUsernameError ? "Incorrect entry." : "Please enter username"}
        />
        <TextField
            error={isPasswordError}
            id="outlined-error-helper-text"
            label="Password"
            value={enteredPassword1}
            helperText={isPasswordError ? "Incorrect entry." : "Please enter password"}
            type="password"
        />
        <TextField
            error={isPasswordError}
            id="outlined-error-helper-text"
            label=" Confirm Password"
            value={enteredPassword2}
            helperText={isPasswordError ? "Incorrect entry." : "Please enter password again"}
            type="password"
        />
        <Button variant="contained" className='button'>Submit</Button>


    </Card>



} 

export default Login