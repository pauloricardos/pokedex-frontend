import { type Fetcher, useAsyncValue, useFetcher } from '@remix-run/react';
import { useState, useMemo } from 'react';
import type { PaginatedPokemons, Pokemon } from '../../types';
import type { UseBrowsePokemonsResult, UseFetcherResult } from './types';
import { isNil, uniq } from 'ramda';

const pageSize = 200;

export const useBrowsePokemons = (): UseBrowsePokemonsResult => {
  const paginatedPokemons = useAsyncValue() as PaginatedPokemons;
  const fetcher = useFetcher<UseFetcherResult>();

  const [pokemons, setPokemons] = useState<Pokemon[]>(
    paginatedPokemons.pokemons
  );

  const fetcherHasMorePokemonToFetch = fetcher.data?.result.pagination.hasNext;
  const hasMorePokemonToFetch = paginatedPokemons.pagination.hasNext;

  const isLoading = fetcher.state === 'loading';

  useMemo(() => {
    if (!fetcher.data || isLoading) {
      return;
    }

    if (fetcher.data.result.pokemons.length) {
      const incomingPokemons: Pokemon[] = fetcher.data.result.pokemons;

      setPokemons((currentPokemons) => {
        return uniq([...currentPokemons, ...incomingPokemons]);
      });
    }
  }, [fetcher.data, isLoading, setPokemons]);

  const loadNext = () => {
    const query = mountQuery(fetcher);

    if (
      (fetcherHasMorePokemonToFetch || isNil(fetcherHasMorePokemonToFetch)) &&
      hasMorePokemonToFetch
    ) {
      fetcher.load(query);
    }
  };

  const mountQuery = (fetcher: Fetcher) => {
    const offset = getOffsetParams(fetcher);

    return `?index&pageSize=${pageSize}&offset=${offset}`;
  };

  const getOffsetParams = (fetcher: Fetcher): number => {
    return fetcher.data
      ? fetcher.data.result.pagination.offset + pageSize
      : paginatedPokemons.pagination.offset + pageSize;
  };

  return { pokemons, loadNext, isLoading };
};
