import React from "react";
import Tabs from "../components/Tab.jsx";
import "../styles/Home.css";
import {Link} from "react-router-dom";

function Title() {
    return (<div className="home-title">
        <h1>Elysian Realm Guide</h1>
        <h2>Recommended build v8.3</h2>
    </div>);
}

function getBattlesuitsImagesPaths() {
    const files = import.meta.glob("../data/Builds/*", {eager: true});
    return Object.keys(files).map(
        path => {
            const fullname = path.split("/").pop();
            const battlesuitName = fullname.replace(".json", "");
            const battlesuitImage = `/Elysian-Realm/images/battlesuits/${battlesuitName}.webp`;
            return {name: battlesuitName, image: battlesuitImage};
        }
    );
}

function RenderBattlesuitsImages() {
    return getBattlesuitsImagesPaths().map(
        battlesuitsImage => (
            <Link to={`build/${battlesuitsImage.name}`}>
                <img src={battlesuitsImage.image}/>
            </Link>
        )
    );
}

function Home() {
    return (<div className="home-container">
        <Title/>
        <Tabs/>
        <RenderBattlesuitsImages/>
    </div>);
}

export default Home;