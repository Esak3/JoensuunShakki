import React from 'react'
import { Link } from "react-router-dom";
import "./DesktopNavBar.scss";


const DesktopNavBar = () => {

    return (
        <div className="desktopNavBar">
            <div className="desktopNavBarList">
                <ul>
                    <li><Link><img src={process.env.PUBLIC_URL + "/logoV2.svg"} alt="logo" className="desktopLogo"/></Link></li>
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/uutiset">Uutiset</Link></li>
                    <li><Link to="/saannot">Säännöt</Link></li>
                    <li><Link to="/aloituksia">Aloituksia</Link></li>
                    <li><Link to="/kerhotoiminta">Kerhotoiminta</Link></li>
                    <li><Link to="/yhteystiedot">Yhteystiedot</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default DesktopNavBar;