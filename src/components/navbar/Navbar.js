import React from "react";
import navIcon from "../../assets/images/Tiku.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar flex justify-center items-center bg-base-100 sm:hidden px-7 pt-5 ">
        <div className="mr-7">
          <div className="mt-3 text-4xl">☰</div>
        </div>
        <div className="flex-1">
          <img className="w-32" src={navIcon} alt="icon logo" />
        </div>
        <div>
          <button className="bg-[#1b30cf] px-4 py-2 rounded-md text-white">
            <Link className="text-sm" to="/sign-up">
              Sign Up
            </Link>
          </button>
        </div>
      </nav>

      <nav className="hidden sm:flex py-5 px-10 md:px-14 lg:px-28 items-center">
        <div>
          <img className="w-32" src={navIcon} alt="icon logo" />
        </div>
        <div className="flex grow ml-4">
          <Link className="mx-5 md:mx-10" to="">
            Home
          </Link>
          <Link className="mx-5 md:mx-10" to="">
            List Movie
          </Link>
        </div>
        <div>
          <button className="bg-[#1b30cf] px-8 py-2 rounded-md text-white">
            <Link className="text-sm" to="/sign-up">
              Sign Up
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
