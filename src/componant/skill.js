import classes from './skill.module.css';



const Skill = ({title,desc,image}) => {
    return(
        <div className={classes["skills-row"]}>
        <img
          className="code-image"
          src={image}
          alt=""
        />
        <div className={classes.desc}>
        <h3>{title}</h3>
        <p>
          {desc}
        </p>
        </div>
      </div>
    )
}

export default Skill;   