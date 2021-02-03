import { useQuery } from 'react-query';
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { fetchCharacter } from './helpers';

interface ICharacterProps {
  id: string;
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