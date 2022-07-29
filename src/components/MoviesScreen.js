import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./moviesScreen.css";

export default function MoviesScreen() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        request.then(res => {
            setMovies(res.data);
            console.log(movies);
        })
    }, []);

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o filme</p>
            </div>

            <div className="movies">
                {movies.map((movie, index) => (
                    <div className="movieBanner" key={index}>
                        <Link to={`/sessoes/${movie.id}`}>
                            <img src={movie.posterURL} alt={movie.title} />
                        </Link>
                    </div>
                ))}
            </div>
            
        </>
    );
}