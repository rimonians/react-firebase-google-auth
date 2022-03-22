import React from "react";
import classes from "./SignInButton.module.css";

const SignInButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classes.signInButton}>
      {children}
    </button>
  );
};

export default SignInButton;
