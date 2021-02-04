import { ICharacter } from './Interfaces';

function sleep(ms:number):Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchCharacter = async (id: string | undefined): Promise<ICharacter> => {
  await sleep(5000);
  if (id === undefined) {
    throw new Error('id undefined');
  }
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!response.ok) {
    throw new Error('Fetch Error');
  }
  return await response.json();
};