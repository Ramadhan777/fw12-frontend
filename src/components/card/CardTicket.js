import React from "react";
import { Link } from "react-router-dom";

const CardTicket = (props) => {
  return (
    <div className="bg-white flex flex-col rounded-md mx-4 mb-8">
      <div className="flex items-center p-7">
        <div className="mr-8">
          <img className="w-[100px] h-[40px]" src={props.image} alt="ebv.id" />
        </div>
        <div className="text-start">
          <div className="text-2xl font-bold">ebv.id</div>
          <div className="text-xs text-[#6E7191] max-w-[140px]">Whatever street No.12, South Purwokerto</div>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-4 p-5">
        <div className="text-xs text-[#6E7191] mb-3">08:30am</div>
        <div className="text-xs text-[#6E7191] mb-3">10:30pm</div>
        <div className="text-xs text-[#6E7191] mb-3">12:00pm</div>
        <div className="text-xs text-[#6E7191] mb-3">02:00pm</div>
        <div className="text-xs text-[#6E7191] mb-3">04:30pm</div>
        <div className="text-xs text-[#6E7191] mb-3">07:00pm</div>
        <div className="text-xs text-[#6E7191] mb-3">08:30pm</div>
      </div>

      <div className="flex px-5">
        <div className="flex grow text-[#6B6B6B] text-base">Price</div>
        <div className="font-bold">$10.00/seat</div>
      </div>

      <div className="p-5">
        <button className="w-full py-2 bg-[#5F2EEA] text-white rounded">
            <Link to="/movie-order">Book now</Link>
        </button>
      </div>
    </div>
  );
};

export default CardTicket;
