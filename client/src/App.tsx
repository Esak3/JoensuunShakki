import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from "./views/FrontPage";
import NewsPage from "./views/News";
import RulesPage from "./views/Rules";
import OpeningsPage from "./views/Openings"
import ClubActivityPage from "./views/ClubActivity";
import ContactPage from "./views/Contact";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/uutiset" component={NewsPage} />
          <Route exact path="/saannot" component={RulesPage} />
          <Route exact path="/aloituksia" component={OpeningsPage} />
          <Route exact path="/kerhotoiminta" component={ClubActivityPage} />
          <Route exact path="/yhteystiedot" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
