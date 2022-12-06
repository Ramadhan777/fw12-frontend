import React from "react";
import logo from "../assets/images/tickitz 1.svg";

const Background = () => {
  return (
    <div className="flex flex-col w-100 bg-logo justify-center items-center basis-7/12">
      <div className="logo">
        <img src={logo} alt="Logo Tickitz" />
        <p className="text-5xl text-center text-white">wait, watch, wow!</p>
      </div>
    </div>
  );
};

export default Background;
