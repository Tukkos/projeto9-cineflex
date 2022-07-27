import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./app.css";
import Header from "./components/Header";
import MoviesScreen from "./components/MoviesScreen";
import MovieSessions from "./components/MovieSessions";

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                {/* LEMBRAR DE ARRUMAR OS PATHS--------------------------------------------------------------------------------- */}
                <Route path="/aa" element={ <MoviesScreen /> } />

                <Route path="/" element={<MovieSessions />} />
                {/* <Route path="/assentos/:idSessao" element={<MovieSeats />} /> */}
                {/* <Route path="/sucesso" element={<SuccessScreen />} /> */}
            </Routes>

        </BrowserRouter>
    );
}