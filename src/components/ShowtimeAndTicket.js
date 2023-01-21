import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import CardTicket from "../components/card/CardTicket";
import http from "../helpers/http";
import { format } from "fecha";

const ShowtimeAndTicket = (props) => {
  const [city, setCity] = useState("Purwokerto");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [cinema, setCinema] = useState([]);
  const [alertError, setAlertError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    http()
      .get(`/movies/schedules?movieId=${id}&date=${date}&city=${city}`)
      .then((data) => data.data)
      .then((res) => setCinema(res.results))
      .catch((err) => {
        console.log(err);
        setCinema([]);
      });
  }, [city, date]);

  return (
    <div className="bg-[#F5F6F8] py-12 px-5 md:px-14 lg:px-28 text-center ">
      <div className="mb-12">
        <div className="text-2xl font-bold">Showtime and Tickets</div>
        {alertError ? (
          <div className="alert alert-error shadow-lg mt-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{alertError}</span>
            </div>
          </div>
        ) : null}
        <div className="flex flex-col min-[500px]:flex-row justify-center mt-10">
          <div className="min-[500px]:mr-3 mb-5">
            <input
              onChange={(e) => {
                format(new Date(), "isoDate") > format(new Date(e.target.value), "isoDate") ? setDate(format(new Date(), "isoDate")) : setDate(e.target.value);
              }}
              className="py-2 px-10 max-[500px]:w-9/12 bg-white rounded-lg"
              type="date"
              name="date"
              id="date"
              value={date}
            />
          </div>
          <div>
            <select onClick={(e) => setCity(e.target.value)} className="py-2 px-10 max-[500px]:w-9/12 bg-white rounded-lg">
              <option value="Purwokerto">Purwokerto</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {cinema.map((cinema, i) => (
          <CardTicket key={i} image={brand1} movieName={props.movieName} name={cinema.name} address={cinema.address} cinemaId={cinema.id} schedules={cinema.schedules} price={cinema.price} alertError={setAlertError} date={date} />
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

export default ShowtimeAndTicket;
