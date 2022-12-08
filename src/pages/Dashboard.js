import React from "react";
import DashboardBody from "../components/DashboardBody";
import Footer from "../components/Footer";
import NavbarAdmin from "../components/navbar/NavbarAdmin";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <DashboardBody />
      <Footer />
    </>
  );
};

export default Dashboard;
