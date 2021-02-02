import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useQuery } from "react-query";

const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  return await res.json();
};

export default function Characters():JSX.Element {

  const { status, data } = useQuery('characters', fetchCharacters);

  if (status === 'loading') {
    return <p>Loading</p>;
  }

  if (data) {
    return (
      <div>
        {data.results.map((person) => {
          return (
            <article key={person.id}>
              <Link component={RouterLink} to={`/characters/${person.id}`}>
                <Typography variant="h6">
                  {person.name} - {person.gender}: {person.species}
                </Typography>
              </Link>
            </article>
          )
        })}
      </div>
    )
  }

  return <p>error</p>
}