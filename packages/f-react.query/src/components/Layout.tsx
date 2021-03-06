import { Button, Link } from '@material-ui/core';
import { Link as RouterLink, Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Episodes from './Episodes';
import Episode from './Episode';
import Characters from './Characters';
import CharacterBio from './Character/CharacterBio';
import Optimistic from './Optimistic';
import Todos from './Todos';

const useStyles = makeStyles(theme => ({
  main: {
    margin: '0 auto',
    padding: '16px',
  },
  nav: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: "#000",
    color: '#fff',
    '& button': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Layout(): JSX.Element {
  const classes = useStyles();

  return (
    <div className="app">
      <nav className={classes.nav}>
        <Link component={RouterLink} to="/episodes">
          <Button color='primary'>Episodes</Button>
        </Link>
        <Link component={RouterLink} to="/characters">
          <Button color='primary'>Characters</Button>
        </Link>
        <Link component={RouterLink} to="/query-todos">
          <Button color='primary'>Query Todos</Button>
        </Link>
        <Link component={RouterLink} to="/redux-todos">
          <Button color='primary'>Redux Todos</Button>
        </Link>
      </nav>
      <main className={classes.main}>
        <Switch>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/episodes/:id">
            <Episode />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
          <Route exact path="/characters/:id">
            <CharacterBio />
          </Route>
          <Route exact path="/query-todos">
            <Optimistic />
          </Route>
          <Route exact path="/redux-todos">
            <Todos />
          </Route>
          <Route path="/">
            <Redirect to="/episodes" />
          </Route>
        </Switch>
      </main>
    </div>
  );


}