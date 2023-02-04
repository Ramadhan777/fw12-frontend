import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetEmailAndCode } from "../../redux/reducers/resetPassword";
import FormButton from "./FormButton";
import logo from "../../assets/images/Tiku.svg";
import { ImSpinner2 } from "react-icons/im";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Formik, Form, Field } from "formik";
import http from "../../helpers/http";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const FormUpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.resetPassword.email);
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(true);
  const [loadingResetPassword, setLoadingResetPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const updatePassword = (value) => {
    setLoadingResetPassword(true);
    const password = value.password;
    const confirmPassword = value.confirmPassword;
    const code = value.code;

    if (password === confirmPassword) {
      http()
        .post("/auth/resetPassword", {
          email,
          password,
          confirmPassword,
          code,
        })
        .then((res) => {
          dispatch(resetEmailAndCode());
          navigate("/sign-in", { state: "Update password berhasil, silahkan login kembali" });
          setLoadingResetPassword(false);
        })
        .catch((err) => {
          setLoadingResetPassword(false);
          setErrMessage("Code Invalid");
          setTimeout(() => {
            setErrMessage('')
          }, 5000)
        });
      } else {
        setErrMessage("Password and confirm password not match");
        setLoadingResetPassword(false);
        setTimeout(() => {
          setErrMessage('')
        }, 5000)
    }
  };

  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-16 lg:pt-20 px-16 overflow-y-auto">
      <div>
        <img className="block lg:hidden mb-3 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">set your new password</p>

      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
          code: null,
        }}
        validationSchema={resetPasswordSchema}
        onSubmit={updatePassword}
      >
        {({ errors, touched }) => (
          <Form>
            {errMessage ? <div className="mt-3 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{errMessage}</div> : null}
            <div className="flx flex-col my-5">
              <label for="password">Code</label>
              <Field name="code" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" type="text" placeholder="Write your code" />
            </div>
            <div className="flx flex-col my-5">
              <label for="password">Password</label>
              <div className="relative">
                <Field name="password" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" type={passwordStatus === true ? "password" : "text"} placeholder="Write your password" />
                {passwordStatus ? (
                  <FaEyeSlash onClick={() => setPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                ) : (
                  <FaEye onClick={() => setPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                )}
              </div>
              {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
            </div>
            <div className="flx flex-col my-5">
              <label for="confirmPassword">Confirm Password</label>
              <div className="relative">
                <Field name="confirmPassword" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" type={confirmPasswordStatus === true ? "password" : "text"} placeholder="Write your confirm password" />
                {confirmPasswordStatus ? (
                  <FaEyeSlash onClick={() => setConfirmPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                ) : (
                  <FaEye onClick={() => setConfirmPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                )}
              </div>
              {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm">{errors.confirmPassword}</div> : null}
            </div>

            <div className="flex flex-col items-center mt-3 pb-8">
              {loadingResetPassword && (
                <div className="flex justify-center items-center my-3">
                  <ImSpinner2 className="animate-spin mr-3" />
                  <p className="font-bold">Loading...</p>
                </div>
              )}

              <FormButton buttonName="Submit" path="/sign-in" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormUpdatePassword;
