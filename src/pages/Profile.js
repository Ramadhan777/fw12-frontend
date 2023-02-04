import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import NavbarProfile from "../components/navbar/NavbarProfile";
import ProfileBody from "../components/ProfileBody";
import http from '../helpers/http'

const Profile = () => {
  const [profile, setProfile] = useState({});
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    http(token).get("/profile").then((res) => setProfile(res.data.results));
  }, [token]);
  return (
    <>
      <NavbarProfile />
      <ProfileBody profile={profile}/>
      <Footer />
    </>
  );
};

export default Profile;
