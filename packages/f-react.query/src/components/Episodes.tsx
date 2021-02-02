import {Typography, Link} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import {useQuery} from "react-query";


const fetchEpisodes = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    return await res.json();
};

export default function Episodes():JSX.Element {

    const { data, status } = useQuery('episodes', fetchEpisodes);

    if (status === 'loading') {
        return <p>Loading</p>;
    }

    if (status === 'error') {
        return <p>Error</p>
    }

    return (
        <>
            <Typography variant="h2">Episodes</Typography>
            {data.results.map((episode:any)=> {
                return (
                    <article key={episode.id}>
                        <Link component={RouterLink} to={`/episodes/${episode.id}`}>
                            <Typography variant='h6'>
                                {episode.episode} - {episode.name} - <strong>{episode.air_date}</strong>
                            </Typography>
                        </Link>
                    </article>
                )
            })}
        </>
    );
}