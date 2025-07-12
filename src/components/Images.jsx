import React from "react";

function getNamePretty(name) {
    return name.replace(/_/g, " ").replace(/-/g, ":");
}

function getBattlesuitImage(name) {
    const path = `/Elysian-Realm/images/battlesuits/${name}.webp`;
    return <img src={path}/>;
}

function getFileName(name) {
    return name.replace(/ /g, "_").replace(/:/g, "-")
}

function getWeaponImage(name) {
    const path = `/Elysian-Realm/images/weapons/${getFileName(name)}.webp`;
    return (
        <div className="weapon-image image-container">
            <img src={path}/>
            <div className="weapon-image hover-text">{name}</div>
        </div>
    );
}

function getStigmataSetImage(name) {
    const paths = ["T", "M", "B"].map(pos => ({
        path: `/Elysian-Realm/images/stigmata/${getFileName(name)}_(${pos}).webp`,
        name: `${name} (${pos})`
    }));
    return paths.map(path => (
        <div className="stigma-image image-container">
            <img src={path.path}/>
            <div className="stigma-image hover-text">{path.name}</div>
        </div>
    ))
}

function getSupportImage(name) {
    const path = `/Elysian-Realm/images/supports/${getFileName(name)}.webp`;
    return (
        <div className="support-image image-container">
            <img src={path}/>
            <div className="support-image hover-text">{name}</div>
        </div>
    );
}

function getRemembranceSigilImage(name) {
    const path = `/Elysian-Realm/images/remembranceSigil/${getFileName(name)}.webp`;
    return (
        <div className="remembrancesigil-image image-container">
            <img src={path}/>
            <div className="remembrancesigil-image hover-text">{name}</div>
        </div>
    );
}

function getSignetImage(name) {
    const path = `/Elysian-Realm/images/signets/${getFileName(name).replace("Signets", "Signet")}.png`;
    return <img src={path}/>;
}

export {
    getNamePretty,
    getBattlesuitImage,
    getWeaponImage,
    getStigmataSetImage,
    getSupportImage,
    getRemembranceSigilImage,
    getSignetImage
};