import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from "./views/FrontPage/FrontPage";
import NewsPage from "./views/News/NewsPage";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/uutiset" component={NewsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
