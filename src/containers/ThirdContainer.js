import React from "react";
import mobile from "../images/mobile.gif"
import Skill from "../componant/skill"
import classes from "./ThirdContainer.module.css"
const ThirdContainer = () => {
  return (
    <div className={classes.third}>
      <h2>Skills</h2>
      <Skill title="React js & Node js" desc = "create any responsive design or app using react so i let any user have a good experience , using node js as a backend building databases(mongoose) and restApi i have a lot of demo project " image="https://media4.giphy.com/media/26n7b7PjSOZJwVCmY/giphy.webp?cid=ecf05e47mjhbxlemltieizttp2fqrlghkckththmxcqe5h9u&rid=giphy.webp&ct=g"/>
      <Skill title=" Flutter developer" desc = "building a responsove apps useing flutter on android and same on ios app with very good performence using firebase backend " image={mobile}/>
    </div>
  );
};

export default ThirdContainer;
