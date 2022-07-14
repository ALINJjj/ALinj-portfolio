import React from "react";
import CLoud from "../componant/Cloud";
import classes from "./FirstContainer.module.css";
import mountain from "../images/mountain.png";
import Header from "../componant/Header";
const FirstCOntainer = () => {
  return (
      <div className={classes.top}>
        <Header />
        <CLoud class="top-cloud" />
        <h1>I'm Alinj</h1>
        <h2><span className={classes.under}>Front</span>end Developer</h2>
        <CLoud class="bottom-cloud" />
        <img  className="img-fluid" src={mountain} alt="mountain img" />
      </div>
  );
};
export default FirstCOntainer;
