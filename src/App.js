import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePaths from './Components/RoutePaths';

const App = () => {


    return (<React.Fragment>
        <Router>
            <RoutePaths />

        </Router>
    </React.Fragment>

    )

}

export default App