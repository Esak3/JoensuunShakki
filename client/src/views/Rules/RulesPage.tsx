import React from 'react'
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import "../../styles/general.scss";
import "./Rules.scss";

const RulesPage = () => {
    return (
        <div>
            <div>
            <NavBar />
            <div className="main rulesMain">
                <div className="content rulesContent">
                    <h1>Säännöt</h1>
                    <p>Shakki on strateginen lautapeli jossa kaksi pelaajaa siirtää vuorotellen nappuloitaan 8x8 kokoisella laudalla. Pelin tavoitteena on saada vastustaja ”shakkimattiin” eli tilanteeseen jossa hän ei voi estää pelaajaa syömästä hänen kuningastaan. Vastapelaajan nappuloiden syöminen tapahtuu liikuttamalla oma nappula hänen nappulan ruutuun, poistaen tämän pelistä. Kummallakin pelaajalla, eli mustalla ja valkoisella, on käytössään 16 pelinappulaa: kuningas, kuningatar, 2 tornia, 2 lähettiä, 2 ratsua sekä 8 sotilasta.  </p>
                    <div className="aloitusLauta">
                        <img src={process.env.PUBLIC_URL + "/aloituslauta.png"} alt="aloituslauta"/>
                        <p>Valkoisella pelaajalla ylärivillä sotilaat ja alarivillä vasemmalta oikealle: torni, ratsu, lähetti, kuningatar ja kuningas</p>
                    </div>
                    <p>Näistä jokainen liikkuu uniikisti:</p>
                    <p>- Kuningas yhden ruudun mihin tahansa suuntaan. Kuninkaalla voi myös tehdä linnoituksen, josta lisää myöhemmin.</p>
                    <p>- Torni liikkuu suoraan (ylös, alas, vasemmalle tai oikealle) niin pitkälle kuin pelaaja haluaa, muttei kuitenkaan toisten nappuloiden yli.</p>
                    <p>- Lähetti liikkuu viistoon niin pitkälle kuin pelaaja haluaa, muttei kuitenkaan toisten nappuloiden yli.</p>
                    <p>- Kuningataressa yhdistyy tornin ja lähetin liikkuminen, eli joko suoraan tai viistoon. Tämä tekee siitä pelilaudan voimakkaimman nappulan.</p>
                    <p>- Ratsu liikkuu kaksi ruutua suoraan ja yhden ruudun sivulle. Tästä tulee siis L-kirjaimen muotoinen reitti. Ratsu pystyy hyppimään muiden nappuloiden yli.</p>
                    <p>- Sotilas liikkuu yhden ruudun ylöspäin. Poikkeuksena tästä on sotilaan ensimmäinen siirto jolloin se voi liikkua kaksi ruutua. Sotilas myös syö vain etuviistoon.</p>

                    <h3>Kuninkaaseen liittyviä erikoissääntöjä</h3>

                    <p>Kun kuningasta uhataan syödä vastustajan ensi vuorolla, on tällöin kuningas ”shakissa”. Tällöin pelaaja voi liikuttaa nappuloitaan ainoastaan niin ettei vastustaja enää voi syödä sitä ensi vuorolla. Jos tähän ei pysty, on tilanne tällöin ”shakkimatti” eli kuninkaan ensi vuorolla syövä pelaaja voittaa. Jos taas puolustava pelaaja ei voi liikuttaa yhtäkään nappuloistaan eikä hänen kuningas ole shakissa, on tilanne ”patti” jolloin peli päättyy tasapeliin.</p>
                    <p>Kuningas voi kerran pelissä tehdä linnoituksen jossa kuningas liikkuu kaksi ruutua sivulle ja torni liikkuu kuninkaan toiselle puolelle. Tämän tehdäkseen kuningas tai torni eivät ole saaneet liikkua pelin aikana, kuninkaan ja tornin välissä ei saa olla muita pelinappuloita ja kuningas ei saa olla shakissa tai kulkea ruutujen läpi joihin vastustajan nappula voisi liikkua.</p>

                    <h3>Sotilaaseen liittyviä erikoissääntöjä</h3>

                    <p>Jos sotilas saa kuljettua laudan läpi vastustajan päätyyn, se ylennetään eli vaihdetaan samanäriseen mutta pelaajan valitsemaan ylempiarvoiseen pelinappulaan. Sotilaan voi ylentää kaikkiin muihin nappuloihin paitsi kuninkaaseen.</p>
                    <p>Jos sotilas aloitussiirrokseen siirtyy kaksi ruutua ja päätyy vastapuolen pelaajan sotilaan viereen, vastapuolen pelaaja voi tehdä ohestalyönnin(ranskaksi en passant), jolla syödään sotilas niin kuin se olisi siirtynyt vain yhden ruudun.</p>

                    <h3>Jos jaksoit lukea tänne asti, osaat nyt shakin säännöt ja olet valmis pelaamaan!</h3>
                </div>
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default RulesPage;
