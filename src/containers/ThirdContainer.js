import React from "react";
import mobile from "../images/mobile.gif"
import Skill from "../componant/skill"
import classes from "./ThirdContainer.module.css"
const ThirdContainer = () => {
  return (
    <div className={classes.third}>
      <h2>Skills</h2>
      <Skill image="https://media4.giphy.com/media/26n7b7PjSOZJwVCmY/giphy.webp?cid=ecf05e47mjhbxlemltieizttp2fqrlghkckththmxcqe5h9u&rid=giphy.webp&ct=g"/>
      <Skill image={mobile}/>
    </div>
  );
};

export default ThirdContainer;
