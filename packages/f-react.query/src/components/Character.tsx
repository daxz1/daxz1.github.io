import { useQuery } from 'react-query';
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

interface ICharacterResponse {
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

const fetchCharacter = async (id:string|undefined):Promise<ICharacterResponse> => {

  if (id === undefined) {
    throw new Error('id undefined');
  }

  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!response.ok) {
    throw new Error('Fetch Error');
  }
  return await response.json();
};

interface ICharacterProps {
  id?: string;
}

export default function Character({ id }:ICharacterProps):JSX.Element {

  const { data, status } = useQuery(['character', id], () =>  fetchCharacter(id))

  if (status === 'loading') {
    return <p key={id}>Loading Character</p>;
  }

  if (data) {
    return (
      <article key={id}>
        <Link component={RouterLink} to={`/characters/${id}`}>
          <Typography variant="h6">{data.name}</Typography>
        </Link>
      </article>
    )
  }

  return (<p>Error</p>)
}