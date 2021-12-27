import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home/index";
import Settings from "../pages/Settings";
import Profile from "../pages/profile";
import Upload from "../pages/Upload";
import Dashboard from "../pages/dashboard"

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Home />} />
            </Switch>
        </Router>
    );
}