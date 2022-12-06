import React from "react";
import navIcon from "../assets/images/Tickitz 2.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex py-5 px-28 items-center">
      <div>
        <img className="w-32" src={navIcon} alt="icon logo" />
      </div>
      <div className="flex grow ml-4">
        <Link className="mx-10" to="">
          Home
        </Link>
        <Link className="mx-10" to="">
          List Movie
        </Link>
      </div>
      <div>
        <button className="bg-[#5f2eea] px-8 py-2 rounded-md text-white">
          <Link className="text-sm" to="/sign-in">
            Sign Up
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
