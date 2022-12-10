import React from "react";
import { Link } from "react-router-dom";

const CardFilmUpcoming = (props) => {
  return (
    <div className="flex flex-col items-center p-[30px] my-3 mx-5 justify-center mr-3 border-2 border-[DEDEDE] rounded-lg">
      <img className="w-[150px] h-[200px]" src={props.movie} alt={props.title} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center min-h-[150px] max-w-[150px]">
          <div className="text-md text-center font-bold mb-2">
            <div>{props.title}</div>
          </div>
          <div className="text-xs text-center text-slate-400">
            <div>{props.genre}</div>
          </div>
        </div>
        <div className="w-[150px]">
          <button className="w-full text-[#1b30cf] py-2 border-2 border-[#1b30cf] rounded ">
            <Link to={"/movie-detail/"+props.id}>Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFilmUpcoming;
