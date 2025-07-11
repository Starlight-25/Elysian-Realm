import React from "react";

function getBattlesuitImage(name){
    const path = `/Elysian-Realm/images/battlesuits/${name}.webp`;
    return <img src={path}/>;
}

function getSupportImage(name){
    const path = `/Elysian-Realm/images/supports/${name.replace(/ /g, "_").replace(/:/g, "")}.webp`;
    return <img src={path}/>;
}

function getRemembranceSigilImage(name){
    const path = `/Elysian-Realm/images/remembranceSigil/${name.replace(/ /g, "_")}.webp`;
    return <img src={path}/>;
}

export {getBattlesuitImage, getSupportImage, getRemembranceSigilImage};