import "./Testimonials.css";
import person1 from "../../../icons_assets/person1.jpg";
import person2 from "../../../icons_assets/person2.jpg";
import person3 from "../../../icons_assets/person3.jpg";
import person4 from "../../../icons_assets/person4.jpg";
import star from "../../../icons_assets/star.png";

const Testimonials = (props) => {
  return (
    <section className="testimonial-section">
      <h1>{props.title}</h1>
      <div className="testimonial-cards container">
        <div className="testimonial-card">
          <ul className="person-details">
            <li>
              <img src={person1}></img>
            </li>
            <li>
              <h4>Alice Smith</h4>
            </li>
          </ul>
          <ul className="star-list">
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus
            nostrum quae quos soluta ab id consectetur
          </p>
        </div>

        <div className="testimonial-card">
          <ul className="person-details">
            <li>
              <img src={person2}></img>
            </li>
            <li>
              <h4>John Doe</h4>
            </li>
          </ul>
          <ul className="star-list">
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus
            nostrum quae quos soluta ab id consectetur
          </p>
        </div>

        <div className="testimonial-card">
          <ul className="person-details">
            <li>
              <img src={person3}></img>
            </li>
            <li>
              <h4>Ralitsa Lefterova</h4>
            </li>
          </ul>
          <ul className="star-list">
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus
            nostrum quae quos soluta ab id consectetur
          </p>
        </div>

        <div className="testimonial-card">
          <ul className="person-details">
            <li>
              <img src={person4}></img>
            </li>
            <li>
              <h4>Michael Brown</h4>
            </li>
          </ul>
          <ul className="star-list">
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
            <li>
              <img src={star} alt="star" />
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio natus
            nostrum quae quos soluta ab id consectetur
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
