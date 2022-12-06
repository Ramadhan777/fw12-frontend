import React from "react";
import footerIcon from "../assets/images/Tickitz 2.svg"
import brand1 from "../assets/images/brand-1.svg"
import brand2 from "../assets/images/brand-2.svg"
import brand3 from "../assets/images/brand-3.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col px-28 pt-18 pb-10">
      <div className="flex mb-10">
        <div className="flex flex-col grow">
          <img className="w-40 h-15 mb-5" src={footerIcon} alt="Tikckitz" />
          <p className="text-[#6E7191]">
            Stop waiting in line. Buy tickets <br />
            conveniently, watch movies quietly.
          </p>
        </div>
        <div className="flex flex-col grow">
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
        <div className="flex flex-col grow">
          <p className="mb-5 font-bold">Our Sponsor</p>
          <ul>
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
        <div className="flex flex-col grow">
          <p className="mb-5 font-bold">Follow us</p>
          <div>
            <div className="mb-4">
              <i data-feather="facebook"></i>
              <p>Tickitz Cinema id</p>
            </div>
            <div className="mb-4">
              <i data-feather="instagram"></i>
              <p>tickitz.id</p>
            </div>
            <div className="mb-4">
              <i data-feather="twitter"></i>
              <p>tickitz.id</p>
            </div>
            <div className="mb-4">
              <i data-feather="youtube"></i>
              <p>Tickitz Cinema id</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">© 2020 Tickitz. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer