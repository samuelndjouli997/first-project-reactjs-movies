// component/MovieList.js

import React, { useState, useEffect } from "react";

import MoviesCard from "./MoviesCard";

const URL_MOVIES = process.env.REACT_APP_ROOT_URL + "PizzasMovies";

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [single, setSingle] = useState(null);

    useEffect(() => {
        searchMovies();
    }, []);

    const searchMovies = async () => {
        const response = await fetch(URL_MOVIES + "?sort=title&limit=100", {
            method: "GET",
            headers: {
                "xc-auth": process.env.REACT_APP_NOCODB_KEY,
            },
        });
        const data = await response.json();
        setMovies(data);
    };
    return (
        <>
            {movies?.length > 0 ? (
                <>
                    <div className="movies-list">
                        {movies.map((movie) => (
                            <div key={movie.id} onClick={() => setSingle(movie)}>
                                <div className="movies-cover">
                                    <img src={movie.cover} alt="" className="responsive-img" />
                                </div>
                                <p>
                                    <b>{movie.title}</b>
                                </p>
                            </div>
                        ))}
                    </div>

                    {single !== null && (
                        <div className="movies-modal" onClick={() => setSingle(null)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <p className="right-align">
                                    <span
                                        className="btn-floating btn-large waves-effect waves-light red"
                                        onClick={() => setSingle(null)}
                                    >
                                        <i className="material-icons right">close</i>
                                    </span>
                                </p>
                                <MoviesCard movie={single} />
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            )}
        </>
    );
};

export default MoviesList;
