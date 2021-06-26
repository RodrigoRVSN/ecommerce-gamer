/* eslint-disable no-use-before-define */
import React, { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";

import { Home } from "./Home";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
