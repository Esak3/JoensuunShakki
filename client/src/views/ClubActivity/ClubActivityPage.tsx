import React from 'react'
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import "../../styles/general.scss";
import "./ClubActivity.scss";

const ClubActivityPage = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="content clubActivityContent">
                    <h1>Kerhotoiminta</h1>
                    <p>Joensuun Shakin kerhoillat ovat tiistaisin ja lauantaisin vuoden ympäri osoitteessa Viistokuja 3, 80100 Joensuu. Kerhoillat alkavat kello 18 ja päättyvät viimeistään kello 22. Tiistaisin pelaamme pikashakkiturnauksia ja torstaisin 15+15 minuutin turnauksia.</p>
                    <p>Jäsenmaksu vuodelle 2021 on 30 euroa. Lähetäthän maksun tilille FI12 1231 1231 1231 12.</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ClubActivityPage;