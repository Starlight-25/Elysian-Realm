import React from "react";

function getNamePretty(name) {
    return name.replace(/_/g, " ")
}

function getBattlesuitImage(name) {
    const path = `/Elysian-Realm/images/battlesuits/${name}.webp`;
    return <img src={path}/>;
}

function getFileName(name) {
    return name.replace(/ /g, "_").replace(/:/g, "")
}

function getWeaponImage(name) {
    const path = `/Elysian-Realm/images/weapons/${getFileName(name)}.webp`;
    return <img src={path}/>;
}

function getStigmataSetImage(name) {
    const paths = ["T", "M", "B"].map(pos => `/Elysian-Realm/images/stigmata/${getFileName(name)}_(${pos}).webp`);
    return paths.map(path => <img src={path}/>)
}

function getSupportImage(name) {
    const path = `/Elysian-Realm/images/supports/${getFileName(name)}.webp`;
    return <img src={path}/>;
}

function getRemembranceSigilImage(name) {
    const path = `/Elysian-Realm/images/remembranceSigil/${getFileName(name)}.webp`;
    return <img src={path}/>;
}

export {
    getNamePretty,
    getBattlesuitImage,
    getWeaponImage,
    getStigmataSetImage,
    getSupportImage,
    getRemembranceSigilImage
};