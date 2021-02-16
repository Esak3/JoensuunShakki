import React from 'react'
import { Link } from "react-router-dom"
import { news } from "./newsData";
import NavBar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";

import "../../styles/general.scss";
import "./News.scss";

const NewsPage = () => {
    return (
        <div>
            <NavBar />
            <div className="main newsMain">
                <div className="content newsContent">
                    {news.map((newsStory) => {
                        return (
                            <div className="newsCard">
                                <img src={newsStory.image}></img>
                                <Link>{newsStory.title}</Link>
                            </div>
                        );
                    })}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default NewsPage;
