import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from "react-query";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "10px"
  },
  media: {
    width: 300,
    height: 300,
  },
});

const fetchCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  return await res.json();
};

export default function Characters():JSX.Element {
  const classes = useStyles();
  const { status, data } = useQuery('characters', fetchCharacters);

  if (status === 'loading') {
    return <p>Loading</p>;
  }

  if (data) {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h2">Characters</Typography>
        </Grid>

        {data.results.map((person:any) => {
          return (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={person.image}
                    title={person.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {person.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {person.species}, {person.gender}
                      <br />
                      Status: {person.status}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          )
        })}
      </Grid>
    )
  }

  return <p>error</p>
}