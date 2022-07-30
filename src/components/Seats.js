import { useState } from "react";

import "./movieSeats.css";

export default function Seats({seatId, seatNumber, isAvailable, chosenSeats, setChosenSeats, chosenMovieSeats, setChosenMovieSeats}) {
    const [unselectedSeat, setUnselectedSeat] = useState("available");

    function reserveSeat() {
        if (unselectedSeat === "available") {
            setChosenSeats(chosenSeats.push(seatId));
            setChosenSeats(chosenSeats.sort());
            console.log(chosenSeats);

            setChosenMovieSeats(chosenMovieSeats.push(Number(seatNumber)));
            setChosenMovieSeats(chosenMovieSeats.sort());
            console.log(chosenMovieSeats);

            setUnselectedSeat("selected");
        }
        if (unselectedSeat === "selected") {
            for (let i = 0; i < chosenSeats.length; i++) {
                if (chosenSeats[i] === seatId) {
                    setChosenSeats(chosenSeats.splice(i,1));
                }
            };
            setChosenSeats(chosenSeats.sort());
            console.log(chosenSeats);

            for (let i = 0; i < chosenMovieSeats.length; i++) {
                if (chosenMovieSeats[i] === Number(seatNumber)) {
                    setChosenMovieSeats(chosenMovieSeats.splice(i,1));
                }
            };
            setChosenMovieSeats(chosenMovieSeats.sort());
            console.log(chosenMovieSeats);

            setUnselectedSeat("available");
        }
    };

    function choseAnotherSeat() {
        alert("Esse assento não está disponível")
    };

    return (
        (isAvailable) ?
            <div id={seatId} onClick={reserveSeat}>
                <div className={unselectedSeat}>{seatNumber}</div>
            </div> 
            :
            <div id={seatId} onClick={choseAnotherSeat}>
                <div className="notAvailable">{seatNumber}</div>
            </div>
    );
}