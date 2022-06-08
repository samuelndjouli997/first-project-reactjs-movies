// movies.js

import React from "react";
import MoviesList from "../component/MoviesList";

const Movies = () => {
    return <>
        <h1>Ceci est la page Movies</h1>

        <div className="row">
            <div className="col s3">@soon</div>
            <div className="col s9">
                <MoviesList />
            </div>

        </div>
    </>
}

export default Movies;