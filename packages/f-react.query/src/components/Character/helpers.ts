import { ICharacterResponse } from './Interfaces';

export const fetchCharacter = async (id:string|undefined):Promise<ICharacterResponse> => {
  if (id === undefined) {
    throw new Error('id undefined');
  }
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!response.ok) {
    throw new Error('Fetch Error');
  }
  return await response.json();
};