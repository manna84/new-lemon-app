import react from "react";
import Nav from "./Components/Homepage/Nav/Nav";
import Header from "./Components/Homepage/Header/Header";
import Highlight from "./Components/Homepage/Highlight/Highlight";
import Testimonials from "./Components/Homepage/Testimonials/Testimonials";
import Card from "./Components/Homepage/Card/Card";
import Footer from "./Components/Homepage/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header title="Little Lemon" btn="Reserve a Table" />
      <Highlight
        title="This weeks specials!"
        btn="Online Menu"
        Order="Order a delivery"
      />
      <Testimonials title="Testimonials" />
      <Card title="Little Lemon" />
      <Footer />
    </div>
  );
};

export default App;
