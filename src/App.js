import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./app.css";
import Header from "./components/Header";
import MoviesScreen from "./components/MoviesScreen";
import MovieSessions from "./components/MovieSessions";
import MovieSeats from "./components/MovieSeats";
import SucessScreen from "./components/SucessScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={ <MoviesScreen /> } />
                <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
                <Route path="/assentos/:idSessao" element={<MovieSeats />} />
                <Route path="/sucesso" element={<SucessScreen />} />
            </Routes>

        </BrowserRouter>
    );
}