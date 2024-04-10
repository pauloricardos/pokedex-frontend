import type { PokemonType } from '../../enums/PokemonTypes';
import type { PokemonTypesProps } from './types';
import { capitalizeFirstLetter } from '../../helpers';

export const PokemonTypes = ({
  pokemonTypes,
}: PokemonTypesProps): JSX.Element => {
  const capitalizePokemonType = capitalizeFirstLetter;

  return (
    <div className="flex w-1/2">
      {pokemonTypes.map((pokemonType: PokemonType) => (
        <div
          key={pokemonType}
          className={`p-1 w-full bg-${pokemonType}-type rounded-lg mr-2 flex flex-row`}
        >
          <div className="flex bg-white rounded-xl w-6 mr-2">
            <img
              src={`/images/${pokemonType}-type.png`}
              className="w-full p-1.5"
              alt=""
            />
          </div>
          <p className="text-xs font-medium pl-0 w-3/5 p-1">
            {capitalizePokemonType(pokemonType)}
          </p>
        </div>
      ))}
    </div>
  );
};
