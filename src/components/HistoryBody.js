import React from 'react'
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profile.svg";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";

const HistoryBody = () => {
  return (
    <div className="flex flex-col min-[1050px]:flex-row bg-[#E5E5E5] px-7 md:px-14 lg:px-28 py-10 gap-10 items-center lg:items-start">
        <div className="basis-3/12 basis-12/12 lg:basis-3/12 w-6/12 max-[500px]:w-full">
          <div className="bg-white rounded-md">
            <div className="p-7 text-base text-[#4E4B66]">INFO</div>
            <div className="flex justify-center">
              <img className="w-28 h-28" src={profileImage} alt="profileImage" />
            </div>
            <div className="flex flex-col items-center m-5">
              <div className="text-xl text-[#14142B] font-bold">Jonas El Rodriduez</div>
              <div className="text-sm text-[#4E4B66]">Movigoers</div>
            </div>
            <hr />
            <div className="p-7 text-center">
              <button className="bg-[#1b30cf] text-white rounded-2xl p-3 w-[70%]">Logout</button>
            </div>
          </div>
        </div>

        <div className="basis-9/12 w-full">   
          <div className="flex bg-white rounded-md w-full mb-10">
            <div className="py-6 ml-10 mr-5 border-b-2 text-[#AAAAAA]">
              <Link to="/profile">Account Setting</Link>
            </div>
            <div className="py-6 mx-5 border-b-2 border-[#1b30cf]">
              <Link to="/">Order History</Link>
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex flex-col min-[450px]:flex-row gap-3 p-8 items-center">
                <div className="flex flex-col grow items-center">
                    <div className="text-sm text-[#AAAAAA] text-center">Tuesday, 07 July 2020 - 04:30pm</div>
                    <div className="text-2xl text-[#000000] font-bold text-center">Spider-Man: Homecoming</div>
                </div>

                <div>
                    <img className="w-28 h-5" src={brand2} alt="CineOne21 Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex gap-3 flex-col min-[450px]:flex-row p-8 min-[450px]:items-center">
                <div className="flex grow">
                    <button className="py-3 w-full min-[450px]:w-[60%] sm:w-[30%] bg-[#00BA88] rounded text-white">
                        <Link to="/movie-ticket-active">Ticket in active</Link>
                    </button>
                </div>
                <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
         
          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex flex-col min-[450px]:flex-row gap-3 p-8 items-center">
                <div className="flex flex-col grow items-center">
                    <div className="text-sm text-[#AAAAAA] text-center">Monday, 14 June 2020 - 02:00pm</div>
                    <div className="text-2xl text-[#000000] font-bold text-center">Avengers: End Game</div>
                </div>

                <div>
                    <img className="w-28 h-10" src={brand1} alt="ebv.id Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex gap-3 p-8 min-[450px]:items-center flex-col min-[450px]:flex-row">
                <div className="flex grow">
                    <button className="py-3 w-full min-[450px]:w-[60%] sm:w-[30%] bg-[#6E7191] rounded text-white">
                        <Link to="/movie-ticket-used">Ticket used</Link>
                    </button>
                </div>
                <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
          
          <div className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex flex-col min-[450px]:flex-row gap-3 p-8 items-center">
                <div className="flex flex-col grow items-center">
                    <div className="text-sm text-[#AAAAAA] text-center">Monday, 10 March 2020 - 04:00pm</div>
                    <div className="text-2xl text-[#000000] font-bold text-center">Thor: Ragnarok</div>
                </div>

                <div>
                    <img className="w-28 h-10" src={brand1} alt="ebv.id Cinema"/>
                </div>
            </div>

            <hr />

            <div className="flex gap-3 p-8 min-[450px]:items-center flex-col min-[450px]:flex-row">
                <div className="flex grow">
                    <button className="py-3 w-full min-[450px]:w-[60%] sm:w-[30%] bg-[#6E7191] rounded text-white">
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