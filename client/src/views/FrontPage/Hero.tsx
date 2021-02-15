import React, { FunctionComponent } from "react";

import "./Hero.scss";

const Hero: FunctionComponent = () => {
    return (
        <div className="heroImage">
            <div className="heroText">
                <h1>Joensuun Shakki</h1>
                <br></br>
                <p>- Koulumatteja jo vuodesta 1955 -</p>
            </div>
        </div>
    );
} 

export default Hero;