import React from "react";
import Project from "../componant/project";
import keeper from "../images/keeper.png";
import flashChat from "../images/flashchat.png";
import snakegame from "../images/snakegame.png";
import neweb from "../images/new.png"

const ForthContainer = () => {
  return (
    <React.Fragment>
      <h2>Projects</h2>
      <div className="col"></div>
      <div className="row ">
        <div className="col-md-6 col-sm-12 " align="center">
          <Project title ="google Keeper Note clone" desc = "i have made this web while training on react this app use react js as frontend and  firbase for saving note and user" image={keeper} />
        </div>
        <div className="col-md-6 col-sm-12 ml-4" align="center">
          <Project title ="Flash chat app" desc = " an flutter aplication this app use authentication to enter the chat room and use firbase as a database store chat history"  image={flashChat} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12" align="center">
          <Project title ="Snake Game " desc = "this game is coded using python especialy with turtle library"  image={snakegame} />
        </div>
        <div className="col-md-6 col-sm-12" align="center">
          <Project title ="phone cell" desc = "im working on a new project ,a real project, for a phone shop,using react js as a frontend and node js as backend wiht heroku for hosting"  image={neweb} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForthContainer;
