import React, { useState } from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Switch from '@mui/material/Switch';


const App = () => {


    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (<React.Fragment>
        {setChecked && <Signup />}
        {!setChecked && <Login />}
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />

    </React.Fragment>

    )

}

export default App