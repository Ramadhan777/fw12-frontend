import React, { Profiler } from "react";
import profileImage from "../assets/images/profile.svg";
import { Link } from "react-router-dom";

const ProfileBody = () => {
  return (
    <div className="flex bg-[#E5E5E5] px-28 py-10">
      <div className="basis-3/12 mr-10">
        <div className="bg-white rounded-2xl">
          <div className="p-7 text-base text-[#4E4B66]">INFO</div>
          <div className="flex justify-center">
            <img className="w-28 h-28" src={profileImage} alt="profile-image" />
          </div>
          <div className="flex flex-col items-center m-5">
            <div className="text-xl text-[#14142B] font-bold">Jonas El Rodriduez</div>
            <div className="text-sm text-[#4E4B66]">Movigoers</div>
          </div>
          <hr />
          <div className="p-7 text-center">
            <button className="bg-[#5F2EEA] text-white rounded-2xl p-3 w-[70%]">Logout</button>
          </div>
        </div>
      </div>

      <div className="basis-9/12 ">
        <div className="flex bg-white rounded-2xl w-full mb-10">
          <div className="py-6 ml-10 mr-5 border-b-2 border-[#5F2EEA]">
            <Link to="">Account Setting</Link>
          </div>
          <div className="py-6 mx-5 text-[#AAAAAA]">
            <Link to="/history">Order History</Link>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-3xl pt-10 px-7">
          <div>Details Information</div>
          <hr />
          <div className="flex flex-col py-8">
            <div className="flex mb-5">
              <div className="flex grow flex-col mr-3 ">
                <label className="text-[#4E4B66] mb-2" for="firstName">
                  First Name
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="Jonas"
                />
              </div>
              <div className="flex grow flex-col ml-3 ">
                <label className="text-[#4E4B66] mb-2" for="laststName">
                  Last Name
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="laststName"
                  id="laststName"
                  type="text"
                  placeholder="El Rodriguez"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex grow flex-col mr-3 ">
                <label className="text-[#4E4B66] mb-2" for="email">
                  Email
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="email"
                  id="email"
                  type="email"
                  placeholder="jonasrodrigu123@gmail.com"
                />
              </div>
              <div className="flex grow flex-col ml-3 ">
                <label className="text-[#4E4B66] mb-2" for="phoneNumber">
                  Phone Number
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  placeholder="+62 81443874"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[#5F2EEA] text-white w-[40%] my-5 py-4 rounded-2xl">Update Changes</button>
        </div>

        <div className="flex flex-col bg-white rounded-3xl pt-10 px-7">
          <div>Account and Privacy</div>
          <hr />
          <div className="flex flex-col py-8">
            <div className="flex mb-5">
              <div className="flex grow flex-col mr-3 ">
                <label className="text-[#4E4B66] mb-2" for="newPasword">
                  New Password
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="newPasword"
                  id="newPasword"
                  type="password"
                  placeholder="Write your password"
                />
              </div>
              <div className="flex grow flex-col mr-3 ">
                <label className="text-[#4E4B66] mb-2" for="confirmPasword">
                  Confirm Password
                </label>
                <input
                  className="py-4 pl-5 w-full bg-[#FCFDFE] border-2 border-[#DEDEDE]
                        rounded-2xl"
                  name="confirmPasword"
                  id="confirmPasword"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-[#5F2EEA] text-white w-[40%] my-5 py-4 rounded-2xl">Update Changes</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
