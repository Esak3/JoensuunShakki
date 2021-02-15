import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FrontPage from "./views/FrontPage/FrontPage";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={FrontPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
