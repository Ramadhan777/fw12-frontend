import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { chooseMovie as chooseMovieAction } from "../../redux/reducers/transaction";
import { format } from "fecha";

const CardTicket = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCinema, setSelectedCinema] = useState(null);
  const { id } = useParams();

  const selectTime = (time, cinemaId) => {
    if (selectedTime === time && selectedCinema === cinemaId) {
      setSelectedTime("");
      setSelectedCinema(null);
      return;
    }
    setSelectedTime(time);
    setSelectedCinema(cinemaId);
  };

  const book = () => {
    if(!selectedTime){
      return props.alertError('Please choose a schedule first')
   }
    dispatch(
      chooseMovieAction({
        movieId: id,
        cinemaId: selectedCinema,
        bookingDate: props.date,
        bookingTime: selectedTime,
        price: props.price,
        movieName: props.movieName,
      })
    );
    navigate("/movie-order");
  };


  useEffect(() => {
    setSelectedTime("");
    setSelectedCinema(null);
  }, [props.date])

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
          <button
            key={i}
            onClick={(e) => {
              // eslint-disable-next-line no-unused-expressions
              `${new Date().getHours().toString().length === 1 ? "0" + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes()}:00` >= schedule && format(new Date(), "isoDate") >= props.date
                ? null
                : selectTime(schedule, props.cinemaId, props.price);
            }}
            className={`text-xs mb-3 ${
              selectedTime === schedule
                ? "text-[#1b30cf] font-bold"
                : `${new Date().getHours().toString().length === 1 ? "0" + new Date().getHours() : new Date().getHours()}:${new Date().getMinutes()}:00` >= schedule && format(new Date(), "isoDate") >= props.date
                ? 'text-[#8692A6]'
                : null
            }`}
          >
            {schedule}
          </button>
        ))}
      </div>

      <div className="flex px-5">
        <div className="flex grow text-[#6B6B6B] text-base">Price</div>
        <div className="font-bold">Rp{Number(props.price).toLocaleString("id-ID")}/seat</div>
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
