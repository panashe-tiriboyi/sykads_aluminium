import React from "react";
import classes from "../../styles/Welcome.module.css";

const Welcome = () => {
  return (
    <>
      <div className={classes.welcome}>
        <h1>Welcome to Sykads Aluminium Solutions</h1>
      </div>
      <div>
        <p className={classes.motto}>Believe in Better</p>
      </div>
    </>
  );
};

export default Welcome;
