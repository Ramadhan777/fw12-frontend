import React from "react";
import Navbar from "../components/navbar/Navbar";
import NavbarProfile from "../components/navbar/NavbarProfile";
import Hero from "../components/Hero";
import NowShowing from "../components/NowShowing";
import Upcoming from "../components/Upcoming";
import EmailBox from "../components/EmailBox";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Homepage = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="home-wrapper">
      {token ? <NavbarProfile /> : <Navbar />}
      <Hero />
      <NowShowing desc={true} />
      <Upcoming />
      <EmailBox />
      <Footer />
    </div>
  );
};

export default Homepage;
