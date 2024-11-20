import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Nav">
      <div className="navbar mobile">
        <div className="logo">
          <img src="/assets/images/Logo.svg" alt="LOGO" />
          <h3>Start</h3>
        </div>
        <div className="ham">
          <img src="/assets/images/Hamburger.png" alt="Hamburger Icon" />
        </div>
      </div>
      <div className="navbar desktop">
        <div className="logo">
          <img src="/assets/images/Logo.svg" alt="LOGO" />
          <h3>Start</h3>
        </div>
        <div className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
