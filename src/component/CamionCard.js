// component/CamionCard.js

import React from "react";

const CamionCard = ({ camion: { title, description, picture, html } }) => {

    function createHtml(h) {
        return { __html: h };
    }
    return (
        <>
            <h3>{title}</h3>
            <img src={picture} className="responsive-img" alt="" />
            <div dangerouslySetInnerHTML={createHtml(html)}></div>
        </>
    );
};


export default CamionCard;