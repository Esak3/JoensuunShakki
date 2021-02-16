import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from "./views/FrontPage";
import NewsPage from "./views/News";
import RulesPage from "./views/Rules";
import OpeningsPage from "./views/Openings"

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/uutiset" component={NewsPage} />
          <Route exact path="/saannot" component={RulesPage} />
          <Route exact path="/aloituksia" component={OpeningsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
