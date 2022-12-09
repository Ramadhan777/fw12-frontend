import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CardFilm from "./card/CardFilm";

const NowShowing = (props) => {
  const {desc} = props
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/movies/now")
      .then((res) => res.data)
      .then((res) => res.results)
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="bg-[#F5F6F8] px-10 md:px-14 lg:px-28 py-12">
      <div className="flex">
        <div className="flex grow text-[#5f2eea] font-bold text-xl underline underline-offset-8">Now Showing</div>
        <Link className="text-[#5f2eea] font-bold tex-sm" to="/list-movie">
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
