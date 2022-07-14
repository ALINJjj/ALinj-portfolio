import classes from './ContactContainer.module.css';
import FileSaver from 'file-saver';
const ContactContainer = () => {
 
  return (
    <div className="container-fluid mb-5">
      <h2>Get In Touch</h2>
      <h3>Hire me ?.</h3>
      <p className={classes['contact-message']}>
          I love new expereince by working in team, 
          im available for any good position fulltime,ready for training on new techs
          so if you are imperessed Contact me 
      </p>
        
      <a className={classes.btn} href="mailto:alijanbeincs@gmail.com">
        CONTACT ME
      </a>
    </div>
  );
};

export default ContactContainer;
