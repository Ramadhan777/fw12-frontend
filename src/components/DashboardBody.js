import React from 'react'
import grafik from "../assets/images/grafik.svg";

const DashboardBody = () => {
  return (
    <div className="flex bg-[#E5E5E5] py-10 px-28">
        <div className="basis-9/12 mr-10">
          <div className="text-2xl font-bold mb-5">Dashboard</div>
          <div>
            <img src={grafik} alt="grafik" />
          </div>
        </div>

        <div className="basis-3/12">
            <div className="text-2xl font-bold mb-5">Fitered</div>
            <div className="bg-white py-5 px-5 ">
                <div className="mb-5">
                    <select className="w-full bg-[#FCFDFE] border-2 py-3 px-2 border-[#DEDEDE] rounded">
                        <option>Select Movie</option>
                    </select>
                </div>
                <div className="mb-5">
                    <select className="w-full bg-[#FCFDFE] border-2 py-3 px-2 border-[#DEDEDE] rounded">
                        <option>Select Movie</option>
                    </select>
                </div>
                <div className="mb-5">
                    <select className="w-full bg-[#FCFDFE] border-2 py-3 px-2 border-[#DEDEDE] rounded">
                        <option>Select Movie</option>
                    </select>
                </div>
                <div className="mb-5">
                    <button className="w-full py-3 bg-[#1b30cf] text-white border-2 border-[#1b30cf]">Filter</button>
                </div>
                <div>
                    <button className="w-full py-3 bg-white text-[#1b30cf] border-2 border-[#1b30cf]">Reset</button>
                </div>
            </div>
        </div>
      </div>
  )
}

export default DashboardBody