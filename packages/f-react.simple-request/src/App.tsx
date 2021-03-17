import { useState, useEffect } from 'react';

function sleep(ms:number):Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

interface ICharacter {
  created: string;
  episode: [],
  gender: string;
  image: string;
  location: [];
  origin: [];
  url: string;
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
}

async function fetchCharacter (id: string | undefined): Promise<ICharacter> {
  // This line can be removed
  await sleep(5000);
  if (id === undefined) {
    throw new Error('id undefined');
  }
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!response.ok) {
    throw new Error('Fetch Error');
  }
  return await response.json();
}

export default function App ():JSX.Element {

  const [character, setCharacter] = useState(undefined as ICharacter | undefined);
  const [hasError, setHasError] = useState(false);

  useEffect(()=> {
    (async () => {
      try {
        const response = await fetchCharacter('1');
        setCharacter(response);
      } catch (e) {
        // Set an
        setHasError(true);
      }
    })();
  })

  if (hasError) {
    return <div>Error</div>
  }

  if (character === undefined) {
    return (<div>Loading</div>)
  }

  return (
    <div>
      {character?.id}
      <br/>
      {character?.name}
    </div>
  );
}
