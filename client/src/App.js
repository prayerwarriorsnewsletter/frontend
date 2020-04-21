import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import PrayerList from "./components/PrayerList";
// import PrayerPage from './components/PrayerPage'
import NewRequest from "./components/NewRequest";

import { db, auth } from "./services/firebase";

// import prayerDataFile from "./prayerData";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [prayerData, setPrayerData] = useState(null);

  useEffect(() => {
    db.collection("users")
      .get()
      .then((snapshot) => {
        const userData = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userData.push(data);
        });
        setPrayerData(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/prayers"
            render={(props) => (
              <PrayerList {...props} prayerData={prayerData} />
            )}
          />
          <Route path="/request" component={NewRequest} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
