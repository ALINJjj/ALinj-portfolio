import profile from "../images/ALinj.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light mx-4">
        <div>
          <a className="navbar-brand" href="/">
          <img  className={classes.avatar} src={profile} alt="admin-profile"/>
                    </a>
        </div>        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#contact ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
