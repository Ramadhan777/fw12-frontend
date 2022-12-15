import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resetEmailAndCode } from "../../redux/reducers/resetPassword";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import logo from "../../assets/images/Tiku.svg";

const FormUpdatePassword = () => {
  const dispatch = useDispatch()
  const resetPasswordData = useSelector((state) => state.resetPassword);
  const navigate = useNavigate();

  const updatePassword = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    axios
      .post("https://fw12-backend-eta.vercel.app/auth/resetPassword", {
        ...resetPasswordData,
        password,
        confirmPassword,
      })
      .then((res) => {
        dispatch(resetEmailAndCode())
        navigate("/sign-in", { state: "Update password berhasil, silahkan login kembali" });
      });
  };

  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-16 lg:pt-28 px-16">
      <div>
        <img className="block lg:hidden mb-3 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">set your new password</p>

      <form onSubmit={updatePassword}>
        <div className="flx flex-col my-8">
          <FormInput name="password" type="password" placeholder="Write your password" />
        </div>
        <div className="flx flex-col my-8">
          <label for="confirmPassword">Confirm Password</label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl" type="password" name="confirmPassword" id="confirmPassword" placeholder="Write your confirm password" />
        </div>

        <div className="flex flex-col items-center">
          <FormButton buttonName="Submit" path="/sign-in" />
        </div>
      </form>
    </div>
  );
};

export default FormUpdatePassword;
