import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./movieSeats.css";

import Seats from "./Seats";

export default function MovieSeats() {
    const params = useParams();
    const [seats, setSeats] = useState([]);
    const navigate = useNavigate();

    const [chosenMovieSeats, setChosenMovieSeats] = useState([]);
    const [chosenSeats, setChosenSeats] = useState([]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

    useEffect(() => {
        const request = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`
        );

        request.then((res) => {
            setSeats(res.data);
            // console.log(seats);
        })
    }, [params.idSessao]);

    if(seats.length === 0) {
        return <div className="selectionTitle"><img className="loading" src="https://www.lcrmscp.gov/assets/images/loader-bb533f76423cab3aa8f798501357e763.gif" alt="" /></div>;
    }

    function toSucessScreen(event) {
        event.preventDefault();

        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: chosenSeats,
            name: buyerName,
            cpf: buyerCPF
        })

        request.then(() => {
            navigate("/sucesso", {state:{
                movieTitle: seats.movie.title,
                movieDay: seats.day.date,
                movieTime: seats.name,
                movieSeats: chosenMovieSeats,
                buyerName: buyerName,
                buyerCPF: buyerCPF
            }})
        })
    }

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <div className="seats">
                {seats.seats.map((seat, index) => (
                    <Seats
                        key={index}
                        seatId={seat.id}
                        seatNumber={seat.name}
                        isAvailable={seat.isAvailable}
                        chosenSeats={chosenSeats}
                        setChosenSeats={setChosenSeats}
                        chosenMovieSeats={chosenMovieSeats}
                        setChosenMovieSeats={setChosenMovieSeats}
                    />
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

            <form onSubmit={toSucessScreen} className="inputs">
                Nome do comprador:
                <input type="text"
                    minLength="3"
                    value={buyerName}
                    onChange={e => setBuyerName(e.target.value)}
                    placeholder="  Digite seu nome..." />
                CPF do comprador:
                <input type="number"
                    minLength="11"
                    max="99999999999"
                    value={buyerCPF}
                    onChange={e => setBuyerCPF(e.target.value)}
                    placeholder="  Digite seu CPF..." />
                <button type="submit" className="button">Reservar assento(s)</button>
            </form>

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