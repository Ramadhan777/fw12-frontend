import React, { useState } from "react";
import http from "../helpers/http";
import defaultUser from "../assets/images/defaultUser.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { ImSpinner2 } from "react-icons/im";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";
import { Formik, Form, Field } from "formik";
import YupPassword from "yup-password";
import * as Yup from "yup";
import { uploadProfilePicture } from "../redux/actions/profile";
YupPassword(Yup);

const phoneRegExpID = /^(^08)(\d{8,10})$/;

const updateProfileSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExpID, "Invalid phone number").required("Required"),
});

const updatePasswordSchema = Yup.object().shape({
  password: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
  confirmPassword: Yup.string().password().min(8, "Min lenght 8").minLowercase(1, "Min lowercase 1").minUppercase(1, "Min uppercase 1").minSymbols(1, "Min symbol 1").minNumbers(1, "Min number 1").required("Required"),
});

const ProfileBody = ({ profile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [alertSuccessUpload, setAlertSuccessUpload] = useState("");
  const [alertErrorUpload, setAlertErrorUpload] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");
  const [alertSuccessPassword, setAlertSuccessPassword] = useState("");
  const [alertErrorPassword, setAlertErrorPassword] = useState("");
  const [passwordStatus, setPasswordStatus] = useState(true);
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState(true);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const profilePicture = useSelector((state) => state.profile.picture);

  const updateProfile = async (value) => {
    setLoadingProfile(true);
    try {
      const { data } = await http(token).patch("/profile", value);

      setAlertSuccess(data.message);
      setLoadingProfile(false);
      setTimeout(() => {
        setAlertSuccess("");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  const updatePassword = async (value) => {
    setLoadingPassword(true);
    const password = value.password;
    const confirmPassword = value.confirmPassword;

    if (password === confirmPassword) {
      try {
        await http(token).patch("/profile", value);

        setAlertSuccessPassword("Password updated");
        setAlertErrorPassword("");
        setLoadingPassword(false);
        setTimeout(() => {
          setAlertSuccessPassword("");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    } else {
      setAlertErrorPassword("Password and confirm password not match");
      setLoadingPassword(false);
      setTimeout(() => {
        setAlertErrorPassword("");
      }, 5000);
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    navigate("/sign-in");
  };

  const uploadPhoto = async (e) => {
    try {
      setLoadingPhoto(true);
      const file = e.target.files[0];
      if (file.size > 3000000) {
        setAlertSuccessUpload("");
        return setAlertErrorUpload("Maximum size 3MB");
      }
      const form = new FormData();
      form.append("picture", file);
      await dispatch(uploadProfilePicture({token, form}))
      setLoadingPhoto(false);
      setAlertSuccessUpload("Photo profile updated");
      setAlertErrorUpload("");
      setTimeout(() => {
        setAlertSuccessUpload("");
      }, 5000);
    } catch (error) {
      setLoadingPhoto(false);
      setAlertErrorUpload(error);
      setTimeout(() => {
        setAlertErrorUpload("");
      }, 5000);
      setAlertSuccessUpload("");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#E5E5E5] px-7 md:px-14 lg:px-28 py-10 gap-10 items-center lg:items-start">
      <div className="basis-12/12 lg:basis-3/12 w-6/12 max-[500px]:w-full">
        <div className="bg-white rounded-2xl mb-3">
          <div className="p-7 text-base text-[#4E4B66]">INFO</div>
          <div className="flex flex-col gap-3 items-center">
            <img className="w-28 h-28 rounded-full border-2 border-slate-400 bg-cover" src={profilePicture || defaultUser} alt="profileImage" />
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="picture" className="hover:cursor-pointer flex items-center">
                <HiOutlinePencil className="text-sm" />
                Edit
              </label>
              <input className="hidden" type="file" onChange={uploadPhoto} name="picture" id="picture" />
            </div>
          </div>
          <div className="flex flex-col items-center m-3">
            <div className="text-xl text-[#14142B] font-bold">
              {profile.firstName} {profile.lastName}
            </div>
            <div className="text-sm text-[#4E4B66]">Movigoers</div>
          </div>
          <hr />
          <div className="p-7 text-center">
            <button onClick={() => logout()} className="bg-[#1b30cf] text-white rounded-2xl p-3 w-[70%]">
              Logout
            </button>
          </div>
        </div>

        {loadingPhoto && (
          <div className="flex justify-center items-center my-3">
            <ImSpinner2 className="animate-spin mr-3" />
            <p className="font-bold">Loading...</p>
          </div>
        )}
        {alertSuccessUpload && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{alertSuccessUpload}</span>
            </div>
          </div>
        )}
        {alertErrorUpload && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{alertErrorUpload}</span>
            </div>
          </div>
        )}
      </div>

      <div className="grow basis-9/12 w-full">
        <div className="flex bg-white rounded-2xl w-full mb-10">
          <div className="py-6 max-[500px]:ml-5 ml-10 mr-5 border-b-2 border-[#1b30cf]">
            <Link to="">Account Setting</Link>
          </div>
          <div className="py-6 mx-5 text-[#AAAAAA]">
            <Link to="/history">Order History</Link>
          </div>
        </div>
        <Formik
          initialValues={{
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            phoneNumber: profile.phoneNumber,
          }}
          validationSchema={updateProfileSchema}
          onSubmit={updateProfile}
        >
          {({ errors, touched }) => (
            <Form>
              {alertSuccess ? <div className="mb-5 bg-[#B3FFAE] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{alertSuccess} </div> : null}
              <div className="flex flex-col bg-white rounded-3xl pt-10 px-7">
                <div>Details Information</div>
                <hr />

                <div className="flex flex-col py-8">
                  <div className="flex flex-col sm:flex-row mb-5 gap-3">
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="firstName">
                        First Name
                      </label>
                      <Field
                        className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                        name="firstName"
                        id="firstName"
                        type="text"
                        placeholder={profile.firstName}
                      />
                    </div>
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="lastName">
                        Last Name
                      </label>
                      <Field
                        className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                        name="lastName"
                        id="laststName"
                        type="text"
                        placeholder={profile.lastName}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="email">
                        Email
                      </label>
                      <Field
                        className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                        name="email"
                        id="email"
                        type="email"
                        placeholder={profile.email}
                      />
                      {errors.email && touched.email ? <div className="text-red-500 text-sm">{errors?.email}</div> : null}{" "}
                    </div>
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="phoneNumber">
                        Phone Number
                      </label>
                      <Field
                        className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                        name="phoneNumber"
                        id="phoneNumber"
                        type="text"
                        placeholder={profile.phoneNumber}
                      />
                      {errors.phoneNumber && touched.phoneNumber ? <div className="text-red-500 text-sm">{errors?.phoneNumber}</div> : null}
                    </div>
                  </div>
                </div>
              </div>

              {loadingProfile && (
                <div className="flex justify-center items-center my-3">
                  <ImSpinner2 className="animate-spin mr-3" />
                  <p className="font-bold">Loading...</p>
                </div>
              )}

              <div>
                <button type="submit" className="max-[500px]:w-full bg-[#1b30cf] text-white w-[40%] my-5 py-4 rounded-2xl">
                  Update Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={updatePasswordSchema}
          onSubmit={updatePassword}
        >
          {({ errors, touched }) => (
            <Form>
              {alertSuccessPassword ? <div className="mb-5 bg-[#B3FFAE] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{alertSuccessPassword}</div> : null}
              {alertErrorPassword ? <div className="mb-5 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{alertErrorPassword}</div> : null}
              <div className="flex flex-col bg-white rounded-3xl pt-10 px-7">
                <div>Account and Privacy</div>
                <hr />
                <div className="flex flex-col py-8">
                  <div className="flex flex-col sm:flex-row mb-5 gap-3">
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="newPasword">
                        New Password
                      </label>
                      <div className="relative">
                        <Field
                          className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                    rounded-2xl"
                          name="password"
                          id="password"
                          type={passwordStatus ? "password" : "text"}
                          placeholder="Write your password"
                        />
                        {passwordStatus ? (
                          <FaEyeSlash onClick={() => setPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                        ) : (
                          <FaEye onClick={() => setPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                        )}
                      </div>
                      {errors.password && touched.password ? <div className="text-red-500 text-sm">{errors.password}</div> : null}
                    </div>
                    <div className="flex grow flex-col">
                      <label className="text-[#4E4B66] mb-2" for="confirmPasword">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Field
                          className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                    rounded-2xl"
                          name="confirmPassword"
                          id="confirmPassword"
                          type={confirmPasswordStatus ? "password" : "text"}
                          placeholder="Confirm your password"
                        />
                        {confirmPasswordStatus ? (
                          <FaEyeSlash onClick={() => setConfirmPasswordStatus(false)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                        ) : (
                          <FaEye onClick={() => setConfirmPasswordStatus(true)} className="absolute right-3 bottom-5 w-10 hover:cursor-pointer" />
                        )}
                      </div>
                      {errors.confirmPassword && touched.confirmPassword ? <div className="text-red-500 text-sm">{errors.confirmPassword}</div> : null}
                    </div>
                  </div>
                </div>
              </div>

              {loadingPassword && (
                <div className="flex justify-center items-center my-3">
                  <ImSpinner2 className="animate-spin mr-3" />
                  <p className="font-bold">Loading...</p>
                </div>
              )}

              <div>
                <button type="submit" className="max-[500px]:w-full bg-[#1b30cf] text-white w-[40%] my-5 py-4 rounded-2xl">
                  Update Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ProfileBody;
