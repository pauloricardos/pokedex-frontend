import { describe, expect, it } from 'vitest';
import { capitalizeFirstLetter } from '../capitalizeFirstLetter';

describe('capitalizeFirstLetter', () => {
  describe('when receives a string', () => {
    it('then returns the string with the first letter capitalized', () => {
      const pokemonName = 'pikachu';
      const expectedPokemonName = 'Pikachu';

      expect(capitalizeFirstLetter(pokemonName)).toBe(expectedPokemonName);
    })
  })
})