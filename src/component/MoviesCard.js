// component/MoviesCard.js

import React from "react";

import MoviesReference from "./MoviesReference";

const MoviesCard = ({ movie }) => {

    return (
        <>
            <div className="row">
                <div className="col s4">
                    <img src={movie.cover} alt="" className="responsive-img" />

                    <p>
                        <a
                            href={movie.imdburl}
                            target="_blank"
                            className="waves-effect waves-light btn-small"
                            rel="noreferrer"
                        >
                            IMDB <i class="material-icons right">exit_to_app</i>
                        </a>
                    </p>
                </div>
                <div className="col s8">
                    <h2 style={{ marginTop: 0 }}>{movie.title}</h2>
                    <p>
                        <big>{movie.plot}</big>
                    </p>
                    <p>
                        <b>Durée</b> : {movie.runtime} mins
                    </p>

                    <MoviesReference title="Genre" data={movie.PizzasMoviesGenreMMList} />
                    <MoviesReference title="Pays" data={movie.PizzasMoviesCountryMMList} />
                    <MoviesReference title="Langue" data={movie.PizzasMoviesLanguageMMList} />
                    <MoviesReference title="Réalisateur" data={movie.PizzasMoviesDirectorMMList} />
                    <MoviesReference title="Acteurs" data={movie.PizzasMoviesActorsMMList} />
                </div>
            </div>
        </>
    );
};

export default MoviesCard;
