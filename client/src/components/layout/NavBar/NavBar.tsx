import React, { FunctionComponent, useState, useEffect } from 'react'
import styles from "./NavBar.module.scss";

const NavBar: FunctionComponent = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState("/hamburger2.svg");
    useEffect(() => {
        if(isMenuOpen === true) {
            setMenuIcon("/closed.svg");
        } else {
            setMenuIcon("/hamburger2.svg");
        }
    }, [isMenuOpen])

    return (
        <div className={styles.navbar}>
            <div className="mobile">
                <div className={styles.navbarList}>
                <img src={process.env.PUBLIC_URL + "/logoV2.svg"} alt="logo" />
                <img src={process.env.PUBLIC_URL + menuIcon} alt="menuIcon" className={styles.menuIcon} onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }} />
                </div>
            </div>
            <div className="tablet"> </div>
        </div>
    )
}

export default NavBar;