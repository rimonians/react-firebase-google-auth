import React from "react";
import classes from "./App.module.css";
import useAuth from "./hooks/useAuth";
import SignInButton from "./components/SignInButton/SignInButton";
import Card from "./components/Card/Card";

const App = () => {
  const { authState, handleSignIn } = useAuth();
  const { loading, isLoggedIn } = authState;
  return (
    <div className={classes.container}>
      {!isLoggedIn && !loading && (
        <SignInButton onClick={handleSignIn}>Sign in with Google</SignInButton>
      )}

      {isLoggedIn && <Card />}
    </div>
  );
};

export default App;
