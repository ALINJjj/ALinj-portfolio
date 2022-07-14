import React from "react";
import BottomContainer from "./containers/BottomContainer";
import ContactContainer from "./containers/ContactContainer";
import FirstCOntainer from "./containers/FirstContainer";
import ForthContainer from "./containers/ForthContainer";
import SecondContainer from "./containers/SecondContainer";
import ThirdContainer from "./containers/ThirdContainer";

function App() {
  return (
    <React.Fragment>
      <section id="head">
      <FirstCOntainer/>
      </section>
      <section id="about">
        <SecondContainer/>
        <hr/>
        <ThirdContainer/>
      </section>
      <hr/>
      <section id="project">
        <ForthContainer/>
      </section>
      <hr/>
      <section id="contact">
        <ContactContainer/>
        <BottomContainer/>
      </section>
      
    </React.Fragment>
  );
}

export default App;
