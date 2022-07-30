import "./sucessScreen.css";
import { Link, useLocation } from "react-router-dom";

export default function SucessScreen() {
    const location = useLocation();
    let data = location.state

    let cpf = data.buyerCPF.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4")

    return (
        <>
            <div className="selectionTitle sucess">
                <p>Pedido feito com sucesso!</p>
            </div>
            <div className="infoBox">
                <div>
                    <p className="subTitle">Filme e sessão</p>
                    <p className="infos">{data.movieTitle}</p>
                    <p className="infos">{data.movieDay} {data.movieTime}</p>
                </div>
                <div>
                    <p className="subTitle">Ingressos</p>
                    {data.movieSeats.map((numero, index) => <p className="infos" key={index} >Assento {numero}</p>)}
                </div>
                <div>
                    <p className="subTitle">Comprador</p>
                    <p className="infos">Nome: {data.buyerName}</p>
                    <p className="infos">CPF: {cpf}</p>
                </div>
            </div>
            <Link to="/" className="button">
                Voltar pra Home
            </Link>
        </>
        
    );
}