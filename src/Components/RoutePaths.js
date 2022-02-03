import { Routes, Route } from "react-router-dom";
import React from "react";
import BasePage from "./BasePage";
import Dashboard from "./Dashboard";
import Create from "./Create";
import All from "./All";
import ProtectedRoute from "../hoc/ProtectedRoute";



const RoutePaths = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
                <Route path="all" element={<All />} />
                <Route path="create" element={<Create />} />
            </Route>

            <Route path="/" element={<BasePage />} />
            <Route path="/login" element={<BasePage />} />
            <Route path="/signup" element={<BasePage />} />
        </Routes>
    )
}

export default RoutePaths