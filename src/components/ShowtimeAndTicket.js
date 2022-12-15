import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import CardTicket from "../components/card/CardTicket";

const ShowtimeAndTicket = () => {
  const [city, setCity] = useState('Purwokerto')
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"))

  return (
    <div className="bg-[#F5F6F8] py-12 px-28 text-center ">
      <div className="mb-12">
        <div className="text-2xl font-bold">Showtime and Tickets</div>
        <div className="flex justify-center mt-10">
          <div className="mr-3">
            <input className="py-2 px-14 bg-white rounded-lg" type="date" name="date" id="date" defaultValue={date} />
          </div>
          <div>
            <select onClick={(e) => setCity(e.target.value)} className="py-3 pl-4 pr-14  bg-white rounded-lg">
              <option value='Purwokerto'>Purwokerto</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <CardTicket image={brand1} name="ebv.id" cinemaId={1} date={date}/>
        <CardTicket image={brand2} name="cineOne21" cinemaId={2} date={date}/>
        <CardTicket image={brand3} name="hiflix" cinemaId={3} date={date}/>
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