import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";

export function TabsRoutes() {
    return (
        <BrowserRouter basename={"/Elysian-Realm"}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

function Tabs() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About this page</Link>
        </nav>
    );
}

export default Tabs;