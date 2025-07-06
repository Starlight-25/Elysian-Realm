import React from "react";
import Tabs from "../components/Tab.jsx";
import "../styles/Home.css";

const title = <><h1>Elysian Realm Guide</h1>
<h2>Recommended build v8.3</h2></>;

function Home() {
    return (
        <div className="home-container">
            {title}
            <Tabs/>
        </div>
    );
}

export default Home;