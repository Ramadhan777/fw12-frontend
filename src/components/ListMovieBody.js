import React, { useEffect, useState } from "react";
import axios from "axios";
import Month from "./Month";
import CardFilmUpcoming from "./card/CardFilmUpcoming";

const ListMovieBody = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [amountPage, setAmountPage] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/movies?page=" + page)
      .then((res) => res.data)
      .then((res) => {
        pageAmount(res.pageInfo.totalData);
        return res.results})
      .then((data) => setMovies(data));
  }, [page]);

  const pageAmount = (movie) => {
    const pageArr = [];
    const result = parseInt(movie) / 8;
    const pageNum = Math.ceil(result);
   
    for (let i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }
    
    setAmountPage(pageArr);
  };

  return (
    <div className="pt-10 px-28 pb-5 bg-[#F5F6F8]">
      <div>
        <div className="flex">
          <div className="flex grow text-2xl font-bold">List Movie</div>
          <div className="flex">
            <div>
              <select className="rounded-2xl py-3 pl-2 text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                <option className="hidden">Sort</option>
                <option value="Action">Action</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Horror">Horror</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
              </select>
            </div>
            <div>
              <input className="py-3 pl-3 pr-5 text-xs rounded-2xl bg-[#fcfdfe] focus:outline-none border-2 border-[#DEDEDE]" type="search" name="search" id="search" placeholder="Search Movie Name ..." />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap overflow-x-scroll py-5 overflow-y-hidden mt-3">
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

      <div className="flex flex-wrap items-center justify-center bg-white py-10 px-16 mt-5">
        {movies.map((movie, i) => (
          <CardFilmUpcoming id={movie.id} destination="/movie-detail" key={i} movie={movie.picture} title={movie.title} genre={movie.genre} alt={movie.title} />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-3">
        {amountPage.map(page => (
        <div>
          <button onClick={() => setPage(() => page)} className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white">
            {page}
          </button>
        </div>
        ))}
        
      </div>
    </div>
  );
};

export default ListMovieBody;
