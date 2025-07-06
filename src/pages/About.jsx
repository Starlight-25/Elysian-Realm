import React from "react";
import Tabs from "../components/Tab.jsx";
import "../styles/About.css";

const title = <h1 className="title">About this guide</h1>;
function About() {
    return (
        <div className="about-container">
            {title}
            <Tabs/>
        </div>
    );
}

export default About;