import React from "react";
import { Link } from "react-router-dom";

const FormSignIn = () => {
  return (
    <div className="basis-5/12 pt-20 px-16">
      <h1 className="text-5xl font-bold pb-3">Sign In</h1>
      <p className="text-lg text-slate-400">Sign in with your data that you entered during your registration</p>
      <form>
        <div className="flex flex-col pt-8 pb-5">
          <label className="pb-3" for="email">
            Email
          </label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl" type="email" name="email" id="email" placeholder="Write your email" />
        </div>
        <div className="flex flex-col pb-8">
          <label className="pb-3" for="password">
            Password
          </label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl" type="password" name="password" id="password" placeholder="Write your password" />
        </div>
        <div className="flex flex-col items-center">
          <Link className="bg-[#5f2eea] w-full py-4 rounded-2xl text-white text-center" to="">
            Sign In
          </Link>
          <div>
            <p className="pt-5 pb-3">
              <span className="text-slate-400">Forgot your password? </span>{" "}
              <Link className="text-[#5f2eea] font-medium underline underline-offset-4" to="">
                Reset now
              </Link>
            </p>
            <p>
              <span className="text-slate-400">Don’t have an account? </span>{" "}
              <Link className="text-[#5f2eea] font-medium underline underline-offset-4" href="sign-up.html">
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
