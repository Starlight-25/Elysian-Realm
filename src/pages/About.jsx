import React from "react";
import Tabs from "../components/Tab.jsx";
import "../styles/About.css";

function Title() {
    return <h1 className="about-title">About this guide</h1>;
}

function About() {
    return (
        <div className="about-container">
            <Title/>
            <Tabs/>
        </div>
    );
}

export default About;