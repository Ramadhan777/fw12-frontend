import React from "react";
import NavbarProfile from "../components/navbar/NavbarProfile";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

const TicketResultExpired = () => {
  return (
    <>
      <NavbarProfile/>
      <Ticket status="Ticket Expired"/>
      <Footer />
    </>
  );
};

export default TicketResultExpired;
