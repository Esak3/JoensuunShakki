import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./MobileNavBar.scss";


const MobileNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuState, setMenuState] = useState("closed")
    const [menuIcon, setMenuIcon] = useState("/hamburger2.svg");
    useEffect(() => {
        if(isMenuOpen === true) {
            setMenuIcon("/close.svg");
            setMenuState("open");
        } else {
            setMenuIcon("/hamburger2.svg");
            setMenuState("closed");
        }
    }, [isMenuOpen])

    return (
         <div className="mobile">
            <div className="mobileNavbarList">
            <img src={process.env.PUBLIC_URL + "/logoV2.svg"} alt="logo" className="mobileIcon"/>
            <img src={process.env.PUBLIC_URL + menuIcon} alt="menuIcon" className="menuIcon mobileIcon" onClick={() => {
                setIsMenuOpen(!isMenuOpen);
            }} />
            </div>
            <div className={menuState + "Menu menu"}>
                <ul>
                <li><Link>Etusivu</Link></li>
                <li><Link>Uutiset</Link></li>
                <li><Link>Säännöt</Link></li>
                <li><Link>Aloituksia</Link></li>
                <li><Link>Kerhotoiminta</Link></li>
                <li><Link>Yhteystiedot</Link></li>
                </ul>
                
            </div>
        </div>
    );
}

export default MobileNavBar;
