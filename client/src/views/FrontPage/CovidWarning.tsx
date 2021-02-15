import React, { FunctionComponent } from "react";

import "./CovidWarning.scss";

const CovidWarning: FunctionComponent = () => {
    return (
        <div className = "warning">
            <h1>Huomio!</h1>
            <p>Viime viikon korona-altistuksen takia emme keräänny viikolla 5 pelaamaan. Kerhotoiminta jatkuu normaalisti ensi viikolla. Muistathan olla aina tulematta peli-iltoihin jos sinulla on mitään koronaan viittaavia oireita!</p>
        </div>
    )
}

export default CovidWarning;