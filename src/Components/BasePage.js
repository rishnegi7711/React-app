import React from "react";
import Switch from '@mui/material/Switch';
import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";


const BasePage = () => {

    const [checked, setChecked] = useState(false);
    const [isLoginPageActive, setIsLoginPageActive] = useState(false);

    return (
        <>
            {checked ? <Signup /> : <Login />}
            <h3>Login</h3>
            <Switch
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
            />
            <h3>Signup</h3>
        </>
    )

}

export default BasePage

