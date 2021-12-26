import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Switch>
        </Router>
    );
}