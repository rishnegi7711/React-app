import React from "react";
import Switch from '@mui/material/Switch';
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";


const BasePage = () => {

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

export default BasePage

