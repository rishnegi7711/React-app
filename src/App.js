import React, { useState } from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Switch from '@mui/material/Switch';
import './App.scss';


const App = () => {


    const [checked, setChecked] = useState(false);


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (<React.Fragment>
        {checked && <Signup />}
        {!checked && <Login />}
        <h3>Login</h3>
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
        <h3>Signup</h3>


    </React.Fragment>

    )

}

export default App