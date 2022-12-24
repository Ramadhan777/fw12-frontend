import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import {FaEyeSlash, FaEye} from "react-icons/fa"
import logo from "../../assets/images/Tiku.svg";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/actions/auth";

const FormSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordStatus, setPasswordStatus] = useState(true)

  const register = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const password = event.target.password.value;

    const cb = () => {
      navigate('/')
    }

    dispatch(registerUserAction({
      firstName, lastName, phoneNumber, email, password, cb
    }))
  };

  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16  md:overflow-y-scroll">
      <div>
        <img className="block md:hidden mb-5 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <FormHeader title="Sign Up" desc="Fill your additional details" />
      <form onSubmit={register}>
        <div className="flex flex-col pt-8 pb-5">
          <FormInput name="First Name" inputName="firstName" type="text" placeholder="Write your first name" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Last Name" inputName="lastName" type="text" placeholder="Write your last name" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Phone Number" inputName="phoneNumber" type="text" placeholder="Write your phone number" />
        </div>
        <div className="flex flex-col pb-5">
          <FormInput name="Email" inputName="email" type="email" placeholder="Write your email" />
        </div>
        <div className="flex flex-col pb-5">
        <div className="relative">
            <FormInput name="password" inputName="password" type={passwordStatus === true ? "password" : "text"} placeholder="Write your password" />
            {passwordStatus ? <FaEyeSlash onClick={() => setPasswordStatus(false)}  className="absolute right-3 bottom-5 w-10 hover:cursor-pointer"/> : <FaEye onClick={() => setPasswordStatus(true)}  className="absolute right-3 bottom-5 w-10 hover:cursor-pointer"/>}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <FormButton buttonName="Sign Up"/>
          <div>
            <p className="pt-5 pb-7">
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
