import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Tabs from "../components/Tab.jsx";
import Table from "../components/Table.jsx";
import {
    getBattlesuitImage, getNamePretty,
    getRemembranceSigilImage, getSignetImage,
    getStigmataSetImage,
    getSupportImage,
    getWeaponImage
} from "../components/Images.jsx";
import "../styles/Build.css";

function Title({name}) {
    return (
        <div className="battlesuit-title">
            <h1>{getNamePretty(name)}</h1>
            {getBattlesuitImage(name)}
        </div>
    );
}

function ShowBuilds({name}) {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            import(`../data/Builds/${name}.json`)
                .then(
                    module => {
                        setData(module.default)
                    }
                )
                .catch(err => console.error('Erreur chargement JSON:', err));
        }, []
    );

    return (
        <div>
            {data.map(build => showBuild(build))}
        </div>
    );
}

function showBuild(build) {
    return (
        <div className="build">
            <h1>{build["Build Name"] || ""}</h1>
            <GearRecommendation build={build}/>
            <Buffs buffs={build.Buffs}/>
            <Support support={build.Support}/>
            <RemembranceSigil sigil={build["Remembrance Sigil"]}/>
            <EgoSignets signets={build["Ego Signets"]}/>
            <MainSignets signets={build["Main Signets"]}/>
            <SecondarySignets signetsList={build["Secondary Signets"]}/>
            <OptionalSignets signetsList={build["Optional Signets"]}/>
        </div>
    );
}

function GearRecommendation({build}) {
    return (
        <div className="gear-recommendation">
            <h2>Gear Recommendation</h2>
            <p><strong>Weapon</strong> {getWeaponImage(build.Weapon)}</p>
            <p><strong>Stigmata</strong>
                <div className="stigmata-grid">{getStigmataSetImage(build.Stigmata)}</div>
            </p>
        </div>
    );
}

function Buffs({buffs}) {
    return (
        <div className="buffs">
            <h2>Buffs</h2>
            <Table head={["Cost", "Effect"]} items={buffs.map(buff => [buff.Cost, buff.Effect])}/>
        </div>
    );
}

function Support({support}) {
    const utility = support.Utility;
    const damage = support.Damage;
    return (
        <div className="support">
            <h2>Support</h2>
            <Table head={["Type", "Support1", "Support2"]} items={[
                ["Utility", getSupportImage(utility.Support1), getSupportImage(utility.Support2)],
                ["Damage", getSupportImage(damage.Support1), getSupportImage(damage.Support2)]
            ]}/>
        </div>
    );
}

function RemembranceSigil({sigil}) {
    const start = sigil.Start;
    const firstShop = sigil["1st Shop"];
    const floor16 = sigil["16F"];
    return (
        <div className="remembrance-sigil">
            <h2>Remembrance Sigil</h2>
            <Table head={["Time", "General", "Support"]} items={[
                ["Start", getRemembranceSigilImage(start.General), getRemembranceSigilImage(start.Support)],
                ["1st Shop", getRemembranceSigilImage(firstShop.General), getRemembranceSigilImage(firstShop.Support)],
                ["16F", getRemembranceSigilImage(floor16.General), getRemembranceSigilImage(floor16.Support)]
            ]}/>
        </div>
    );
}

function EgoSignets({signets}) {
    return (
        <div className="ego-signets">
            <h2>Ego Signets</h2>
            <Table head={signets.map(signet => signet.Name)} items={[signets.map(signet => signet.Recommendation)]}/>
        </div>
    );
}

function ShowSignets({signets}) {
    return (
        <div className="signets">
            {getSignetImage(signets.Name)}
            <div className="signets-text">
                <h3>{signets.Name}</h3>
                <h4>Owner: {signets.Owner}</h4>
            </div>
            <ul>{signets.Signet.map(signet => <li>{signet}</li>)}</ul>
        </div>
    )
}

function MainSignets({signets}) {
    return (
        <div className="main-signets">
            <h2>Main Signets</h2>
            <ShowSignets signets={signets}/>
        </div>
    );
}

function SecondarySignets({signetsList}) {
    return (
        <div className="secondary-signets">
            <h2>Secondary Signets</h2>
            {signetsList.map(signets => <ShowSignets signets={signets}/>)}
        </div>
    );
}

function OptionalSignets({signetsList}) {
    if (signetsList.length === 0) {
        return null;
    }
    return (
        <div className="optional-signets">
            <h2>Optional Signets</h2>
            {signetsList.map(signets => <ShowSignets signets={signets}/>)}
        </div>
    );
}


function BuildPage() {
    const {name} = useParams();  // récupère le battlesuit sélectionné
    return (
        <div className="build-container">
            <Title name={name}/>
            <Tabs/>
            <ShowBuilds name={name}/>
        </div>
    );
}

export default BuildPage;
