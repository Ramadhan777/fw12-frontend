import React from "react";
import { Link } from "react-router-dom";
import Month from "./Month";
import CardFilmUpcoming from "./CardFilmUpcoming";
import movie4 from "../assets/images/movie-4.svg";
import movie5 from "../assets/images/movie-5.svg";
import movie3 from "../assets/images/movie-3.svg";

const Upcoming = () => {
  return (
    <div className="px-28 py-12">
      <div className="flex mb-8">
        <div className="flex grow font-bold text-xl">Upcoming Movies</div>
        <Link className="text-[#5f2eea] font-bold tex-sm" to="">
          view all
        </Link>
      </div>

      <div className="flex flex-nowrap overflow-x-scroll py-5 overflow-y-hidden">
        <Month month="September" />
        <Month month="October" />
        <Month month="November" />
        <Month month="December" />
        <Month month="January" />
        <Month month="February" />
        <Month month="March" />
        <Month month="April" />
        <Month month="Mei" />
        <Month month="June" />
        <Month month="July" />
        <Month month="August" />
      </div>

      <div className="flex flex-nowrap overflow-x-scroll py-5 overflow-y-hidden">
        <CardFilmUpcoming movie={movie4} alt="Black Widow" title="Black Widow" genre="Action, Adventure, Sci-Fi" />
        <CardFilmUpcoming movie={movie5} alt="The Witches" title="The Witches" genre="Action, Adventure, Sci-Fi" />
        <CardFilmUpcoming movie={movie3} alt="John Wick" title="John Wick" genre="Action, Adventure, Sci-Fi" />
        <CardFilmUpcoming movie={movie4} alt="Black Widow" title="Black Widow" genre="Action, Adventure, Sci-Fi" />
        <CardFilmUpcoming movie={movie5} alt="The Witches" title="The Witches" genre="Action, Adventure, Sci-Fi" />
        <CardFilmUpcoming movie={movie3} alt="John Wick" title="John Wick" genre="Action, Adventure, Sci-Fi" />
      </div>
    </div>
  );
};

export default Upcoming;
