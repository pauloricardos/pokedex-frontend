import type {
  FindAllPokemonsParams,
  PaginatedPokemons,
} from '~/domains/pokemon/types';
import HttpClient from '~/api/httpClient';

export const retrievePokemons = async ({
  pageSize,
  offset,
}: FindAllPokemonsParams): Promise<PaginatedPokemons> => {
  const httpClient = new HttpClient();

  const response: PaginatedPokemons = await httpClient.get('/pokemons', {
    params: {
      pageSize,
      offset,
    },
  });

  return response;
};
