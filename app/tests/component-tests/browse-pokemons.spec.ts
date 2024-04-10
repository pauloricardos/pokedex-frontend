import { test, expect } from '@playwright/test';
import { smoothScroll } from '../helpers/custom-functions';

test.describe('given the user enters the page', () => {
  test.describe('when the user scrolls the page', () => {
    test('then renders the second batch of pokemons', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });

      const firstPokemon = await page.$('.p-4');
      const firstElementText = await firstPokemon?.innerText();
      expect(firstElementText).toContain('0001');

      const currentPokemons = await page.$$('.p-4');
      const lastCurrentPokemon = currentPokemons[currentPokemons.length - 1];
      const lastCurrentPokemonText = await lastCurrentPokemon.innerText();
      expect(lastCurrentPokemonText).toContain('0200');

      await smoothScroll(page);

      const newPokemons = await page.$$('.p-4');
      const newLastCurrentPokemon = newPokemons[newPokemons.length - 1];
      const newLastCurrentPokemonText = await newLastCurrentPokemon.innerText();

      expect(newLastCurrentPokemonText).toContain('0250');
    });
  });
});
