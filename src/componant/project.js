import classes from "./project.module.css";
const Project = ({ image }) => {
  return (
    <div className={classes.project}>
      <img className = {classes.photo}src={image} alt="project-img" />
      <h3>Lorem & Ipsum</h3>
      <p>
        Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer
        vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante,
        ut lorem eros.
      </p>
    </div>
  );
};
export default Project;
