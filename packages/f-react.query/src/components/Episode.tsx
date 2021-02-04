import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Typography } from '@material-ui/core';
import Character from './Character/Character';

interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: []
}

const fetchEpisode = async (id: string): Promise<IEpisode> => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  return await res.json();
};

export default function Episode(): JSX.Element {

  const { id } = useParams<{ id: string }>();

  const { data, status } = useQuery([`episode`, id], () => fetchEpisode(id));

  if (status === 'loading') {
    return <p>Loading</p>;
  }

  if (data) {
    return (
      <div>
        <Typography variant="h2">{data.name}</Typography>
        <Typography variant="body1">{data.air_date}</Typography>
        <Typography variant="h4">Characters</Typography>
        {data.characters.map((character: string): JSX.Element | null => {
          const urlParts = character.split('/').filter(Boolean);
          const id = urlParts.pop();
          if (id) {
            return <Character key={id} id={id} />;
          }
          return null;
        })}
      </div>
    );
  }

  return <p>Error</p>;
};