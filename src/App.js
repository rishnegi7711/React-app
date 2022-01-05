import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RoutePaths from './Components/RoutePaths';
import Create from './Components/Create';

const App = () => {


    return (<React.Fragment>
        {/* <Router>
            <RoutePaths />

        </Router> */}
        <Create />
    </React.Fragment>

    )

}

export default App