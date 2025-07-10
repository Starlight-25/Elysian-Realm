import React from "react";
import { useParams } from "react-router-dom";

function BuildPage() {
    const { name } = useParams();  // récupère le battlesuit sélectionné
    return (
        <div>
            <h1>Build: {name.replace(/_/g, " ")}</h1>
        </div>
    );
}

export default BuildPage;
