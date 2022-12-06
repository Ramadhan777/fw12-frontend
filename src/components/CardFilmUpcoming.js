import React from "react";
import { Link } from "react-router-dom";

const CardFilmUpcoming = (props) => {
  return (
    <div className="flex flex-col items-center p-8 mr-5 border-2 border-[DEDEDE] rounded-lg">
      <img className="min-w-[150px]" src={props.movie} alt={props.alt} />
      <div className="flex flex-col text-center">
        <div className="pt-6 pb-3 min-h-[100px]">
          <div className="text-lg font-bold mb-2">
            <div>{props.title}</div>
          </div>
          <div className="text-xs text-slate-400">
            <div>{props.genre}</div>
          </div>
        </div>
        <div>
          <button className="text-[#5f2eea] py-2 px-6 mr-3 border-2 border-[#5f2eea] rounded w-full">
            <Link to="">Detail</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFilmUpcoming;
