import cloudImage from "../images/cloud.png";
import classes from "./cloud.module.css";
const CLoud = (props) => {
  return (
      <img className={classes[props.class]} src={cloudImage} alt="cloudImage" />
  );
};
export default CLoud;
