import Links from './Links';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png";

const Nav = () => (
  <nav className="navbar sticky-top navbar-expand-md nav-pills px-5 bg-light ">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <img
          className="d-inline-block"
          width="140"
          height="40"
          src={Logo}
          alt="Little Lemon"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul 
        className="text-dark collapse navbar-collapse nav navbar-nav"
        id="navbarCollapse"
      >
        <Links />
      </ul>
    </div>
  </nav>
);

export default Nav;
