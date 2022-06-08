// component/MoviesReference.js

import React from "react";

const MoviesReference = ({ title, data }) => {
    return (
        <>
            <p>
                <b>{title}</b> :
                {data.map((ref) => (
                    <span key={ref.id} class="movies-pill">
                        {ref.title}
                    </span>
                ))}
            </p>
        </>
    );
};

export default MoviesReference;
