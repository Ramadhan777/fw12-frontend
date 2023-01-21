import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import HistoryBody from "../components/HistoryBody";
import NavbarProfile from "../components/navbar/NavbarProfile";
import axios from "axios";
import { useSelector } from "react-redux";

const History = () => {
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios.get("https://fw12-backend-eta.vercel.app/profile", { headers: { Authorization: `Bearer ${token}` } }).then((res) => setProfile(res.data.results));
  }, [token]);

  return (
    <>
      <NavbarProfile />
      <HistoryBody profile={profile}/>
      <Footer /> 
    </>
  );
};

export default History;
