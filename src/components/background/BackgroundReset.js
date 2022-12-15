import React from "react";
import logo from "../../assets/images/Tiku 2.svg";

const BackgroundReset = () => {
  return (
    <div className="hidden lg:flex w-full h-full basis-7/12 bg-[url('../images/MaskGroup.png')] bg-cover">
      <div className="flex grow flex-col bg-[#3140abcc] pt-10 px-24">
        <div className="logo">
          <img className="w-60" src={logo} alt="Logo Tickitz" />
        </div>
        <div className="mt-5">
          <h1 className="text-5xl font-bold pb-3 text-white">Lets reset your password</h1>
          <p className="text-2xl text-slate-400 min-w-[300px] leading-normal">To be able to use your account again, please complete the following steps.</p>
        </div>
        <div className="text-white">
          <div className="flex items-center text-2xl mt-8 relative">
            <div className="bullet flex items-center justify-center mr-12 border-2 border-white rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-white after:absolute after:bottom-[-33px]">1</div>
            <p>Fill your complete email</p>
          </div>
          <div className="flex items-center text-2xl mt-8 relative">
            <div className="bullet flex items-center justify-center mr-12 border-2 border-white rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-white after:absolute after:bottom-[-33px]">2</div>
            <p>Check your email</p>
          </div>
          <div className="flex items-center text-2xl mt-8 relative">
            <div className="bullet flex items-center justify-center mr-12 border-2 border-white rounded-full w-12 h-12 after:content-[' '] after:h-[35px] after:border-l-2 after:border-white after:absolute after:bottom-[-33px]">3</div>
            <p>Enter your new password</p>
          </div>
          <div className="flex items-center text-2xl mt-8">
            <div className="bullet flex items-center justify-center mr-12 border-2 border-white rounded-full w-12 h-12">4</div>
            <p>Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundReset;
