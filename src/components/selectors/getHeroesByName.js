import { heroes } from '../../Data/Heroes';

export const getHeroesByName = ( name = '' ) => {

    if(name === ''){
        return [];
    }

    name = name.toLocaleLowerCase();

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
    
}