import React from "react";
import {useParams} from "react-router-dom";
import Tabs from "../components/Tab.jsx";

function Title({name}) {
    return (
        <div className="build-title">
            <h1>{name.replace(/_/g, " ")}</h1>
            <img src={`/Elysian-Realm/images/battlesuits/${name}.webp`}/>
        </div>
    );
}

function BuildPage() {
    const {name} = useParams();  // récupère le battlesuit sélectionné
    return (
        <div>
            <Title name={name}/>
            <Tabs/>
        </div>
    );
}

export default BuildPage;
