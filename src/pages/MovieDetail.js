import React from "react";
import Footer from "../components/Footer";
import MovieDetailDesc from "../components/MovieDetailDesc";
import NavbarProfile from "../components/navbar/NavbarProfile";
import ShowtimeAndTicket from "../components/ShowtimeAndTicket";

const MovieDetail = () => {
  return (
    <>
      <NavbarProfile />
      <MovieDetailDesc />
      <ShowtimeAndTicket />
      <Footer />
    </>
  );
};

export default MovieDetail;
