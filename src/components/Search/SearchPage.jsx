import React, { useMemo } from 'react';
import HeroCard from '../Heroes/HeroCard';
import { useForm } from '../../Hooks/useForm';
// import { heroes } from '../../Data/Heroes'; Version antigua de manejar la data del Servidor.
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../selectors/getHeroesByName';


const SearchPage = () => {

    const location = useLocation();
    //console.log(location); // Impresion del Objeto que Recoge los parametros de la URL.

    // Esta linea te permite extraer de una URL los QueryParams y usarlo como te guste.
    const { q = ''} = queryString.parse(location.search);
    //console.log(q); // variable que recoge el parametro Especifico del heroe a Buscar.

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    //const HeroesFiltered = heroes; // Version Antigua.
    //const HeroesFiltered = getHeroesByName(searchText);
    let HeroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const history = useHistory();
    const handleSearch = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1> Search Page !!!</h1>
            <hr />

            <div className="row">
                <div className="col-md-5">
                    <h4> Search form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input type="text"
                               placeholder="Digite your hero..."
                               className="form-control"
                               name="searchText"
                               value={ searchText }
                               onChange={ handleInputChange }
                        />

                        <button type="submit"
                                className="btn m1 btn-block btn-outline-dark"
                        >
                            Search...       
                        </button>
                    </form>

                </div>

                <div className="col-md-7">
                    <h4> Result </h4>
                    <hr />

                        {
                            (q === '')
                              && 
                              <div className="alert alert-info text-center">
                                search Heroe 
                              </div>
                        }

                        {
                            (q !== '' && HeroesFiltered.length === 0)
                              && 
                              <div className="alert alert-warning text-center">
                                here is no a hero with <b> { q } </b>
                              </div>
                        }

                        {
                            HeroesFiltered.map( hero => (
                                <HeroCard key={hero.id}
                                          {...hero}
                                />
                            ))
                        }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
