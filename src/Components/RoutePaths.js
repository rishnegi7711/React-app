import { Routes, Route } from "react-router-dom";
import React from "react";
import BasePage from "./BasePage";
import Dashboard from "./Dashboard";

const RoutePaths = () => {
    return (
        <Routes>
            <Route path="*" element={<main><h2>There is nothing here!</h2></main>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/all" element={<main><h2>Working space will be added here</h2></main>} />
            <Route path="/dashboard/create" element={<main><h2>Note creation space will be added here</h2></main>} />
            <Route path="/" element={<BasePage />} />
            <Route path="/login" element={<BasePage />} />
            <Route path="/signup" element={<BasePage />} />
        </Routes>
    )
}

export default RoutePaths