import illustration from '../../assets/images/illustration.svg'
import logoRickandMorty from '../../assets/images/logoRickandmorty.svg'
import './style.css'
export const Main = () => (
    <main>
        <div>
            <img src={illustration} alt=""/>
        </div>

        <div className="content-main">

            <img src={logoRickandMorty} alt=""/>
            <h1>Bem-vindos ao <span>consumo de API </span> do Rick and Morty</h1>
            <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
            <div className="conteiner-btn-main">
                <a href="" className="btn-primary">Veja agora</a>
                <a href="" className="btn-secondary ">Saiba mais</a>
            </div>

        </div>
    </main>
)