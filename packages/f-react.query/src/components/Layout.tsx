import { Link, Button } from "@material-ui/core";
import { Switch, Route, Link as RouterLink, Redirect } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Episodes from "./Episodes";
import Episode from "./Episode";
import Characters from './Characters';
import CharacterBio from './Character/CharacterBio';
import Optimistic from './Optimistic';

const useStyles = makeStyles(theme => ({
    main: {
        margin: "0 auto",
        padding: "16px"
    },
    nav: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#000",
        color: "#fff",
        "& button": {
            margin: theme.spacing(1)
        }
    }
}));

export default function Layout():JSX.Element {
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
                <Link component={RouterLink} to="/optimistic">
                    <Button color='primary'>Optimistic</Button>
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
                    <Route exact path="/optimistic">
                        <Optimistic />
                    </Route>
                    <Route path="/">
                        <Redirect to="/episodes"/>
                    </Route>
                </Switch>
            </main>
        </div>
    )


}