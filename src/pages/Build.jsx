import React, {useEffect, useState} from "react";
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
        <div>
            <h1>{build["Build Name"] || ""}</h1>
            <p><strong>Weapon:</strong> {build.Weapon}</p>
            <p><strong>Stigmata:</strong> {build.Stigmata}</p>

            <h2>Buffs</h2>
            {build.Buffs.map(buff =>
                (
                    <>
                        <p>{buff.Cost}</p>
                        <p>{buff.Effect}</p>
                    </>
                )
            )}

            <h2>Support</h2>
            <p><strong>Utility</strong></p>
            <p>{build.Support.Utility.Support1} & {build.Support.Utility.Support2}</p>
            <p><strong>Damage</strong></p>
            <p>{build.Support.Damage.Support1} & {build.Support.Damage.Support2}</p>

            <h2>Remembrance Sigil</h2>
            <p><strong>Start</strong></p>
            <p><strong>General:</strong> {build["Remembrance Sigil"].Start.General}
                <strong>Support:</strong> {build["Remembrance Sigil"].Start.Support}</p>
            <p><strong>1st Shop</strong></p>
            <p><strong>General:</strong> {build["Remembrance Sigil"]["1st Shop"].General}
                <strong>Support:</strong> {build["Remembrance Sigil"]["1st Shop"].Support}</p>
            <p><strong>16F</strong></p>
            <p><strong>General:</strong> {build["Remembrance Sigil"]["16F"].General}
                <strong>Support:</strong> {build["Remembrance Sigil"]["16F"].Support}</p>

            <h2>Ego Signets</h2>
            {build["Ego Signets"].map(signet => (
                <p>{signet.Name}: {signet.Recommendation}</p>
            ))}

            <h2>Main Signet</h2>
            <h3>{build["Main Signet"].Name}: {build["Main Signet"].Owner}</h3>
            {build["Main Signet"].Signet.map(signet => (
                <p>{signet}</p>
            ))}

            <h2>Signets</h2>
            {build.Signets.map(Signets => (
                <>
                    <h3>{Signets.Name}: {Signets.Owner}</h3>
                    {Signets.Signet.map(signet =>
                        <p>{signet}</p>
                    )}
                </>
            ))}

            <h2>Optional Signets</h2>
            {build["Optional Signets"].map(Signets => (
                <>
                    <h3>{Signets.Name}: {Signets.Owner}</h3>
                    {Signets.Signet.map(signet =>
                        <p>{signet}</p>
                    )}
                </>
            ))}
        </div>
    );
}

function BuildPage() {
    const {name} = useParams();  // récupère le battlesuit sélectionné
    return (
        <div>
            <Title name={name}/>
            <Tabs/>
            <ShowBuilds name={name}/>
        </div>
    );
}

export default BuildPage;
