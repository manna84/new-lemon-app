import Highlight from "../Homepage/Highlight/Highlight";
import Card from "../Homepage/Card/Card";
import Testimonials from "../Homepage/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Highlight
        title="This weeks specials!"
        btn="Online Menu"
        Order="Order a delivery"
      />
      <Testimonials title="Testimonials" />
      <Card title="Little Lemon" />
    </>
  );
};

export default Homepage;
