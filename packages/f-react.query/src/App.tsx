import {QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

export default function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <ThemeProvider theme={theme} >
                    <Layout />
                    <ReactQueryDevtools initialIsOpen />
                </ThemeProvider>
            </Router>
        </QueryClientProvider>
    );
}

const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: "Roboto Mono, monospace",
        },
        h2: {
            fontFamily: "Roboto Mono, monospace",
        },
        h3: {
            fontFamily: "Roboto Mono, monospace",
        },
        h4: {
            fontFamily: "Roboto Mono, monospace",
        },
        h5: {
            fontFamily: "Roboto Mono, monospace",
        },
        h6: {
            fontFamily: "Roboto Mono, monospace",
        },
    },
});
