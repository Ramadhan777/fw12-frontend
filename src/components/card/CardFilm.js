import React from "react";
import { Link } from "react-router-dom";

const CardFilm = (props) => {
  return (
    <div className="group flex flex-col items-center p-8 mr-5 bg-[rgba(255, 255, 255, 0.2)] hover:bg-white border-2 border-white rounded-lg">
      <img className="min-w-[140px]" src={props.movie} alt={props.title} />
      {props.desc ? (
        <div className="hidden group-hover:flex flex-col text-center w-full">
          <div className="flex flex-col items-center justify-center pt-6 pb-3 min-h-[130px]">
            <div className="text-lg font-bold mb-2">
              <div>{props.title}</div>
            </div>
            <div className="text-xs text-slate-400">
              <div>{props.genre}</div>
            </div>
          </div>
          <div>
            <button className="text-[#1b30cf] py-1 border-2 border-[#1b30cf] rounded w-full">
              <Link to={'/movie-detail/'+props.id}>Detail</Link>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CardFilm;
