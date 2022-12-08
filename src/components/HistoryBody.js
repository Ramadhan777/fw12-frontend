import React from 'react'
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.svg";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";

const HistoryBody = () => {
  return (
    <div className="flex bg-[#E5E5E5] px-28 py-10">
        <div className="basis-3/12 mr-10">
          <div className="bg-white rounded-md">
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
          <div className="flex bg-white rounded-md w-full mb-10">
            <div className="py-6 ml-10 mr-5 border-b-2 text-[#AAAAAA]">
              <Link to="/profile">Account Setting</Link>
            </div>
            <div className="py-6 mx-5 border-b-2 border-[#5F2EEA]">
              <Link to="/">Order History</Link>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex p-8 items-center">
                <div className="flex flex-col grow">
                    <div className="text-sm text-[#AAAAAA]">Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className="text-2xl text-[#000000] font-bold">Spider-Man: Homecoming</div>
                </div>

                <div>
                    <img className="w-28 h-5" src={brand2} alt="CineOne21 Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex p-8 items-center">
                <div className="flex grow">
                    <button className="py-3 w-[30%] bg-[#00BA88] rounded text-white">
                        <Link to="/movie-ticket-active">Ticket in active</Link>
                    </button>
                </div>
                <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
         
          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex p-8 items-center">
                <div className="flex flex-col grow">
                    <div className="text-sm text-[#AAAAAA]">Monday, 14 June 2020 - 02:00pm</div>
                    <div className="text-2xl text-[#000000] font-bold">Avengers: End Game</div>
                </div>

                <div>
                    <img className="w-28 h-10" src={brand1} alt="ebv.id Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex p-8 items-center">
                <div className="flex grow">
                    <button className="py-3 w-[30%] bg-[#6E7191] rounded text-white">
                        <Link to="/movie-ticket-used">Ticket used</Link>
                    </button>
                </div>
                <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex p-8 items-center">
                <div className="flex flex-col grow">
                    <div className="text-sm text-[#AAAAAA]">Monday, 10 March 2020 - 04:00pm</div>
                    <div className="text-2xl text-[#000000] font-bold">Thor: Ragnarok</div>
                </div>

                <div>
                    <img className="w-28 h-10" src={brand1} alt="ebv.id Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex p-8 items-center">
                <div className="flex grow">
                    <button className="py-3 w-[30%] bg-[#6E7191] rounded text-white">
                        <Link to="/movie-ticket-expired">Ticket expired</Link>
                    </button>
                </div>
                <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HistoryBody