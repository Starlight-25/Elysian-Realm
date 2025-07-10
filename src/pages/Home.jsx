import React from "react";
import Tabs from "../components/Tab.jsx";
import "../styles/Home.css";

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
            const battlesuitImage = "images/battlesuits/" + fullname.replace(".json", ".webp");
            return battlesuitImage;
        }
    );
}

function RenderBattlesuitsImages() {
    return getBattlesuitsImagesPaths().map(battlesuitsImage => <img src={battlesuitsImage}/>);
}

function Home() {
    return (<div className="home-container">
        <Title/>
        <Tabs/>
        <RenderBattlesuitsImages/>
    </div>);
}

export default Home;