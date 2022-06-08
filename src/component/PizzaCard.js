// component/PizzaCard.js


import React from "react";

const PizzaCard = ({ pizza: { name, ingredients, picture } }) =>{
    return (
        <div className="col s3">
            <div className="card medium">
                <div className="card-image">
                    <img src={picture} alt="" />
                </div>
                <div className="card-content">
                    <p>
                        <b>{name}</b>
                    </p>
                    <p>{ingredients}</p>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;