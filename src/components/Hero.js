import React from "react";
import heroImg from "../assets/images/Group 14.svg";

const Hero = () => {
  return (
    <div className="flex px-28 h-full py-10">
      <div className="flex basis-6/12 items-center justify-center">
        <div className="flex flex-col">
          <div className="text-slate-400 text-xl pb-5">Nearest Cinema, Newest Movie,</div>
          <div className="text-[#5f2eea] text-5xl font-bold">Find out now!</div>
        </div>
      </div>
      <div className="flex basis-6/12 items-center justify-center">
        <img src={heroImg} alt="HeroImage" />
      </div>
    </div>
  );
};


export default Hero