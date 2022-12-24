import React from "react";
import footerIcon from "../assets/images/Tiku.svg";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import { Link } from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col px-10 md:px-14 lg:px-28 pt-20 pb-10">
      <div className="flex flex-col max-[562px]:items-start min-[931px]:flex-row max-[931px]:items-center mb-10">
        <div className="flex flex-col grow max-[562px]:items-start max-[930px]:items-center max-[562px]:text-start max-[930px]:text-center max-[930px]:mb-5">
          <img className="w-40 h-15 mb-5" src={footerIcon} alt="Tikckitz" />
          <p className="text-[#6E7191]">
            Stop waiting in line. Buy tickets <br />
            conveniently, watch movies quietly.
          </p>
        </div>
        <div className="flex flex-col grow max-[562px]:items-start max-[930px]:items-center max-[562px]:text-start max-[930px]:text-center max-[930px]:mb-5">
          <p className="mb-5 font-bold">Explore</p>
          <ul>
            <li>
              <Link className="text-[#6E7191] mb-7" to="">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#6E7191]" to="">
                List Movie
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col grow max-[562px]:items-start max-[930px]:items-center max-[930px]:mb-5" >
          <p className="mb-5 font-bold">Our Sponsor</p>
          <ul className="flex flex-col max-[562px]:items-start max-[930px]:items-center">
            <li>
              <img src={brand1} alt="ebv.id" />
            </li>
            <li>
              <img className="my-7" src={brand2} alt="CineOne 21" />
            </li>
            <li>
              <img src={brand3} alt="Hiflix" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-[562px]:items-start grow max-[930px]:items-center">
          <p className="mb-5 font-bold">Follow us</p>
          <div>
            <div className="mb-4 flex items-center">
              <FaFacebook/>
              <p className="ml-2">Tickitz Cinema id</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaInstagram />
              <p className="ml-2">tickitz.id</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaTwitter />
              <p className="ml-2">tickitz.id</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaYoutube />
              <p className="ml-2">Tickitz Cinema id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-3">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
