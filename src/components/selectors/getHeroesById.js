import { heroes } from '../../Data/Heroes';

export const getHeroesById = ( id ) => {

    return heroes.find( hero => hero.id === id );
    
}