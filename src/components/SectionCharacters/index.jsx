import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../Card"

export const SectionCharacters = () =>{

    const [characters,setcharacters] = useState ([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
            setcharacters(res.data.results);
        })
    }, [])

    return(
        <section className="section-characters">

            <h2>Nossos <span>Personagens</span></h2>

            <div className="conteiner-cards-characters">
                {
                    characters.map((character) => (
                        <Card 
                        image={character.image} 
                        name={character.name}
                        specie={character.species}
                        status={character.status}
                        location={character.origin.name}
                        />

                    ))
                }

            </div>

        </section>
    )
}