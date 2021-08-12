import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from "react-router-dom";

import Header from "../components/core/header";
import Footer from "../components/core/footer";
import Layout from "../components/layout";

function Routes() {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route path="/" component={Layout} />
            </Switch>
            <Footer />
        </HashRouter>
    );
}

export default Routes;
