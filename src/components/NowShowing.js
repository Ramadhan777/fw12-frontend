import React from "react";
import { Link } from "react-router-dom";
import CardFilm from "./CardFilm";
import movie1 from "../assets/images/movie-1.svg";
import movie2 from "../assets/images/movie-2.svg";
import movie3 from "../assets/images/movie-3.svg";

const NowShowing = () => {
  return (
    <div className="bg-[#F5F6F8] px-28 py-12">
      <div className="flex">
        <div className="flex grow text-[#5f2eea] font-bold text-xl underline underline-offset-8">Now Showing</div>
        <Link className="text-[#5f2eea] font-bold tex-sm" to="">
          view all
        </Link>
      </div>

      <div className="flex flex-nowrap overflow-x-scroll my-10">
        <CardFilm movie={movie1} alt="spiderman" />
        <CardFilm movie={movie2} alt="Lion King" />
        <CardFilm movie={movie3} alt="John Wixk" />
        <CardFilm movie={movie1} alt="spiderman" />
        <CardFilm movie={movie2} alt="Lion King" />
        <CardFilm movie={movie3} alt="John Wick" />
      </div>
    </div>
  );
};

export default NowShowing;
