import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { fetchCharacter } from './helpers';
import { useParams } from 'react-router';


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

export default function CharacterBio():JSX.Element {

  const classes = useStyles();

  const { id } = useParams<{id:string}>();

  const { data, status } = useQuery(['character', id], () =>  fetchCharacter(id))

  if (status === 'loading') {
    return <p key={id}>Loading Character</p>;
  }

  if (data) {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.image}
            title={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.species}, {data.gender}
              <br />
              Status: {data.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (<p>Error</p>)
}