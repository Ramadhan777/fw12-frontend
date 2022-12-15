import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import MovieDetailDesc from "../components/MovieDetailDesc";
import NavbarProfile from "../components/navbar/NavbarProfile";
import ShowtimeAndTicket from "../components/ShowtimeAndTicket";

const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://fw12-backend-eta.vercel.app/movies/${id}`)
    .then(res => res.data)
    .then(res => setMovie(res.results))
  }, [id])

  return (
    <>
      <NavbarProfile />
      <MovieDetailDesc movie={movie}/>
      <ShowtimeAndTicket />
      <Footer />
    </>
  );
};

export default MovieDetail;
