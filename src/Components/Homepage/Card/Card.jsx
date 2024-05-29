import card1 from "../../../icons_assets/Mario and Adrian A.jpg";
import card2 from "../../../icons_assets/restaurant chef B.jpg";

import "./Card.css";

const Card = (props) => {
  return (
    <section>
      <div className="card-box container">
        <div className="card-img">
          <ul>
            <li>
              <img src={card1} alt="" />
            </li>
            <li>
              <img src={card2} alt="" />
            </li>
          </ul>
        </div>

        <div>
          <h1>{props.title}</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            ducimus ab nemo culpa eligendi inventore assumenda, tempora rerum
            laudantium
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
