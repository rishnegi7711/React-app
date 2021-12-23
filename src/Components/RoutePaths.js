import BasePage from "./BasePage";
import { Routes, Route } from "react-router-dom";
import React from "react";

const RoutePaths = () => {
    return (
        <Routes>
            <Route path="*" element={<main><h2>There is nothing here!</h2></main>} />
            <Route path="/dashboard" element={<main><h2>Dasboard will be added here!</h2></main>} />
            <Route path="/" element={<BasePage />} />
            <Route path="/login" element={<BasePage />} />
            <Route path="/signup" element={<BasePage />} />
        </Routes>
    )
}

export default RoutePaths