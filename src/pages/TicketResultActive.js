import React, {useEffect} from "react";
import NavbarProfile from "../components/navbar/NavbarProfile";
import QRcode from "../assets/images/QR-code.svg"
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import http from "../helpers/http";

const TicketResultActive = () => {
  const [transaction, setTransaction] = React.useState({});
  const {state} = useLocation()
  console.log(state)
  useEffect(() => {
    http()
      .get(`/transactions/${state}`)
      .then((res) => setTransaction(res.data.results))
      .catch((err) => {
        console.log(err);
        setTransaction({});
      });
  }, [state]);

  return (
    <>
      <NavbarProfile/>
      <Ticket QRcode={QRcode} transaction={transaction}/>
      <Footer />
    </>
  );
};

export default TicketResultActive;
