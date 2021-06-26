/* eslint-disable no-use-before-define */
import React, { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";

import { Home } from "./Home";

import "../themes/global.css";
import { CartContextProvider } from "../hooks/useCart";

function App(): JSX.Element {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
