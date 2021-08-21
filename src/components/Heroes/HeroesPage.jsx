import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

const HeroePage = ({history}) => {

    const { heroeId } = useParams() // Obtengo el parametro de la URL
    
    // Se llama a la funcion getHeroesById para corroborar que coinciden los Id.
    //const hero = getHeroesById(heroeId)
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    

    const handleReturn = () => {
        
        if(history.length <= 2){
            history.push('/');
        } else{ history.goBack(); }
    }

    if( !hero ){
        return <Redirect to="/" />
    }

    const {id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-md-4">
                <img
                    src={`../assets/heroes/${id}.jpg`}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInTopRight"
                />    
            </div>
            <div className="col-md-8">
                <h3> {superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego: </b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"> <b>First Appearance: </b> {first_appearance}</li>
                </ul>
                
                <br /> <hr />
                <h5>Characthers</h5>
                <p> {characters} </p>

                <hr />
                <button className="btn btn-outline-info"
                        onClick= {handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroePage
