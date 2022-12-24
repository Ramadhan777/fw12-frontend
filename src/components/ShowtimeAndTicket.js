import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from 'moment'
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import CardTicket from "../components/card/CardTicket";
import http from "../helpers/http";

const ShowtimeAndTicket = () => {
  const [city, setCity] = useState('Purwokerto')
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"))
  const [cinema, setCinema] = useState([])
  const { id } = useParams();

  useEffect(() => {
    http().get(`/movies/schedules?movieId=${id}&date=${date}&city=${city}`)
    .then((data) => data.data)
    .then(res => res.results)
    .then(result => setCinema(result))
  }, [city, date])

  return (
    <div className="bg-[#F5F6F8] py-12 px-5 md:px-14 lg:px-28 text-center ">
      <div className="mb-12">
        <div className="text-2xl font-bold">Showtime and Tickets</div>
        <div className="flex flex-col min-[500px]:flex-row justify-center mt-10">
          <div className="min-[500px]:mr-3 mb-5">
            <input onClick={(e) => setDate(e.target.value)} className="py-2 px-10 max-[500px]:w-9/12 bg-white rounded-lg" type="date" name="date" id="date" defaultValue={date} />
          </div>
          <div>
            <select onClick={(e) => setCity(e.target.value)} className="py-2 px-10 max-[500px]:w-9/12 bg-white rounded-lg">
              <option value='Purwokerto'>Purwokerto</option>  
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {cinema.map((cinema, i) => (
          <CardTicket key={i} image={brand1} name={cinema.name} address={cinema.address} cinemaId={cinema.id} schedules={cinema.schedules} date={date}/>

))}
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