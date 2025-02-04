import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/dashboard/index";
import ValentinePage from "./views/valentine/index";
import SendEmailView from './views/email/SendEmailView'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<>implement about...</>} />
                <Route path="/valentine" element={<ValentinePage />} />
                <Route path="/email" element={<SendEmailView />}/>
                <Route path="*" element={<>implement not found</>} /> {/* Handles unknown routes */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
