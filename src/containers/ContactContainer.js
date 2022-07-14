import classes from './ContactContainer.module.css';
import FileSaver from 'file-saver';
const ContactContainer = () => {
 
  return (
    <div className="container-fluid mb-5">
      <h2>Get In Touch</h2>
      <h3>Lorem ipsum dolor sit amet, non elit.</h3>
      <p className={classes['contact-message']}>
        Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales,
        tellus donec dui, ornare erat.
      </p>
        
      <a className={classes.btn} href="mailto:name@email.com">
        CONTACT ME
      </a>
    </div>
  );
};

export default ContactContainer;
