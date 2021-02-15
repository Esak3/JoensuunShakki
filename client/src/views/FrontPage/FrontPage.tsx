import React, { FunctionComponent } from 'react'

import NavBar from "../../components/layout/NavBar"
import Hero from "./Hero";
import CovidWarning from "./CovidWarning";
import Footer from "../../components/layout/Footer"

import "../../styles/general.scss";
import "./FrontPage.scss";

const FrontPage: FunctionComponent = () => {
    return (
        <div>
            
            <NavBar />
            <div className="main">
                
                <Hero />
                <CovidWarning />
                <p className="mainPageTexts">Joensuun Shakki on toiminut aktiivisesti jo vuodesta 1955. Aktiivisia jäseniä meillä on tällä hetkellä noin 30. Keräännymme pelaamaan shakkia kahdesti viikossa ja järjestämme monipuolista shakkitoimintaa ympäri vuoden. Tähän kuuluu kerhotapaamisten ulkopuolella tapahtuva internetissä järjestetty shakkitoiminta sekä ympäri maailmaa tapahtuviin shakkitapahtumiin osallistuminen.</p>
                <Footer />
            </div>
            
        </div>
    )
}

export default FrontPage;
