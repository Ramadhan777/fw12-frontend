import React from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import logo from "../../assets/images/Tickitz 2.svg"


const FormSignUp = () => {
  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16 pb-10 md:overflow-y-scroll">
      <div>
        <img className="block md:hidden mb-3" src={logo} alt="logo tickitz"/>
      </div>
      <FormHeader title="Sign Up" desc="Fill your additional details" />
      <form>
        <div className="flex flex-col pt-8 pb-5">
          <FormInput name="First Name" type="FirstName" placeholder="Write your first name" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Last Name" type="lastName" placeholder="Write your last name" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Phone Number" type="phoneNumber" placeholder="Write your phone number" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Email" type="email" placeholder="Write your email" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Password" type="password" placeholder="Write your password" />
        </div>

        <div className="btn flex flex-col items-center">
          <FormButton path="/" buttonName="Sign Up"/>
          <div>
            <p className="pt-5 pb-3">
              <span className="text-slate-400">Already have account </span>{" "}
              <Link className="text-[#1b30cf] font-medium underline underline-offset-4" to="/sign-in">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
