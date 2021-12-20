import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom';
import BasePage from './Components/BasePage';

import RoutePaths from './Components/RoutePaths';


const App = () => {


    return (<React.Fragment>
        <Router>
            <RoutePaths />

        </Router>
        {/* <BasePage /> */}
    </React.Fragment>

    )

}

export default App