import React, {useEffect, useState} from "react";
import axios from "axios";
import http from '../helpers/http'
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import MovieDetailDesc from "../components/MovieDetailDesc";
import NavbarProfile from "../components/navbar/NavbarProfile";
import ShowtimeAndTicket from "../components/ShowtimeAndTicket";

const MovieDetail = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  useEffect(() => {
    http().get(`/movies/${id}`)
    .then(res => res.data)
    .then(res => setMovie(res.results))
  }, [id])

  return (
    <>
      <NavbarProfile />
      <MovieDetailDesc movie={movie}/>
      <ShowtimeAndTicket movieName={movie.title}/>
      <Footer />
    </>
  );
};

export default MovieDetail;
