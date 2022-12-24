import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resetEmailAndCode } from "../../redux/reducers/resetPassword";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import logo from "../../assets/images/Tiku.svg";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const FormUpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetPasswordData = useSelector((state) => state.resetPassword);
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const updatePassword = (event) => {
    event.preventDefault();
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      axios
        .post("https://fw12-backend-eta.vercel.app/auth/resetPassword", {
          ...resetPasswordData,
          password,
          confirmPassword,
        })
        .then((res) => {
          dispatch(resetEmailAndCode());
          navigate("/sign-in", { state: "Update password berhasil, silahkan login kembali" });
        })
        .catch((err) => {
          setErrMessage(err.response.data.message);
        });
    } else {
      setErrMessage("Password and confirm password not match");
    }
  };

  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-16 lg:pt-28 px-16">
      <div>
        <img className="block lg:hidden mb-3 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">set your new password</p>

      <form onSubmit={updatePassword}>
        {errMessage ? <div className="mt-3 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{errMessage}</div> : null}
        <div className="flx flex-col my-8">
          <div className="relative">
            <FormInput name="Password" inputName="password" type={passwordStatus === true ? "password" : "text"} placeholder="Write your password" />
            {passwordStatus ? (
              <FaEyeSlash onClick={() => setPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
            ) : (
              <FaEye onClick={() => setPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
            )}
          </div>
        </div>
        <div className="flx flex-col my-8">
          <label for="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3"
              type={confirmPasswordStatus === true ? "password" : "text"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Write your confirm password"
            />
            {confirmPasswordStatus ? (
              <FaEyeSlash onClick={() => setConfirmPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
            ) : (
              <FaEye onClick={() => setConfirmPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <FormButton buttonName="Submit" path="/sign-in" />
        </div>
      </form>
    </div>
  );
};

export default FormUpdatePassword;
