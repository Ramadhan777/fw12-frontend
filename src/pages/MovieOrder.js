import React from "react";
import Footer from "../components/Footer";
import MovieOrderBody from "../components/MovieOrderBody";
import NavbarProfile from "../components/navbar/NavbarProfile";

const MovieOrder = () => {
  return (
    <>
      <NavbarProfile />
      <MovieOrderBody />
      <Footer />
    </>
  );
};

export default MovieOrder;
