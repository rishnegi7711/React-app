import React from "react";
import Switch from '@mui/material/Switch';
import Signup from "./Signup";
import Login from "./Login";
import Card from "./Card"
import "./BasePage.scss";
import { useState } from "react";






const BasePage = () => {



    const [isLoginPageActive, setIsLoginPageActive] = useState(false);

    return (
        <Card className='basePage'>
            {isLoginPageActive ? <Signup /> : <Login />}
            <div className='switch'>
                <h3>Login</h3>
                <Switch
                    checked={isLoginPageActive}
                    onChange={e => setIsLoginPageActive(e.target.checked)}
                />
                <h3>Signup</h3>
            </div>

        </Card>
    )

}

export default BasePage

