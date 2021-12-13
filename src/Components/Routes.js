import BasePage from "./BasePage";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import React from "react";

const Routes = () => {

    return (
        <Switch>
            <Route path="*" component={<main><h2>There is nothing here!</h2></main>} />
            <Route path="/" component={BasePage} />
            <Route path="/login" component={BasePage} />
            <Route path="/signup" component={BasePage} />

        </Switch>


    )

}

export default Routes