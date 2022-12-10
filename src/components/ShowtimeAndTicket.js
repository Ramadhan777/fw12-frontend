import React from "react";
import { Link } from "react-router-dom";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import CardTicket from "../components/card/CardTicket";

const ShowtimeAndTicket = () => {
  return (
    <div className="bg-[#F5F6F8] py-12 px-28 text-center ">
      <div className="mb-12">
        <div className="text-2xl font-bold">Showtime and Tickets</div>
        <div className="flex justify-center mt-10">
          <div className="mr-3">
            <input className="py-2 px-14 bg-white rounded-lg" type="date" name="date" id="date" />
          </div>
          <div>
            <select className="py-3 pl-4 pr-14  bg-white rounded-lg">
              <option>Purwokerto</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <CardTicket image={brand1} />
        <CardTicket image={brand2} />
        <CardTicket image={brand3} />
        <CardTicket image={brand1} />
        <CardTicket image={brand2} />
        <CardTicket image={brand3} />
      </div>

      <div className="p-5">
        <hr />
        <div>
            <Link className="text-[#1b30cf] bg-[#F5F6F8] py-2 px-4 relative bottom-3">view more</Link>
        </div>
      </div>
    </div>
  );
};

export default ShowtimeAndTicket