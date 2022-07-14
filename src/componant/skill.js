import classes from './skill.module.css';



const Skill = ({image}) => {
    return(
        <div className={classes["skills-row"]}>
        <img
          className="code-image"
          src={image}
          alt=""
        />
        <div className={classes.desc}>
        <h3>Lorem & Ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, quis in duis, iaculis id felis.
          Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam,
          lectus ante, ut lorem eros.
        </p>
        </div>
      </div>
    )
}

export default Skill;   