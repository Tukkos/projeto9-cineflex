import {useState, useEffect} from "react";
import axios from "axios";

import "./moviesScreen.css";

export default function MoviesScreen() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setMovies(resposta.data);
        })
    }, []);

    console.log(movies);
    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o filme</p>
            </div>

            <div className="movies">
                {movies.map((movie, index) => (
                    <div className="movieBanner">
                        <img src={movie.posterURL} alt={index} />
                    </div>
                ))}
            </div>
            
        </>
    );
}