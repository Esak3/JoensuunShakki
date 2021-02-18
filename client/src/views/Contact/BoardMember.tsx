import React from "react";

import "./BoardMember.scss";

const BoardMember = (props) => {
    const {title, name, phoneNumber, email} = props.member;

    return (
        <div className="cardContainer">
            <div className="infoWrapper">
                <h3>{title}</h3>
                <p>{name}</p>
                <p>{phoneNumber}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default BoardMember;