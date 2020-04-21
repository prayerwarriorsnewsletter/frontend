import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import PrayerList from "./components/PrayerList";
// import PrayerPage from './components/PrayerPage'
import NewRequest from "./components/NewRequest";

import prayerDataFile from "./prayerData";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [prayerData, setPrayerData] = useState();

  useEffect(() => {
    setPrayerData(prayerDataFile);
  }, [prayerData]);

  return (
    <div className="App">
      <Navigation />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/prayers"
            render={(props) => <PrayerList {...props} prayers={prayerData} />}
          />
          <Route path="/request" component={NewRequest} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
