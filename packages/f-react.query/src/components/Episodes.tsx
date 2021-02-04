import { Grid, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useQuery } from 'react-query';

interface IEpisode {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
}


interface IEpisodesResponse {
  info: {
    count: string;
    next: string;
    pages: string;
    prev: string | null
  },
  results: IEpisode[];
}

const fetchEpisodes = async (): Promise<IEpisodesResponse> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');

  if (!response.ok) {
    throw new Error('Fetch Error');
  }
  const data = await response.json();

  return data as IEpisodesResponse;
};

export default function Episodes(): JSX.Element {

  const { data, status } = useQuery('episodes', fetchEpisodes);

  if (status === 'loading') {
    return <p>Loading</p>;
  }

  if (data) {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5">Episodes</Typography>
        </Grid>
        {data.results.map((episode: IEpisode) => {
          return (
            <Grid item xs={12} key={episode.id}>
              <article key={episode.id}>
                <Link component={RouterLink} to={`/episodes/${episode.id}`}>
                  <Typography variant='h6'>
                    {episode.episode} - {episode.name} - <strong>{episode.air_date}</strong>
                  </Typography>
                </Link>
              </article>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return <p>Error</p>;
}