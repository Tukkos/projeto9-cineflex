import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./movieSessions.css";

export default function MovieSessions() {
    const params = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const request = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`
        );

        request.then((res) => {
            setMovie(res.data);
            // console.log(movie);
        })
    }, [params.idFilme]);

    if(movie.length === 0) {
        return <div className="selectionTitle"><img className="loading" src="https://www.lcrmscp.gov/assets/images/loader-bb533f76423cab3aa8f798501357e763.gif" alt="" /></div>;
    }

    console.log(movie);

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o horário</p>
            </div>

            <div className="movieSessions">
                {movie.days.map((day, index) => (
                    <div className="session" key={index}>
                        <p>{day.weekday} - {day.date}</p>
                        <div>
                            {day.showtimes.map((showtime, index) => (
                                <Link to={`/assentos/${showtime.id}`} className="times" key={index} ><p>{showtime.name}</p></Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="footerBox">
                <div className="posterBox">
                    <img src={movie.posterURL} alt="" className={movie.title} />
                </div>
                <div>
                    <p>{movie.title}</p>
                </div>
            </div>

        </>
    );
}