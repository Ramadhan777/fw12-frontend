import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import FormHeader from "./FormHeader";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../../assets/images/Tiku.svg";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/actions/auth";
import { ImSpinner2 } from "react-icons/im";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
YupPassword(Yup);

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number").required("Required"),
});

const FormSignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordStatus, setPasswordStatus] = useState(true);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const register = (value) => {
    const cb = () => {
      navigate("/");
    };

    dispatch(
      registerAction({
        ...value,
        cb,
      })
    );
  };

  return (
    <div className="basis-12/12 md:basis-5/12 grow pt-7 md:pt-20 px-8 lg:px-16  md:overflow-y-scroll">
      <div>
        <img className="block md:hidden mb-5 w-[200px]" src={logo} alt="logo tickitz" />
      </div>
      <FormHeader title="Sign Up" desc="Fill your additional details" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        }}
        validationSchema={registerSchema}
        onSubmit={register}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="flex flex-col pt-8 pb-5">
              <label for="firstName">First Name</label>
              <Field type="firstName" name="firstName" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" placeholder="Write your first name" />
              {errors.firstName && touched.firstName ? <div className="text-red-500 text-sm">{errors?.firstName}</div> : null}
            </div>
            <div className="flex flex-col pb-5">
              <label for="lastName">Last Name</label>
              <Field type="lastName" name="lastName" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" placeholder="Write your first name" />
            </div>
            <div className="flex flex-col pb-5">
              <label for="phoneNumber">Phone Number</label>
              <Field name="phoneNumber" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" placeholder="Write your phone number" />
              {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-sm">{errors?.phoneNumber}</div> : null}
            </div>
            <div className="flex flex-col pb-5">
              <label for="email">Email</label>
              <Field type="email" name="email" className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" placeholder="Write your email" />
              {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors?.email}</div> : null}{" "}
            </div>
            <div className="flex flex-col mb-8">
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

            <div className="flex flex-col items-center">
              {isLoading && (
                <div className="flex items-center mb-3">
                  <ImSpinner2 className="animate-spin mr-3" />
                  <p className="font-bold">Loading...</p>
                </div>
              )}
              <FormButton buttonName="Sign Up" />
              <div>
                <p className="pt-5 pb-7">
                  <span className="text-slate-400">Already have account </span>{" "}
                  <Link className="text-[#1b30cf] font-medium underline underline-offset-4" to="/sign-in">
                    Sign in
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

export default FormSignUp;
