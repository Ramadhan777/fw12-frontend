import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import {FaEyeSlash, FaEye} from "react-icons/fa"
import logo from "../../assets/images/Tiku.svg";

const FormSignIn = (props) => {
  const {state} = useLocation()
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [errMessage, setErrMessage] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cb = () => {
      navigate("/");
    }

    try{
      const result = await dispatch(loginAction({ email, password, cb }));
      
      if(result.payload.startsWith('Wrong')){
        setErrMessage(result.payload)
      }
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16 overflow-y-auto">
      <div>
        <img className="block md:hidden mb-5 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <FormHeader title="Sign In" desc="Sign in with your data that you entered during your registration" />
      <form onSubmit={login}>
        {!state ? null : <div className="mt-3 bg-[#B3FFAE] py-3 pl-3 rounded-md font-bold tracking-wider">{state}</div> }
        {errMessage ? <div className="mt-3 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{errMessage}</div> : null}
        <div className="flex flex-col mt-3 mb-5">
          <FormInput name="Email" inputName="email" type="email" placeholder="Write your email" />
        </div>
        <div className="flex flex-col mb-8">
          <div className="relative">
            <FormInput name="Password" inputName="password" type={passwordStatus === true ? "password" : "text"} placeholder="Write your password" />
            {passwordStatus ? <FaEyeSlash onClick={() => setPasswordStatus(false)}  className="absolute right-3 bottom-5 w-10 hover:cursor-pointer"/> : <FaEye onClick={() => setPasswordStatus(true)}  className="absolute right-3 bottom-5 w-10 hover:cursor-pointer"/>}
          </div>
        </div>
        <div className="flex flex-col items-center pb-8">
          <FormButton buttonName="Sign In" />
          <div>
            <p className="mt-5 mb-3">
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
