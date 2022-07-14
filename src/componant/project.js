import classes from "./project.module.css";
const Project = ({ title,desc,image }) => {
  return (
    <div className={classes.project}>
      <img className = {classes.photo}src={image} alt="project-img" />
      <h3>{title}</h3>
      <p>
        {desc}
      </p>
    </div>
  );
};
export default Project;
