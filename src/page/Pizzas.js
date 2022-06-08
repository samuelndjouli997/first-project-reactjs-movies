// pizza.js

import React, { useState, useEffect } from "react";

import PizzaCard from "../component/PizzaCard";

console.log(process.env.REACT_APP_ROOT_URL);

const URL_PIZZAS = process.env.REACT_APP_ROOT_URL + "Pizzas";

const Pizzas = () => {
    // declaration
    const[pizzas, setPizzas] = useState([]);
    const[pizzasTomate, setPizzasTomate] = useState([]);
    const[pizzasCreme, setPizzasCreme] = useState([]);

    // 
    useEffect( () => {
        searchPizzas();
    }, [])

    const searchPizzas = async() => {
        // fetch 
        const response = await fetch(URL_PIZZAS + "?sort=-category,name", {
            method: "GET",
            headers: {
                "xc-auth": process.env.REACT_APP_NOCODB_KEY,
            },
        });
        const data = await response.json();

        // crééer 2 tableaux temporaires

        // let dataC = [];
        // let dataT = [];

        // data.map((pizza) => {
        //     if ( pizza.category == "tomate" ) {
        //         dataT.push(pizza);
        //      } else {
        //         dataC.push(pizza);
        //             }          
                        
        // });

        let dataC = data.filter((pizza) => pizza.category === "creme");
        let dataT = data.filter((pizza) => pizza.category === "tomate");
             
        setPizzasTomate(dataT);
        setPizzasCreme(dataC);

        // faire une boucle sur data
        // if ....
        // set setPizzasTomate et setPizzasCreme     

        console.table(data[0]);
        setPizzas(data);
    };
    

    return (
        <>
            <h1>Ceci est la page Pizzas</h1>
            {pizzas?.length > 0 ? (
            <>
                <h2>Tomates</h2>
                <div className="row">
                    {pizzasTomate.map((pizza) => (
                        
                        <PizzaCard pizza={pizza} key={pizza.id} />
                    ))}
                </div>

                <h2>Creme</h2>
                <div className="row">
                    {pizzasCreme.map((pizza) => (
                        
                        <PizzaCard pizza={pizza} key={pizza.id} />
                    ))}
                </div>
            </>
                
            ) : (
                <div>Pas de pizzas</div>
            )}
        </>
    ); 
};

export default Pizzas;