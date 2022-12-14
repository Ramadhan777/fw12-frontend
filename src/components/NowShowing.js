import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardFilm from "./card/CardFilm";

const NowShowing = (props) => {
  const {desc} = props
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://fw12-backend-eta.vercel.app/movies/now")
      .then((res) => res.data)
      .then((res) => res.results)
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="bg-[#F5F6F8] h-[550px] px-10 md:px-14 lg:px-28 py-12">
      <div className="flex">
        <div className="flex grow text-[#1b30cf] font-bold text-xl underline underline-offset-8">Now Showing</div>
        <Link className="text-[#1b30cf] font-bold tex-sm" to="/list-movie">
          view all
        </Link>
      </div>

      <div className="flex flex-nowrap overflow-x-scroll my-10">
        {movies.map((movie, i) => (
          <CardFilm id={movie.id} key={i} desc={desc} movie={movie.picture} title={movie.title} genre={movie.genre} alt={movie.title}/>
        ))}
      </div>
    </div>
  );
};

export default NowShowing;
