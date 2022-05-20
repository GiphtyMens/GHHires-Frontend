import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
// import Shops from "./components/Shops";
import Rated from "./components/Rated";
import Career from "./components/Career";
import Plumb from "./components/Plumb";
import Submit from "./components/Submit";
import Navbar from "../components/Navbar/index";

const Home = () => {
  return (
    <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
      <Navbar />
      <Header />
      <Category />
      <Plumb />
      {/* <Shops /> */}
      <Rated />
      <Career />
      <Submit />
    </div>
  );
};

export default Home;
