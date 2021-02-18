import React from 'react'
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import "../../styles/general.scss";
import "./ContactPage.scss";

import { boardMemberData } from "./boardMembers";

import BoardMember from "./BoardMember";

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="content contactContent">
                    <h1>Yhteystiedot</h1>
                    <p>Ota rohkeasti yhteyttä jos sinulla on kysyttävää kerhomme toiminnasta!</p>
                    <p>joensuunshakki@gmail.com</p>

                    <p className="mapTitle">Kerhotilamme löytyvät osoitteesta Viistokuja 3, 80110, Joensuu.</p>
                    <img src={process.env.PUBLIC_URL + "/viistokuja3.png"} alt="google maps kuva kerhotilojen sijainnista"></img>

                    <h3>Hallituksen jäsenet</h3>
                    <div className="memberCardContainer">
                    {boardMemberData.map((member) => {
                        
                        return (
                            <BoardMember member={member} />
                        )
                        
                    })}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ContactPage;