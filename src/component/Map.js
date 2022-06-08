// component/Map.js

/*
-   Charger les données... PizzasEmplacements
-   Afficher les infos
-   Tenter la carte
    https://react-leaflet.js.org/

    48.90945    2.24685
*/
import React, { useState, useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const URL_EMP = process.env.REACT_APP_ROOT_URL + "PizzasEmplacements";
const Map = () => {
    const [emplacements, setEmplacements] = useState([]);

    useEffect(() => {
        searchEmplacements();
    }, []);

    const searchEmplacements = async () => {
        const response = await fetch(URL_EMP + "?sort=dates", {
            method: "GET",
            headers: {
                "xc-auth": process.env.REACT_APP_NOCODB_KEY,
            },
        });
        const data = await response.json();
        console.table(data);
        setEmplacements(data);
    };
    return (
        <>
            {emplacements?.length > 0 ? (
                
                <>
                    <MapContainer
                        id="map"
                        center={[48.90945, 2.24685]}
                        zoom={13}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {emplacements.map((emp) => (
                            <Marker position={[emp.lat, emp.lng]}>
                                <Popup>
                                    <b>{emp.dates}</b> {emp.title}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>

                    <ul>
                        {emplacements.map((emp) => (
                            <li key={emp.id}>
                                <b>{emp.dates}</b> {emp.title}
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div>Il y a rien</div>
            )}
        </>
    );
};

export default Map;
