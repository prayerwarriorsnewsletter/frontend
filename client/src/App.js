import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyA7f9Wx_BtVnvvjNhW2Xae9cpBvGmCGUek",
  authDomain: "prayerwarriorsnewsletter.firebaseapp.com"
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });
  }, [isLoggedIn]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {isLoggedIn ? (
            <div>Logged In</div>
          ) : (
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
