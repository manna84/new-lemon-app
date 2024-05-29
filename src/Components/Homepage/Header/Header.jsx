import { useDebugValue } from "react";
import "./Header.css";
import hero_img from "../../../icons_assets/restauranfood.jpg";

const Header = (props) => {
  return (
    <header>
      <div className="hero-box container">
        <div>
          <h1>{props.title}</h1>
          <h3>Chicago</h3>

          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes severd with modern twist
          </p>
          <button className="btn">{props.btn}</button>
        </div>
        <div className="hero-img">
          <img src={hero_img} alt="hero image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
