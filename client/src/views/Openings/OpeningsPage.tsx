import React from 'react'
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import "../../styles/general.scss";
import "./Openings.scss";

const OpeningsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="content openingsContent">
                    <h1>Aloituksia</h1>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OpeningsPage;