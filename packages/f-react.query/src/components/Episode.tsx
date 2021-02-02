// @ts-nocheck
import {useQuery} from "react-query";
import {useParams} from "react-router";
import {Typography} from "@material-ui/core";

const fetchEpisode = async (id:string) => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    return await res.json();
};


export default function Episode():JSX.Element {

    const { id } = useParams();

    const {data, status, error} = useQuery([`episode`, id], () => fetchEpisode(id));

    if (status === 'loading') {
        return <p>Loading</p>;
    }

    if (status === 'error') {
        return <p>error {error}</p>
    }


    return (
        <div>
            <Typography variant="h2">{data.name}</Typography>
            <Typography variant="body1">{data.air_date}</Typography>
            <Typography variant="h4">Characters</Typography>
        </div>
    )
};