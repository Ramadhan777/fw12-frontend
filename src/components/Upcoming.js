import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Month from "./Month";
import CardFilmUpcoming from "./card/CardFilmUpcoming";
import http from "../helpers/http";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    http()
      .get("/movies/upcoming")
      .then((res) => res.data)
      .then((res) => res.results)
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="px-10 md:px-14 lg:px-28 py-12">
      <div className="flex mb-8">
        <div className="flex grow font-bold text-xl">Upcoming Movies</div>
        <Link className="text-[#1b30cf] font-bold tex-sm" to="/list-movie">
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
        {movies.map((movie, i) => (
          <CardFilmUpcoming key={i} id={movie.id} movie={movie.picture} alt={movie.title} title={movie.title} genre={movie.genre}/>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
