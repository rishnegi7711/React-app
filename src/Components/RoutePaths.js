import { Routes, Route } from "react-router-dom";
import React from "react";
import BasePage from "./BasePage";
import Dashboard from "./Dashboard";
import Create from "./Create";

const RoutePaths = () => {
    return (
        <Routes>
            {/* <Route path="*" element={<main><h2>There is nothing here!</h2></main>} /> */}
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="all" element={<main><h2>Working space will be added here</h2></main>} />
                <Route path="create" element={<Create />} />
            </Route>

            <Route path="/" element={<BasePage />} />
            <Route path="/login" element={<BasePage />} />
            <Route path="/signup" element={<BasePage />} />
        </Routes>
    )
}

export default RoutePaths