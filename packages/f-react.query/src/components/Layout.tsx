import { Link, Button } from "@material-ui/core";
import { Switch, Route, Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Episodes from "./Episodes";
import Episode from "./Episode";

const useStyles = makeStyles(theme => ({
    main: {
        margin: "0 auto",
        padding: "16px"
    },
    nav: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
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
                <Link component={RouterLink} to="/">
                    <Button color='primary'>Home</Button>
                </Link>
                <Link component={RouterLink} to="/episodes">
                    <Button color='primary'>Episodes</Button>
                </Link>
                <Link component={RouterLink} to="/characters">
                    <Button color='primary'>Characters</Button>
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
                        Characters
                    </Route>
                    <Route exact path="/characters/:id">
                        Characters
                    </Route>
                    <Route path="/">
                        Home
                    </Route>
                </Switch>
            </main>
        </div>
    )


}