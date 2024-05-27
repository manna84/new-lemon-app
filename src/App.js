import react from "react";
import Nav from "./Components/Homepage/Nav/Nav";
import Header from "./Components/Homepage/Header/Header";
import Highlight from "./Components/Homepage/Highlight/Highlight";

const App = () => {
  return (
    <div>
      <Nav />
      <Header btn="Reserve a Table" />
      <Highlight
        title="This weeks specials!"
        btn="Online Menu"
        Order="Order a delivery"
      />
    </div>
  );
};

export default App;
