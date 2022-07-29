import { useState } from "react";
import "./movieSeats.css";

export default function Seats({seatId, seatNumber, isAvailable, chosenSeats, setChosenSeats}) {
    const [unselectedSeat, setUnselectedSeat] = useState("available");

    function choseAnotherSeat() {
        alert("Esse assento não está disponível")
    };

    function reserveSeat() {
        if (unselectedSeat === "available") {
            setChosenSeats(chosenSeats.push(seatId));
            setChosenSeats(chosenSeats.sort());
            setUnselectedSeat("selected");
        }
        if (unselectedSeat === "selected") {
            for (let i = 0; i < chosenSeats.length; i++) {
                if (chosenSeats[i] === seatId) {
                    setChosenSeats(chosenSeats.splice(i,1));
                }
            };
            setChosenSeats(chosenSeats.sort());
            setUnselectedSeat("available");
        }
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