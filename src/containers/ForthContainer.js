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
          <Project image={keeper} />
        </div>
        <div className="col-md-6 col-sm-12 ml-4" align="center">
          <Project image={flashChat} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12" align="center">
          <Project image={snakegame} />
        </div>
        <div className="col-md-6 col-sm-12" align="center">
          <Project image={neweb} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForthContainer;
