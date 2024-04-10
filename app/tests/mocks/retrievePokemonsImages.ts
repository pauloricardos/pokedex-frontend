import { HttpResponse, http } from 'msw';
import { PokemonType } from '~/domains/pokemon/enums/PokemonTypes';

const createMockRequest = (type: string, outline = false) => {
  const typeName = type.toLowerCase();
  const outlineSuffix = outline ? '-outline' : '';
  const url = `/images/${typeName}-type${outlineSuffix}.png`;

  return http.get(
    `/images/:${typeName}-type${outlineSuffix}.png`,
    async () => {
      const buffer = await fetch(url).then((response) =>
        response.arrayBuffer()
      );

      return HttpResponse.arrayBuffer(buffer, {
        headers: {
          'Content-Type': 'image/png',
        },
      });
    }
  );
};

export const retrievePokemonsImages = Object.values(PokemonType).flatMap((type) => {
  return [createMockRequest(type), createMockRequest(type, true)];
});