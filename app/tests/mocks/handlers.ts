import { http } from 'msw';
import { retrievePokemons, retrievePokemonsSecondBatch } from './retrievePokemons';
import { retrievePokemonsImages } from './retrievePokemonsImages';

export const handlers = [
  http.get('*/pokemons', ({ request }) => {
    console.log('Captured a "GET /pokemons" request');

    const url = new URL(request.url);
    const { searchParams } = url;
    const pageSize = searchParams.get('pageSize');
    const offset = searchParams.get('offset');

    if (pageSize === '200' && offset === '0') {
      return retrievePokemons();
    } else {
      return retrievePokemonsSecondBatch();
    }
  }),
  ...retrievePokemonsImages,
];
