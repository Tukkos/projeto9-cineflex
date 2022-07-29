import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./movieSeats.css";

export default function MovieSeats() {
    const params = useParams();
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const request = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`
        );

        request.then((res) => {
            setSeats(res.data);
        })
    }, [params.idSessao]);

    if(seats.length === 0) {
        return <div className="selectionTitle"><img className="loading" src="https://www.lcrmscp.gov/assets/images/loader-bb533f76423cab3aa8f798501357e763.gif" alt="" /></div>;
    }
    console.log(seats);

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <div className="seats">

                {seats.seats.map((seat, index) => (
                    
                    <div key={index}>
                        <div className="available">{seat.name}</div>
                    </div>
                ))}
                
                                
            </div>

            <div className="key">
                <div>
                    <div className="selected"></div>
                    Selecionado
                </div>
                <div>
                    <div className="available"></div>
                    Disponível
                </div>
                <div>
                    <div className="notAvailable"></div>
                    Indisponível
                </div>
            </div>

            <div className="inputs">
                Nome do comprador:
                <input type="text" placeholder="  Digite seu nome..." />
                CPF do comprador:
                <input type="text" placeholder="  Digite seu CPF..." />
            </div>

            <div className="footerBox">
                <div className="posterBox">
                    <img src={seats.movie.posterURL} alt="" className={seats.movie.title} />
                </div>
                <div>
                    <p>{seats.movie.title}</p>
                    <p>{seats.day.weekday} - {seats.name}</p>
                </div>
            </div>
        </>
    );
}