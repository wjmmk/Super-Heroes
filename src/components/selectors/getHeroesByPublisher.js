import { heroes } from '../../Data/Heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if(!validPublishers.includes( publisher )){
        throw new  Error(`Publisher "${publisher}" No es Correcto !!! `);
    }

    return heroes.filter( hero => hero.publisher === publisher);
    
}