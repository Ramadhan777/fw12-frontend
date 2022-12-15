import React from "react"
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import logo from "../../assets/images/Tiku.svg";

const FormSignIn = (props) => {
  const {state} = useLocation()

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cb = () => {
      navigate("/");
    }
    dispatch(loginAction({ email, password, cb }));
  };

  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16 overflow-y-auto">
      <div>
        <img className="block md:hidden mb-5 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <FormHeader title="Sign In" desc="Sign in with your data that you entered during your registration" />
      <form onSubmit={login}>
        {!state ? null : <div className="mt-3 bg-[#B3FFAE] py-3 pl-3 rounded-md font-bold tracking-wider">{state}</div> }
        <div className="flex flex-col mt-3 mb-5">
          <FormInput name="Email" type="email" placeholder="Write your email" />
        </div>
        <div className="flex flex-col mb-8">
          <FormInput name="Password" type="password" placeholder="Write your password" />
        </div>
        <div className="flex flex-col items-center">
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
