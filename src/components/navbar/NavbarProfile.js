import React from "react";
import navIcon from "../../assets/images/Tiku.svg";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search.svg";
import profileImage from "../../assets/images/profile.svg";

const NavbarProfile = () => {
  return (
    <nav className="nav-bar flex py-5 px-28 items-center">
      <div>
        <img className="w-32" src={navIcon} alt="icon logo" />
      </div>
      <div className="flex grow ml-4">
        <Link className="mx-10" to="/homepage">
          Home
        </Link>
        <Link className="mx-10" to="/list-movie">
          List Movie
        </Link>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="group flex hover:border-2 hover:border-[#dedede] hover:bg-[#fcfdfe] rounded-2xl">
          <img className="pl-3 mr-3" src={searchIcon} alt="search" />
          <div>
            <input className="hidden group-hover:flex py-3 pr-2 text-xs rounded-2xl bg-[#fcfdfe] focus:outline-none" type="search" name="search" id="search" placeholder="Search Movie Name ..." />
          </div>
        </div>
        <div className="group relative">
          <img src={profileImage} alt="profile" />
          <div className="hidden group-hover:block absolute right-0 border-2 border-[#dedede] bg-[#FCFDFE] py-2 pl-4 pr-8">
            <div>
              <Link to="/profile">Profile</Link>
            </div>
            <div>
              <Link to='/'>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarProfile;
