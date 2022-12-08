import React from "react";
import Footer from "../components/Footer";
import ManageMovieBody from "../components/ManageMovieBody";
import NavbarAdmin from "../components/navbar/NavbarAdmin";

const ManageMovie = () => {
  return (
    <>
      <NavbarAdmin />
      <ManageMovieBody />
      <Footer />
    </>
  );
};

export default ManageMovie;
