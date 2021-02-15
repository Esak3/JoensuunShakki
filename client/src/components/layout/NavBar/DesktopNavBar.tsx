import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./DesktopNavBar.scss";


const DesktopNavBar = () => {

    return (
        <div className="desktopNavBar">
            <div className="desktopNavBarList">
                <ul>
                    <li><Link><img src={process.env.PUBLIC_URL + "/logoV2.svg"} alt="logo" className="desktopLogo"/></Link></li>
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

export default DesktopNavBar;