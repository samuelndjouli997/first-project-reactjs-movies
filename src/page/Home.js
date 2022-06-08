// home.js

import React, { useEffect, useState } from "react";
import CamionCard from "../component/CamionCard";
import Map from "../component/Map";
import Progress from "../component/Progress";

const URL_CAMION = process.env.REACT_APP_ROOT_URL + "PizzasArticles"

const Home = () => {

    const [camions, setCamions] = useState([]);

    useEffect(() => {
        searchCamions();
    }, []);

    const searchCamions = async() => {
        // fetch 
        const response = await fetch(URL_CAMION + "?sort=id", {
            method: "GET",
            headers: {
                "xc-auth": process.env.REACT_APP_NOCODB_KEY,
            },
        });
        const data = await response.json();

        console.table(data);
        setCamions(data);

    };

    return (
        <>
            <h1>Ceci est la Home</h1>
            {camions?.length > 0 ? (
                <>
                    <div className="row">
                        <div className="col s6">
                            <CamionCard camion={camions[0]} />
                        </div>
                        <div className="col s6">
                            < Map />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s6">
                            <CamionCard camion={camions[1]} />
                        </div>
                        <div className="col s6">
                            <CamionCard camion={camions[2]} />
                        </div>
                    </div>
                </>
            ) : (
                <Progress />
            )}
        </>
    );
};

export default Home;