import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./movieSeats.css";

import Seats from "./Seats";

export default function MovieSeats() {
    const params = useParams();
    const [seats, setSeats] = useState([]);

    const [chosenSeats, setChosenSeats] = useState([]);
    const [buyerName, setBuyerName] = useState("");
    const [buyerCPF, setBuyerCPF] = useState("");

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

    console.log(chosenSeats);

    function toSucessScreen(event) {
        event.preventDefault();

        // const request = {ids: chosenSeats, name:buyerName, cpf:buyerCPF};

        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", {
            ids: chosenSeats,
            name: buyerName,
            cpf: buyerCPF
        })

        request.then(console.log(request));
        request.catch(alert("Favor rever seus dados e escolher pelo menos um assento disponível."));
    }

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <div className="seats">
                {seats.seats.map((seat, index) => (
                    <Seats key={index}
                    seatId={seat.id}
                    seatNumber={seat.name}
                    isAvailable={seat.isAvailable}
                    chosenSeats={chosenSeats}
                    setChosenSeats={setChosenSeats} />
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
                    value={buyerName}
                    onChange={e => setBuyerName(e.target.value)}
                    placeholder="  Digite seu nome..." />
                CPF do comprador:
                <input type="number"
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