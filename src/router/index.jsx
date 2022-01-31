import React from "react";
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
} from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Home from "../pages/home/index";
import Settings from "../pages/settings";
import Profile from "../pages/profile";
import Upload from "../pages/upload";
import Dashboard from "../pages/dashboard"
import Chat from "../pages/chat";
import Footer from "../pages/footer";

export default function Routes({ ...rest }) {
    return (
        <Router>
            <Switch>
                <Route path="/login" element={<Login {...rest} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Settings" element={<Settings {...rest} />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/dashboard" element={<Dashboard {...rest} />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/footer" element={<Footer {...rest} />} />
                <Route path="/" element={<Home />} />
            </Switch>
        </Router>
    );
}