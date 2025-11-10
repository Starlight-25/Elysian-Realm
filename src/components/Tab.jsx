import React from "react";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import "../styles/Tab.css";
import Build from "../pages/Build.jsx";

export function TabsRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/build" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/build/:name" element={<Build />} />
            </Routes>
        </HashRouter>
    );
}

function Tabs() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About this guide</Link>
            <a href="https://rentry.org/ElysianRealm" target="_blank" rel="noopener noreferrer">Rentry Page</a>
        </nav>
    );
}

export default Tabs;