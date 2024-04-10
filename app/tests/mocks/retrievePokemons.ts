import { HttpResponse, type StrictResponse } from 'msw';
import { PokemonType } from '~/domains/pokemon/enums/PokemonTypes';
import type { PaginatedPokemons } from '~/domains/pokemon/types';
import {
  generatePaginatedPokemons,
  generatePokemon,
  generateFindAllPokemonsParamsResult,
} from '../helpers/generators';

export const retrievePokemons = (): StrictResponse<PaginatedPokemons> => {
  return HttpResponse.json<PaginatedPokemons>(
    generatePaginatedPokemons({
      pokemons: [
        generatePokemon(),
        generatePokemon({
          id: 2,
          pokedexEntry: 2,
          name: 'ivysaur',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 3,
          pokedexEntry: 3,
          name: 'venusaur',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 4,
          pokedexEntry: 4,
          name: 'charmander',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 5,
          pokedexEntry: 5,
          name: 'charmeleon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 6,
          pokedexEntry: 6,
          name: 'charizard',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          types: [PokemonType.Fire, PokemonType.Flying],
        }),
        generatePokemon({
          id: 7,
          pokedexEntry: 7,
          name: 'squirtle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 8,
          pokedexEntry: 8,
          name: 'wartortle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 9,
          pokedexEntry: 9,
          name: 'blastoise',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 10,
          pokedexEntry: 10,
          name: 'caterpie',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 11,
          pokedexEntry: 11,
          name: 'metapod',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 12,
          pokedexEntry: 12,
          name: 'butterfree',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 13,
          pokedexEntry: 13,
          name: 'weedle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 14,
          pokedexEntry: 14,
          name: 'kakuna',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 15,
          pokedexEntry: 15,
          name: 'beedrill',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 16,
          pokedexEntry: 16,
          name: 'pidgey',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 17,
          pokedexEntry: 17,
          name: 'pidgeotto',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 18,
          pokedexEntry: 18,
          name: 'pidgeot',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 19,
          pokedexEntry: 19,
          name: 'rattata',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 20,
          pokedexEntry: 20,
          name: 'raticate',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 21,
          pokedexEntry: 21,
          name: 'spearow',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 22,
          pokedexEntry: 22,
          name: 'fearow',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 23,
          pokedexEntry: 23,
          name: 'ekans',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 24,
          pokedexEntry: 24,
          name: 'arbok',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 25,
          pokedexEntry: 25,
          name: 'pikachu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 26,
          pokedexEntry: 26,
          name: 'raichu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 27,
          pokedexEntry: 27,
          name: 'sandshrew',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 28,
          pokedexEntry: 28,
          name: 'sandslash',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 29,
          pokedexEntry: 29,
          name: 'nidoran-f',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 30,
          pokedexEntry: 30,
          name: 'nidorina',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 31,
          pokedexEntry: 31,
          name: 'nidoqueen',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
          types: [PokemonType.Poison, PokemonType.Ground],
        }),
        generatePokemon({
          id: 32,
          pokedexEntry: 32,
          name: 'nidoran-m',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 33,
          pokedexEntry: 33,
          name: 'nidorino',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 34,
          pokedexEntry: 34,
          name: 'nidoking',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
          types: [PokemonType.Poison, PokemonType.Ground],
        }),
        generatePokemon({
          id: 35,
          pokedexEntry: 35,
          name: 'clefairy',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 36,
          pokedexEntry: 36,
          name: 'clefable',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 37,
          pokedexEntry: 37,
          name: 'vulpix',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 38,
          pokedexEntry: 38,
          name: 'ninetales',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 39,
          pokedexEntry: 39,
          name: 'jigglypuff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
          types: [PokemonType.Normal, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 40,
          pokedexEntry: 40,
          name: 'wigglytuff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png',
          types: [PokemonType.Normal, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 41,
          pokedexEntry: 41,
          name: 'zubat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png',
          types: [PokemonType.Poison, PokemonType.Flying],
        }),
        generatePokemon({
          id: 42,
          pokedexEntry: 42,
          name: 'golbat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png',
          types: [PokemonType.Poison, PokemonType.Flying],
        }),
        generatePokemon({
          id: 43,
          pokedexEntry: 43,
          name: 'oddish',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 44,
          pokedexEntry: 44,
          name: 'gloom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 45,
          pokedexEntry: 45,
          name: 'vileplume',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 46,
          pokedexEntry: 46,
          name: 'paras',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png',
          types: [PokemonType.Bug, PokemonType.Grass],
        }),
        generatePokemon({
          id: 47,
          pokedexEntry: 47,
          name: 'parasect',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png',
          types: [PokemonType.Bug, PokemonType.Grass],
        }),
        generatePokemon({
          id: 48,
          pokedexEntry: 48,
          name: 'venonat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 49,
          pokedexEntry: 49,
          name: 'venomoth',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 50,
          pokedexEntry: 50,
          name: 'diglett',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 51,
          pokedexEntry: 51,
          name: 'dugtrio',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 52,
          pokedexEntry: 52,
          name: 'meowth',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 53,
          pokedexEntry: 53,
          name: 'persian',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 54,
          pokedexEntry: 54,
          name: 'psyduck',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 55,
          pokedexEntry: 55,
          name: 'golduck',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 56,
          pokedexEntry: 56,
          name: 'mankey',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 57,
          pokedexEntry: 57,
          name: 'primeape',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 58,
          pokedexEntry: 58,
          name: 'growlithe',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 59,
          pokedexEntry: 59,
          name: 'arcanine',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 60,
          pokedexEntry: 60,
          name: 'poliwag',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 61,
          pokedexEntry: 61,
          name: 'poliwhirl',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 62,
          pokedexEntry: 62,
          name: 'poliwrath',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png',
          types: [PokemonType.Water, PokemonType.Fighting],
        }),
        generatePokemon({
          id: 63,
          pokedexEntry: 63,
          name: 'abra',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 64,
          pokedexEntry: 64,
          name: 'kadabra',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 65,
          pokedexEntry: 65,
          name: 'alakazam',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 66,
          pokedexEntry: 66,
          name: 'machop',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 67,
          pokedexEntry: 67,
          name: 'machoke',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 68,
          pokedexEntry: 68,
          name: 'machamp',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 69,
          pokedexEntry: 69,
          name: 'bellsprout',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 70,
          pokedexEntry: 70,
          name: 'weepinbell',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 71,
          pokedexEntry: 71,
          name: 'victreebel',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png',
          types: [PokemonType.Grass, PokemonType.Poison],
        }),
        generatePokemon({
          id: 72,
          pokedexEntry: 72,
          name: 'tentacool',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png',
          types: [PokemonType.Water, PokemonType.Poison],
        }),
        generatePokemon({
          id: 73,
          pokedexEntry: 73,
          name: 'tentacruel',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
          types: [PokemonType.Water, PokemonType.Poison],
        }),
        generatePokemon({
          id: 74,
          pokedexEntry: 74,
          name: 'geodude',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 75,
          pokedexEntry: 75,
          name: 'graveler',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 76,
          pokedexEntry: 76,
          name: 'golem',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 77,
          pokedexEntry: 77,
          name: 'ponyta',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 78,
          pokedexEntry: 78,
          name: 'rapidash',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 79,
          pokedexEntry: 79,
          name: 'slowpoke',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png',
          types: [PokemonType.Water, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 80,
          pokedexEntry: 80,
          name: 'slowbro',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
          types: [PokemonType.Water, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 81,
          pokedexEntry: 81,
          name: 'magnemite',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png',
          types: [PokemonType.Electric, PokemonType.Steel],
        }),
        generatePokemon({
          id: 82,
          pokedexEntry: 82,
          name: 'magneton',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png',
          types: [PokemonType.Electric, PokemonType.Steel],
        }),
        generatePokemon({
          id: 83,
          pokedexEntry: 83,
          name: 'farfetchd',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 84,
          pokedexEntry: 84,
          name: 'doduo',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 85,
          pokedexEntry: 85,
          name: 'dodrio',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 86,
          pokedexEntry: 86,
          name: 'seel',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 87,
          pokedexEntry: 87,
          name: 'dewgong',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
          types: [PokemonType.Water, PokemonType.Ice],
        }),
        generatePokemon({
          id: 88,
          pokedexEntry: 88,
          name: 'grimer',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 89,
          pokedexEntry: 89,
          name: 'muk',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 90,
          pokedexEntry: 90,
          name: 'shellder',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 91,
          pokedexEntry: 91,
          name: 'cloyster',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png',
          types: [PokemonType.Water, PokemonType.Ice],
        }),
        generatePokemon({
          id: 92,
          pokedexEntry: 92,
          name: 'gastly',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
          types: [PokemonType.Ghost, PokemonType.Poison],
        }),
        generatePokemon({
          id: 93,
          pokedexEntry: 93,
          name: 'haunter',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png',
          types: [PokemonType.Ghost, PokemonType.Poison],
        }),
        generatePokemon({
          id: 94,
          pokedexEntry: 94,
          name: 'gengar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
          types: [PokemonType.Ghost, PokemonType.Poison],
        }),
        generatePokemon({
          id: 95,
          pokedexEntry: 95,
          name: 'onix',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 96,
          pokedexEntry: 96,
          name: 'drowzee',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 97,
          pokedexEntry: 97,
          name: 'hypno',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 98,
          pokedexEntry: 98,
          name: 'krabby',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 99,
          pokedexEntry: 99,
          name: 'kingler',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 100,
          pokedexEntry: 100,
          name: 'voltorb',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 101,
          pokedexEntry: 101,
          name: 'electrode',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 102,
          pokedexEntry: 102,
          name: 'exeggcute',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png',
          types: [PokemonType.Grass, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 103,
          pokedexEntry: 103,
          name: 'exeggutor',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png',
          types: [PokemonType.Grass, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 104,
          pokedexEntry: 104,
          name: 'cubone',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 105,
          pokedexEntry: 105,
          name: 'marowak',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 106,
          pokedexEntry: 106,
          name: 'hitmonlee',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 107,
          pokedexEntry: 107,
          name: 'hitmonchan',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 108,
          pokedexEntry: 108,
          name: 'lickitung',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 109,
          pokedexEntry: 109,
          name: 'koffing',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 110,
          pokedexEntry: 110,
          name: 'weezing',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png',
          types: [PokemonType.Poison],
        }),
        generatePokemon({
          id: 111,
          pokedexEntry: 111,
          name: 'rhyhorn',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png',
          types: [PokemonType.Ground, PokemonType.Rock],
        }),
        generatePokemon({
          id: 112,
          pokedexEntry: 112,
          name: 'rhydon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
          types: [PokemonType.Ground, PokemonType.Rock],
        }),
        generatePokemon({
          id: 113,
          pokedexEntry: 113,
          name: 'chansey',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 114,
          pokedexEntry: 114,
          name: 'tangela',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 115,
          pokedexEntry: 115,
          name: 'kangaskhan',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 116,
          pokedexEntry: 116,
          name: 'horsea',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 117,
          pokedexEntry: 117,
          name: 'seadra',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 118,
          pokedexEntry: 118,
          name: 'goldeen',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 119,
          pokedexEntry: 119,
          name: 'seaking',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 120,
          pokedexEntry: 120,
          name: 'staryu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 121,
          pokedexEntry: 121,
          name: 'starmie',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
          types: [PokemonType.Water, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 122,
          pokedexEntry: 122,
          name: 'mr-mime',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
          types: [PokemonType.Psychic, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 123,
          pokedexEntry: 123,
          name: 'scyther',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 124,
          pokedexEntry: 124,
          name: 'jynx',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
          types: [PokemonType.Ice, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 125,
          pokedexEntry: 125,
          name: 'electabuzz',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 126,
          pokedexEntry: 126,
          name: 'magmar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 127,
          pokedexEntry: 127,
          name: 'pinsir',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 128,
          pokedexEntry: 128,
          name: 'tauros',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 129,
          pokedexEntry: 129,
          name: 'magikarp',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 130,
          pokedexEntry: 130,
          name: 'gyarados',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
          types: [PokemonType.Water, PokemonType.Flying],
        }),
        generatePokemon({
          id: 131,
          pokedexEntry: 131,
          name: 'lapras',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
          types: [PokemonType.Water, PokemonType.Ice],
        }),
        generatePokemon({
          id: 132,
          pokedexEntry: 132,
          name: 'ditto',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 133,
          pokedexEntry: 133,
          name: 'eevee',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 134,
          pokedexEntry: 134,
          name: 'vaporeon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 135,
          pokedexEntry: 135,
          name: 'jolteon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 136,
          pokedexEntry: 136,
          name: 'flareon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 137,
          pokedexEntry: 137,
          name: 'porygon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 138,
          pokedexEntry: 138,
          name: 'omanyte',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png',
          types: [PokemonType.Rock, PokemonType.Water],
        }),
        generatePokemon({
          id: 139,
          pokedexEntry: 139,
          name: 'omastar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png',
          types: [PokemonType.Rock, PokemonType.Water],
        }),
        generatePokemon({
          id: 140,
          pokedexEntry: 140,
          name: 'kabuto',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png',
          types: [PokemonType.Rock, PokemonType.Water],
        }),
        generatePokemon({
          id: 141,
          pokedexEntry: 141,
          name: 'kabutops',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png',
          types: [PokemonType.Rock, PokemonType.Water],
        }),
        generatePokemon({
          id: 142,
          pokedexEntry: 142,
          name: 'aerodactyl',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png',
          types: [PokemonType.Rock, PokemonType.Flying],
        }),
        generatePokemon({
          id: 143,
          pokedexEntry: 143,
          name: 'snorlax',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 144,
          pokedexEntry: 144,
          name: 'articuno',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
          types: [PokemonType.Ice, PokemonType.Flying],
        }),
        generatePokemon({
          id: 145,
          pokedexEntry: 145,
          name: 'zapdos',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
          types: [PokemonType.Electric, PokemonType.Flying],
        }),
        generatePokemon({
          id: 146,
          pokedexEntry: 146,
          name: 'moltres',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
          types: [PokemonType.Fire, PokemonType.Flying],
        }),
        generatePokemon({
          id: 147,
          pokedexEntry: 147,
          name: 'dratini',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png',
          types: [PokemonType.Dragon],
        }),
        generatePokemon({
          id: 148,
          pokedexEntry: 148,
          name: 'dragonair',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png',
          types: [PokemonType.Dragon],
        }),
        generatePokemon({
          id: 149,
          pokedexEntry: 149,
          name: 'dragonite',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
          types: [PokemonType.Dragon, PokemonType.Flying],
        }),
        generatePokemon({
          id: 150,
          pokedexEntry: 150,
          name: 'mewtwo',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 151,
          pokedexEntry: 151,
          name: 'mew',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 152,
          pokedexEntry: 152,
          name: 'chikorita',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 153,
          pokedexEntry: 153,
          name: 'bayleef',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 154,
          pokedexEntry: 154,
          name: 'meganium',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 155,
          pokedexEntry: 155,
          name: 'cyndaquil',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 156,
          pokedexEntry: 156,
          name: 'quilava',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 157,
          pokedexEntry: 157,
          name: 'typhlosion',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 158,
          pokedexEntry: 158,
          name: 'totodile',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 159,
          pokedexEntry: 159,
          name: 'croconaw',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 160,
          pokedexEntry: 160,
          name: 'feraligatr',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 161,
          pokedexEntry: 161,
          name: 'sentret',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 162,
          pokedexEntry: 162,
          name: 'furret',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 163,
          pokedexEntry: 163,
          name: 'hoothoot',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 164,
          pokedexEntry: 164,
          name: 'noctowl',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png',
          types: [PokemonType.Normal, PokemonType.Flying],
        }),
        generatePokemon({
          id: 165,
          pokedexEntry: 165,
          name: 'ledyba',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 166,
          pokedexEntry: 166,
          name: 'ledian',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 167,
          pokedexEntry: 167,
          name: 'spinarak',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 168,
          pokedexEntry: 168,
          name: 'ariados',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
          types: [PokemonType.Bug, PokemonType.Poison],
        }),
        generatePokemon({
          id: 169,
          pokedexEntry: 169,
          name: 'crobat',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
          types: [PokemonType.Poison, PokemonType.Flying],
        }),
        generatePokemon({
          id: 170,
          pokedexEntry: 170,
          name: 'chinchou',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png',
          types: [PokemonType.Water, PokemonType.Electric],
        }),
        generatePokemon({
          id: 171,
          pokedexEntry: 171,
          name: 'lanturn',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png',
          types: [PokemonType.Water, PokemonType.Electric],
        }),
        generatePokemon({
          id: 172,
          pokedexEntry: 172,
          name: 'pichu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 173,
          pokedexEntry: 173,
          name: 'cleffa',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 174,
          pokedexEntry: 174,
          name: 'igglybuff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png',
          types: [PokemonType.Normal, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 175,
          pokedexEntry: 175,
          name: 'togepi',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 176,
          pokedexEntry: 176,
          name: 'togetic',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png',
          types: [PokemonType.Fairy, PokemonType.Flying],
        }),
        generatePokemon({
          id: 177,
          pokedexEntry: 177,
          name: 'natu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png',
          types: [PokemonType.Psychic, PokemonType.Flying],
        }),
        generatePokemon({
          id: 178,
          pokedexEntry: 178,
          name: 'xatu',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png',
          types: [PokemonType.Psychic, PokemonType.Flying],
        }),
        generatePokemon({
          id: 179,
          pokedexEntry: 179,
          name: 'mareep',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 180,
          pokedexEntry: 180,
          name: 'flaaffy',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 181,
          pokedexEntry: 181,
          name: 'ampharos',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 182,
          pokedexEntry: 182,
          name: 'bellossom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 183,
          pokedexEntry: 183,
          name: 'marill',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png',
          types: [PokemonType.Water, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 184,
          pokedexEntry: 184,
          name: 'azumarill',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png',
          types: [PokemonType.Water, PokemonType.Fairy],
        }),
        generatePokemon({
          id: 185,
          pokedexEntry: 185,
          name: 'sudowoodo',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
          types: [PokemonType.Rock],
        }),
        generatePokemon({
          id: 186,
          pokedexEntry: 186,
          name: 'politoed',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 187,
          pokedexEntry: 187,
          name: 'hoppip',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png',
          types: [PokemonType.Grass, PokemonType.Flying],
        }),
        generatePokemon({
          id: 188,
          pokedexEntry: 188,
          name: 'skiploom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png',
          types: [PokemonType.Grass, PokemonType.Flying],
        }),
        generatePokemon({
          id: 189,
          pokedexEntry: 189,
          name: 'jumpluff',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png',
          types: [PokemonType.Grass, PokemonType.Flying],
        }),
        generatePokemon({
          id: 190,
          pokedexEntry: 190,
          name: 'aipom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 191,
          pokedexEntry: 191,
          name: 'sunkern',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 192,
          pokedexEntry: 192,
          name: 'sunflora',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png',
          types: [PokemonType.Grass],
        }),
        generatePokemon({
          id: 193,
          pokedexEntry: 193,
          name: 'yanma',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png',
          types: [PokemonType.Bug, PokemonType.Flying],
        }),
        generatePokemon({
          id: 194,
          pokedexEntry: 194,
          name: 'wooper',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png',
          types: [PokemonType.Water, PokemonType.Ground],
        }),
        generatePokemon({
          id: 195,
          pokedexEntry: 195,
          name: 'quagsire',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png',
          types: [PokemonType.Water, PokemonType.Ground],
        }),
        generatePokemon({
          id: 196,
          pokedexEntry: 196,
          name: 'espeon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 197,
          pokedexEntry: 197,
          name: 'umbreon',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png',
          types: [PokemonType.Dark],
        }),
        generatePokemon({
          id: 198,
          pokedexEntry: 198,
          name: 'murkrow',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png',
          types: [PokemonType.Dark, PokemonType.Flying],
        }),
        generatePokemon({
          id: 199,
          pokedexEntry: 199,
          name: 'slowking',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png',
          types: [PokemonType.Water, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 200,
          pokedexEntry: 200,
          name: 'misdreavus',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
          types: [PokemonType.Ghost],
        }),
      ],
      pagination: generateFindAllPokemonsParamsResult({
        hasNext: true,
        offset: 0,
        pageSize: 200,
      }),
    })
  );
};

export const retrievePokemonsSecondBatch = (): StrictResponse<PaginatedPokemons> => {
  return HttpResponse.json(
    generatePaginatedPokemons({
      pokemons: [
        generatePokemon({
          id: 201,
          pokedexEntry: 201,
          name: 'unown',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 202,
          pokedexEntry: 202,
          name: 'wobbuffet',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png',
          types: [PokemonType.Psychic],
        }),
        generatePokemon({
          id: 203,
          pokedexEntry: 203,
          name: 'girafarig',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png',
          types: [PokemonType.Normal, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 204,
          pokedexEntry: 204,
          name: 'pineco',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
          types: [PokemonType.Bug],
        }),
        generatePokemon({
          id: 205,
          pokedexEntry: 205,
          name: 'forretress',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png',
          types: [PokemonType.Bug, PokemonType.Steel],
        }),
        generatePokemon({
          id: 206,
          pokedexEntry: 206,
          name: 'dunsparce',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 207,
          pokedexEntry: 207,
          name: 'gligar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png',
          types: [PokemonType.Ground, PokemonType.Flying],
        }),
        generatePokemon({
          id: 208,
          pokedexEntry: 208,
          name: 'steelix',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png',
          types: [PokemonType.Steel, PokemonType.Ground],
        }),
        generatePokemon({
          id: 209,
          pokedexEntry: 209,
          name: 'snubbull',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 210,
          pokedexEntry: 210,
          name: 'granbull',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png',
          types: [PokemonType.Fairy],
        }),
        generatePokemon({
          id: 211,
          pokedexEntry: 211,
          name: 'qwilfish',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png',
          types: [PokemonType.Water, PokemonType.Poison],
        }),
        generatePokemon({
          id: 212,
          pokedexEntry: 212,
          name: 'scizor',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png',
          types: [PokemonType.Bug, PokemonType.Steel],
        }),
        generatePokemon({
          id: 213,
          pokedexEntry: 213,
          name: 'shuckle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png',
          types: [PokemonType.Bug, PokemonType.Rock],
        }),
        generatePokemon({
          id: 214,
          pokedexEntry: 214,
          name: 'heracross',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png',
          types: [PokemonType.Bug, PokemonType.Fighting],
        }),
        generatePokemon({
          id: 215,
          pokedexEntry: 215,
          name: 'sneasel',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png',
          types: [PokemonType.Dark, PokemonType.Ice],
        }),
        generatePokemon({
          id: 216,
          pokedexEntry: 216,
          name: 'teddiursa',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 217,
          pokedexEntry: 217,
          name: 'ursaring',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 218,
          pokedexEntry: 218,
          name: 'slugma',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 219,
          pokedexEntry: 219,
          name: 'magcargo',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png',
          types: [PokemonType.Fire, PokemonType.Rock],
        }),
        generatePokemon({
          id: 220,
          pokedexEntry: 220,
          name: 'swinub',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png',
          types: [PokemonType.Ice, PokemonType.Ground],
        }),
        generatePokemon({
          id: 221,
          pokedexEntry: 221,
          name: 'piloswine',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png',
          types: [PokemonType.Ice, PokemonType.Ground],
        }),
        generatePokemon({
          id: 222,
          pokedexEntry: 222,
          name: 'corsola',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png',
          types: [PokemonType.Water, PokemonType.Rock],
        }),
        generatePokemon({
          id: 223,
          pokedexEntry: 223,
          name: 'remoraid',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 224,
          pokedexEntry: 224,
          name: 'octillery',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 225,
          pokedexEntry: 225,
          name: 'delibird',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png',
          types: [PokemonType.Ice, PokemonType.Flying],
        }),
        generatePokemon({
          id: 226,
          pokedexEntry: 226,
          name: 'mantine',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png',
          types: [PokemonType.Water, PokemonType.Flying],
        }),
        generatePokemon({
          id: 227,
          pokedexEntry: 227,
          name: 'skarmory',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png',
          types: [PokemonType.Steel, PokemonType.Flying],
        }),
        generatePokemon({
          id: 228,
          pokedexEntry: 228,
          name: 'houndour',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png',
          types: [PokemonType.Dark, PokemonType.Fire],
        }),
        generatePokemon({
          id: 229,
          pokedexEntry: 229,
          name: 'houndoom',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png',
          types: [PokemonType.Dark, PokemonType.Fire],
        }),
        generatePokemon({
          id: 230,
          pokedexEntry: 230,
          name: 'kingdra',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png',
          types: [PokemonType.Water, PokemonType.Dragon],
        }),
        generatePokemon({
          id: 231,
          pokedexEntry: 231,
          name: 'phanpy',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 232,
          pokedexEntry: 232,
          name: 'donphan',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png',
          types: [PokemonType.Ground],
        }),
        generatePokemon({
          id: 233,
          pokedexEntry: 233,
          name: 'porygon2',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 234,
          pokedexEntry: 234,
          name: 'stantler',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 235,
          pokedexEntry: 235,
          name: 'smeargle',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 236,
          pokedexEntry: 236,
          name: 'tyrogue',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 237,
          pokedexEntry: 237,
          name: 'hitmontop',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png',
          types: [PokemonType.Fighting],
        }),
        generatePokemon({
          id: 238,
          pokedexEntry: 238,
          name: 'smoochum',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png',
          types: [PokemonType.Ice, PokemonType.Psychic],
        }),
        generatePokemon({
          id: 239,
          pokedexEntry: 239,
          name: 'elekid',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 240,
          pokedexEntry: 240,
          name: 'magby',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 241,
          pokedexEntry: 241,
          name: 'miltank',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 242,
          pokedexEntry: 242,
          name: 'blissey',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png',
          types: [PokemonType.Normal],
        }),
        generatePokemon({
          id: 243,
          pokedexEntry: 243,
          name: 'raikou',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png',
          types: [PokemonType.Electric],
        }),
        generatePokemon({
          id: 244,
          pokedexEntry: 244,
          name: 'entei',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
          types: [PokemonType.Fire],
        }),
        generatePokemon({
          id: 245,
          pokedexEntry: 245,
          name: 'suicune',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png',
          types: [PokemonType.Water],
        }),
        generatePokemon({
          id: 246,
          pokedexEntry: 246,
          name: 'larvitar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 247,
          pokedexEntry: 247,
          name: 'pupitar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png',
          types: [PokemonType.Rock, PokemonType.Ground],
        }),
        generatePokemon({
          id: 248,
          pokedexEntry: 248,
          name: 'tyranitar',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png',
          types: [PokemonType.Rock, PokemonType.Dark],
        }),
        generatePokemon({
          id: 249,
          pokedexEntry: 249,
          name: 'lugia',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png',
          types: [PokemonType.Psychic, PokemonType.Flying],
        }),
        generatePokemon({
          id: 250,
          pokedexEntry: 250,
          name: 'ho-oh',
          spriteUrl:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
          types: [PokemonType.Fire, PokemonType.Flying],
        }),
      ],
      pagination: generateFindAllPokemonsParamsResult({
        hasNext: true,
        offset: 201,
        pageSize: 250,
      }),
    })
  );
}