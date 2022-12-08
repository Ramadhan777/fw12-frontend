import React from "react";
import NavbarProfile from "../components/navbar/NavbarProfile";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

const TicketResultUsed = () => {
  return (
    <>
      <NavbarProfile/>
      <Ticket status="Ticket Already Used"/>
      <Footer />
    </>
  );
};

export default TicketResultUsed;
