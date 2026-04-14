import './style.css'
import logoAlien from '../../assets/icons/logoAlien.svg'
import logoHeart from '../../assets/icons/logoHeart.svg'
import logoPlanet from '../../assets/icons/logoPlanet.svg'

 export const Card = ({image, name, specie, status, location}) => {

    
    return(
        <div className="card-caracteres">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="description-caracteres">
                <ul>
                    <li>
                        <img src={logoAlien} alt="" />
                        {specie}
                    </li>
                    <li>
                        <img src={logoHeart} alt="" />
                        {status}
                    </li>
                    <li>
                        <img src={logoPlanet} alt="" />
                        {location}
                    </li>
                </ul>
            </div>
        </div>
       
    )
}