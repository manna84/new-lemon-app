import React from "react";
import Header from "./Components/Homepage/Header/Header";
import Footer from "./Components/Homepage/Footer/Footer";
import Nav from "./Components/Homepage/Nav/Nav";
import Highlight from "./Components/Homepage/Highlight/Highlight";
import Card from "./Components/Homepage/Card/Card";
import Testimonials from "./Components/Homepage/Testimonials/Testimonials";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <Header title="Little Lemon" btn="Reserve a Table" />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
