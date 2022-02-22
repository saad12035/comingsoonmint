import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Home from "./pages/homePage/homepage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;