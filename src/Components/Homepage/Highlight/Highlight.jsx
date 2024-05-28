import "./Highlight.css";
import image1 from "../../../icons_assets/greek salad.jpg";
import image2 from "../../../icons_assets/bruchetta.svg";
import image3 from "../../../icons_assets/lemon dessert.jpg";
import del_image from "../../../icons_assets/scooter-delivery.png";

const Highlight = (props) => {
  return (
    <section>
      <div className="container">
        <div className="highlight-head">
          <h1>{props.title}</h1>
          <button className="btn">{props.btn}</button>
        </div>

        <div className="highlight-card">
          <div>
            <div className="img-card">
              <img src={image1} alt="Green salad" />
            </div>
            <ul>
              <li className="price-card">
                <h4>Greek salad</h4>
                <h5>$12.99</h5>
              </li>
              <li>
                <p>
                  jhkasjfhkajsfka f kdajhfkajfkja kfkasjhf kash fkhas fksha kf
                  hkashfksah fkh akfha ksfjhkashf sh fkhas fksha kf hkashfksah
                  fkh akfha ksfjhkas
                </p>
              </li>

              <li>
                <button>
                  {props.Order} <img src={del_image} alt="scooter image" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="img-card">
              <img src={image2} alt="Green salad" />
            </div>
            <ul>
              <li className="price-card">
                <h4>Brochetta</h4>
                <h5>$5.99</h5>
              </li>
              <li>
                <p>
                  jhkasjfhkajsfka f kdajhfkajfkja kfkasjhf kash fkhas fksha kf
                  hkashfksah fkh akfha ksfjhkashf sh fkhas fksha kf hkashfksah
                  fkh akfha ksfjhkas
                </p>
              </li>

              <li>
                <button>
                  {props.Order} <img src={del_image} alt="scooter image" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="img-card">
              <img src={image3} alt="Green salad" />
            </div>
            <ul>
              <li className="price-card">
                <h4>Lemon Desert</h4>
                <h5>$5.00</h5>
              </li>
              <li>
                <p>
                  jhkasjfhkajsfka f kdajhfkajfkja kfkasjhf kash fkhas fksha kf
                  hkashfksah fkh akfha ksfjhkashf sh fkhas fksha kf hkashfksah
                  fkh akfha ksfjhkas
                </p>
              </li>

              <li>
                <button>
                  {props.Order} <img src={del_image} alt="scooter image" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
