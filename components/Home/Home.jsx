import React, { Component } from "react";
import classes from "../../styles//home2.module.css";
import Image from "next/image";

const Home2 = () => {
  return (
    <div className={classes.home}>
      {" "}
      <div className={classes.image}>
        <Image src="/LOGO.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Home2;
