import Nav from "./Components/Nav/Nav";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/Home";
import SearchDetails from "./Pages/SearchDetails/SearchDetails";
import "./index.css";
import Favourites from "./Pages/Favourites/Favourites";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />

      <div className="container">
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/favourites" component={Favourites} />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Route path="/search/:location" component={SearchDetails} />
          </MuiPickersUtilsProvider>
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </>
  );
}

export default App;
