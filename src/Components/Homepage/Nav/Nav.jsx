import "./Nav.css";
import logo from "../../../icons_assets/Logo .svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="container">
      <div>
        <img src={logo} alt="main logo" />
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about" className="about">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
