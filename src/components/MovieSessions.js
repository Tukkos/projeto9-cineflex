// import {useState, useEffect} from "react";
// import axios from "axios";

import "./movieSessions.css";
import Footer from "./Footer";

export default function MovieSessions() {
    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o horário</p>
            </div>

            <div className="movieSessions">
                <div className="session">
                    <p>Quinta-feira - 24/06/2021</p>
                    <div>
                        <div className="times"><p>15:00</p></div>
                        <div className="times"><p>15:00</p></div>
                    </div>
                </div>

                <div className="session">
                    <p>Quinta-feira - 24/06/2021</p>
                    <div>
                        <div className="times"><p>15:00</p></div>
                        <div className="times"><p>15:00</p></div>
                    </div>
                </div>
                
            </div>

            <Footer />
        </>
    );
}