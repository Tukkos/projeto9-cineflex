import "./movieSeats.css";

export default function MovieSeats() {

    // if(seats.length === 0) {
    //     return <div className="selectionTitle"><img className="loading" src="https://www.lcrmscp.gov/assets/images/loader-bb533f76423cab3aa8f798501357e763.gif" /></div>;
    // }

    return (
        <>
            <div className="selectionTitle">
                <p>Selecione o(s) assento(s)</p>
            </div>

            <div className="seats">

                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>
                <div>
                    <div className="selected">13</div>
                </div>

                
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
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" alt="" className="Patati Patata o Filme" />
                </div>
                <div>
                    <p>Patati Patata o Filme</p>
                    <p>Segunda-feira - 15:00</p>
                </div>
            </div>
        </>
    );
}