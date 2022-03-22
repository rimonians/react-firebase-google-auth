import React from "react";
import classes from "./Card.module.css";
import useAuth from "../../hooks/useAuth";

const Card = () => {
  const { authState, handleSignOut } = useAuth();
  const { photoUrl, displayName, email } = authState;
  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={photoUrl} alt="" />
      <h2 className={classes.name}>{displayName}</h2>
      <p className={classes.email}>{email}</p>
      <div className={classes.actions}>
        <button className={classes.signOutBtn} onClick={handleSignOut}>
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Card;
