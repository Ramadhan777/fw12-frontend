import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import FormHeader from "./FormHeader";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import logo from "../../assets/images/Tiku.svg";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const FormSignIn = (props) => {
  const { state } = useLocation();
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (value) => {
    try {
      const result = await dispatch(loginAction({ ...value, navigate }));

      if (result.payload.startsWith("Wrong")) {
        setErrMessage(result.payload);
      }

      setTimeout(() => {
        setErrMessage('')
      }, 5000)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16 overflow-y-auto">
      <div>
        <img className="block md:hidden mb-5 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <FormHeader title="Sign In" desc="Sign in with your data that you entered during your registration" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={login}
      >
        {({ errors, touched }) => (
          <Form>
            {!state ? null : (
              <div className="alert alert-success shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{state}</span>
                </div>
              </div>
            )}
            {errMessage ? (
              <div className="alert alert-error shadow-lg mt-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{errMessage}</span>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col mt-3 mb-5">
              <label for="email">Email</label>
              <Field type="email" name="email" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" placeholder="Write your email" />
              {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors?.email}</div> : null}
            </div>
            <div className="flex flex-col mb-5">
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

            <div className="flex flex-col items-center pb-8">
              {isLoading && (
                <div className="flex items-center mb-3">
                  <ImSpinner2 className='animate-spin mr-3'/>
                  <p className="font-bold">Loading...</p>
                </div>
              )}
              <button className="bg-[#1b30cf] w-full py-4 rounded-2xl text-white text-center" type="submit">
                Sign In
              </button>{" "}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSignIn;
