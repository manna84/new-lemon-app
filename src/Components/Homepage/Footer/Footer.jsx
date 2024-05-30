import "./Footer.css";

import logo from "../../../icons_assets/Footer Logo - Little Lemon.png";
import logo1 from "../../../icons_assets/Facebook.png";
import logo2 from "../../../icons_assets/Instagram.png";
import logo3 from "../../../icons_assets/TwitterX.png";
import logo4 from "../../../icons_assets/YouTube.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-box container">
        <div className="media-box">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quam
            deserunt et
          </p>
          <ul className="social-logo">
            <li>
              <a href="">
                <img className="logo" src={logo1} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={logo2} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={logo3} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={logo4} alt="" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <h5>Navigation</h5>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">Reservation</a>
            </li>
            <li>
              <a href="">Order online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <h5>Hours</h5>
          <ul>
            <li>
              <p>Monday-Friday</p>
              <p>8am-10pm</p>
            </li>
            <li>
              <p>Monday-Friday</p>
              <p>8am-10pm</p>
            </li>
            <li>
              <p>Monday-Friday</p>
              <p>8am-10pm</p>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <h5>Hours</h5>
          <ul>
            <li>
              <a href="">Address Here..</a>
            </li>
            <li>
              <a href="">Phone number</a>
            </li>
            <li>
              <a href="">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
