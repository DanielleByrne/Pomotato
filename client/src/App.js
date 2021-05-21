import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home"
import Activity from "./Activity"


function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/activity" component={Activity} />
            </Switch>
        </Router>
    )
}

export default App;
