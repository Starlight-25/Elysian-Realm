import React from "react";
import Tabs from "../components/Tab.jsx";
import {Link} from "react-router-dom";
import {getBattlesuitImage, getNamePretty} from "../components/Images.jsx";
import "../styles/Home.css";
import "../styles/ImageHover.css";

function Title() {
    return (<div className="home-title">
        <h1>Elysian Realm Guide</h1>
        <h2>Recommended build v8.3</h2>
    </div>);
}

function getBattlesuitsImagesName() {
    const files = import.meta.glob("../data/Builds/*", {eager: true});
    return Object.keys(files).map(
        path => {
            const fullname = path.split("/").pop();
            const battlesuitName = fullname.replace(".json", "");
            return battlesuitName;
        }
    );
}

function RenderBattlesuitsImages() {
    return (
        <div className="battlesuits-image-grid">
            {getBattlesuitsImagesName().map(name => (
                <Link to={`build/${name.replace(/-/g, "")}`}>
                    <div className="home-title image-container">
                        {getBattlesuitImage(name)}
                        <div className="home-title hover-text">{getNamePretty(name)}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

function Home() {
    return (
        <div className="home-container">
            <Title/>
            <Tabs/>
            <RenderBattlesuitsImages/>
        </div>
    );
}

export default Home;