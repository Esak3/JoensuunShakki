import React, { FunctionComponent, useState, useEffect } from 'react'
import "./NavBar.scss";

import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

const NavBar: FunctionComponent = () => {
    
    const screenWidth = useScreenWidth();

    const [hideMobileNav, setHideMobileNav] = useState(false);
    const [hideDesktopNav, setHideDesktopNav] = useState(true);
    useEffect(() => {
        if(screenWidth !== undefined && screenWidth < 720) {
            setHideMobileNav(false);
            setHideDesktopNav(true);
        } else {
            setHideMobileNav(true);
            setHideDesktopNav(false);
        }
    }, [screenWidth]);

    return (
        <div className="navbar">
            { hideMobileNav ? null : <MobileNavBar /> }
            { hideDesktopNav ? null : <DesktopNavBar />}
        </div>
    )
}

const useScreenWidth = () => {   
    const [screenWidth, setScreenWidth] = useState<number>();

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return screenWidth;
}

export default NavBar;