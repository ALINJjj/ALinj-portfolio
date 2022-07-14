import classes from "./SecondContainer.module.css";
import profile from "../images/profile.jpg";
const SecondContainer = () => {
  return (
    <div className={classes.second}>
      <h2>Hello.</h2>
      <p className={classes.intro}>
        im a junior Fullstack Developer 
      </p>
    </div>
  );
};

export default SecondContainer;
