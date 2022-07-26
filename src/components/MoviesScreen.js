import "./components.css";

export default function MoviesScreen() {
    return (
        <div>
            <div className="selectionTitle">
                <p>Selecione o filme</p>
            </div>

            <div className="movies">
                <div className="movieBanner">
                    <img src="https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg" alt="" className="Tudo em Todo o Lugar ao Mesmo Tempo Banner" />
                    {/* <Link to="/sessoes/:idFilme"></Link> */}
                </div>

                <div className="movieBanner">
                    <img src="https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg" alt="" className="Tudo em Todo o Lugar ao Mesmo Tempo Banner" />
                    {/* <Link to="/sessoes/:idFilme"></Link> */}
                </div>

                <div className="movieBanner">
                    <img src="https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg" alt="" className="Tudo em Todo o Lugar ao Mesmo Tempo Banner" />
                    {/* <Link to="/sessoes/:idFilme"></Link> */}
                </div>

                <div className="movieBanner">
                    <img src="https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg" alt="" className="Tudo em Todo o Lugar ao Mesmo Tempo Banner" />
                    {/* <Link to="/sessoes/:idFilme"></Link> */}
                </div>
            </div>
            
        </div>
    );
}