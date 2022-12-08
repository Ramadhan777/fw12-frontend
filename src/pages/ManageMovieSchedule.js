import React from "react";
import ManageMovieScheduleBody from "../components/ManageMovieScheduleBody";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import Footer from "../components/Footer"

const ManageMovieSchedule = () => {
  return (
    <>
      <NavbarAdmin />
      <ManageMovieScheduleBody />
      <Footer />
    </>
  );
};

export default ManageMovieSchedule;
