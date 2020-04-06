import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";
import firebase from "firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import PrayerList from "./components/PrayerList";

import axiosBase from "./utils/axiosAuth.js";

import prayerDataFile from "./prayerData";
import Navbar from "./components/Navbar";

firebase.initializeApp({
  apiKey: "AIzaSyA7f9Wx_BtVnvvjNhW2Xae9cpBvGmCGUek",
  authDomain: "prayerwarriorsnewsletter.firebaseapp.com",
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [prayerData, setPrayerData] = useState([]);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });
    if (isLoggedIn) {
      checkingAxios();
      setPrayerData(prayerDataFile);
    }
  }, [isLoggedIn]);

  function checkingAxios() {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        axiosBase({
          method: "get",
          url: "/",
          headers: {
            AuthToken: idToken,
          },
        })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Navbar />
      {/* <button
          onClick={checkingAxios}
          >Testing backend</button> */}
      {isLoggedIn ? (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/prayers" component={PrayerList} />
        </div>
      ) : (
        <Route
          path="/"
          render={(props) => <Login {...props} uiConfig={uiConfig} />}
        />
      )}
    </div>
  );
}

export default App;
