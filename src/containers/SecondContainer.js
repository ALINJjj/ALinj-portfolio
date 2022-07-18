import classes from "./SecondContainer.module.css";
import profile from "../images/PP-2.png";
const SecondContainer = () => {
  return (
    <div className={classes.second}>
    <img className={classes.avatar} src = {profile} alt="Alinj Profile"/>
      <h2>Hello.</h2>
      <p className={classes.intro}>
        im a junior Developer , a web Developer trying to find some expereince.
        When it come To achive my Goal No one will stop me
      </p>
    </div>
  );
};

export default SecondContainer;
