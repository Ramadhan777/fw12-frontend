import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseMovie as chooseMovieAction } from "../../redux/reducers/transaction";

const CardTicket = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState(null);
  const { id } = useParams();

  const selectTime = (time, cinemaId) => {
    setSelectedTime(time);
    setSelectedCinema(cinemaId);
  };

  const book = () => {
    dispatch(
      chooseMovieAction({
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: props.date,
        bookingTime: selectedTime,
      })
    );
    navigate("/movie-order");
  };

  return (
    <div className="bg-white flex flex-col rounded-md mx-4 mb-8">
      <div className="flex items-center p-7">
        <div className="mr-8">
          <img className="w-[100px] h-[40px]" src={props.image} alt="ebv.id" />
        </div>
        <div className="text-start">
          <div className="text-2xl font-bold">{props.name}</div>
          <div className="text-xs text-[#6E7191] max-w-[140px]">{props.address}</div>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-4 p-5">
        {props.schedules.map((schedule, i) => (
          <button onClick={(e) => selectTime(e.target.innerText, props.cinemaId)} className={`text-xs text-[#6E7191] mb-3 hover:text-[#1b30cf] focus:text-[#1b30cf] focus:font-bold`}>
            {schedule}
          </button>
        ))}
      </div>

      <div className="flex px-5">
        <div className="flex grow text-[#6B6B6B] text-base">Price</div>
        <div className="font-bold">$10.00/seat</div>
      </div>

      <div className="p-5">
        <button onClick={() => book()} className="w-full py-2 bg-[#1b30cf] text-white rounded">
          Book now
        </button>
      </div>
    </div>
  );
};

export default CardTicket;
