import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import BasePage from './Components/BasePage';

import Routes from './Components/Routes';


const App = () => {


    return (<React.Fragment>
        {/* <Router>
            <Routes />

        </Router> */}
        <BasePage />
    </React.Fragment>

    )

}

export default App