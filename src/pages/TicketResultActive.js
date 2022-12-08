import React from "react";
import NavbarProfile from "../components/navbar/NavbarProfile";
import QRcode from "../assets/images/QR-code.svg"
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";

const TicketResultActive = () => {
  return (
    <>
      <NavbarProfile/>
      <Ticket QRcode={QRcode}/>
      <Footer />
    </>
  );
};

export default TicketResultActive;
