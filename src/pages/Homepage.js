import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import NowShowing from "../components/NowShowing";
import Upcoming from "../components/Upcoming";
import EmailBox from "../components/EmailBox";
import Footer from "../components/Footer";

const Homepage = () => {
  

  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />
      <NowShowing />
      <Upcoming />
      <EmailBox />
      <Footer />
    </div>
  );
};

export default Homepage;
