import React from "react";
import logo from "../../assets/images/tickitz 1.svg";

const Background = () => {
  return (
    <div className="hidden md:flex w-full h-full basis-7/12  bg-[url('../images/MaskGroup.png')] bg-cover">
      <div className="flex grow flex-col justify-center items-center bg-[#2b156bcc]">
        <div className="logo">
          <img src={logo} alt="Logo Tickitz" />
          <p className="text-5xl text-center text-white">wait, watch, wow!</p>
        </div>
      </div>
    </div>
  );
};

export default Background;
