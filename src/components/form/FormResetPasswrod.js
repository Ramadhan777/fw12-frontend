import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Tickitz 2.svg"


const FormResetPassword = () => {
  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-20 lg:pt-28 px-16">
      <div>
        <img className="block lg:hidden mb-3" src={logo} alt="logo tickitz"/>
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">we'll send a link to your email shortly</p>
      
      <form>
        <div className="flx flex-col my-8">
          <label for="email">Email</label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded mt-3" type="email" name="email" id="email" placeholder="Write your email" />
        </div>

        <div className="flex flex-col items-center">
          <button className="bg-[#5f2eea] w-full py-4 rounded text-white text-center" type="submit">
            <Link to="/update-password">Send</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormResetPassword;
