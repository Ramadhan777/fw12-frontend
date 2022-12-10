import React from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import logo from "../../assets/images/Tickitz 2.svg"

const FormSignIn = () => {
  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16">
      <div>
        <img className="block md:hidden mb-3" src={logo} alt="logo tickitz"/>
      </div>
      <FormHeader title="Sign In"
        desc="Sign in with your data that you entered during your registration"/>
      <form>
        <div className="flex flex-col pt-8 pb-5">
          <FormInput name="Email" type="email" placeholder="Write your email"/>
        </div>
        <div className="flex flex-col pb-8">
          <FormInput name="Password" type="password" placeholder="Write your password"/>
        </div>
        <div className="flex flex-col items-center">
          <FormButton buttonName="Sign In" path="/homepage"/>
          <div>
            <p className="pt-5 pb-3">
              <span className="text-slate-400">Forgot your password? </span>{" "}
              <Link className="text-[#1b30cf] font-medium underline underline-offset-4" to="/reset-password">
                Reset now
              </Link>
            </p>
            <p>
              <span className="text-slate-400">Don’t have an account? </span>{" "}
              <Link className="text-[#1b30cf] font-medium underline underline-offset-4" to="/sign-up">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
