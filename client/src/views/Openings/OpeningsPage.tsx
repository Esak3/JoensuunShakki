import React from 'react'
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import ReactPlayer from "react-player/youtube";

import "../../styles/general.scss";
import "./Openings.scss";

const OpeningsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="content openingsContent">
                    <h1>Aloituksia</h1>
                    <h3>King's Indian (engl)</h3>
                    <ReactPlayer url="https://www.youtube.com/watch?v=kK0cq6UBt1Y" width="100%" controls={true}/>
                    <h3>Ruy Lopez (engl)</h3>
                    <ReactPlayer url="https://www.youtube.com/watch?v=GFWI3gkizZg" width="100%" controls={true}/>
                    <h3>Caro Kann (engl)</h3>
                    <ReactPlayer url="https://www.youtube.com/watch?v=rmbU97iftC8" width="100%" controls={true}/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default OpeningsPage;