import React, { useEffect, useState } from "react";
import Month from "./Month";
import CardFilmUpcoming from "./card/CardFilmUpcoming";
import http from "../helpers/http";
import { ImSpinner2 } from "react-icons/im";

const ListMovieBody = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [amountPage, setAmountPage] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");
  const [pageGenre, setPageGenre] = useState(null);
  const [loading, setLoading] = useState(false);
  const [amountPageGenre, setAmountPageGenre] = useState([]);

  useEffect(() => {
    http()
      .get(`/movies?page=${page}&search=${search}`)
      .then((res) => {
        setLoading(true);
        return res.data;
      })
      .then((res) => {
        setAmountPageGenre([]);
        pageAmount(res.pageInfo.totalData);
        if (!res.results.length) {
          setLoading(false);
          setError(`${search} not found`);
          return setMovies([]);
        }
        setError(``);
        setLoading(false);
        return setMovies(res.results);
      });
  }, [page, search]);

  const pageAmount = (movie) => {
    const pageArr = [];
    const result = parseInt(movie) / 8;
    const pageNum = Math.ceil(result);

    for (let i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    setAmountPage(pageArr);
  };

  const searchMovie = () => {
    const searchInput = document.querySelector(".search-input");
    setSearch(searchInput.value);
    setPage(1);
  };

  const searchMovieByGenre = (genre, page = 1) => {
    setError('')
    setMovies([]);
    setGenre(genre);
    setPageGenre(page);
    setLoading(true);
    http()
      .get(`/movies/genre?page=${page}&search=${genre}`)
      .then((res) => res.data)
      .then((res) => {
        setAmountPage([]);
        pageAmountGenre(res.pageInfo.totalData);
        setLoading(false);
        return res.results;
      })
      .then((data) => {
        setMovies(data);
      }).catch(err => {
        setLoading(false)
        setError(`movies not found`);
      })
  };

  const pageAmountGenre = (movie) => {
    const pageArr = [];
    const result = parseInt(movie) / 8;
    const pageNum = Math.ceil(result);

    for (let i = 1; i <= pageNum; i++) {
      pageArr.push(i);
    }

    setAmountPageGenre(pageArr);
  };
  return (
    <div className="pt-10 px-10 md:px-14 lg:px-28 pb-5 bg-[#F5F6F8]">
      <div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="flex grow text-2xl font-bold">List Movie</div>
          <div className="flex flex-col items-end gap-3">
            <div>
              <select onChange={(e) => searchMovieByGenre(e.target.value)} className="rounded-2xl py-3 pl-2 text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                <option className="hidden" value="">
                  Sort
                </option>
                <option value="Action">Action</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Family">Family</option>
                <option value="Adventure">Adventure</option>
                <option value="Romance">Romance</option>
                <option value="Comedy">Comedy</option>
              </select>
            </div>
            <div className="flex gap-3">
              <input className="search-input py-3 pl-3 sm:pr-5 text-xs rounded-2xl bg-[#fcfdfe] focus:outline-none border-2 border-[#DEDEDE]" type="search" name="search" id="search" placeholder="Search Movie Name ..." />
              <div className="bg-[#1b30cf] text-white py-3 px-6 flex justify-center items-center rounded-xl">
                <button onClick={searchMovie}>Search</button>
              </div>
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
        {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex items-center">
            <ImSpinner2 className='animate-spin mr-3'/>
            <p className="font-bold">Loading...</p>
          </div>
        )}

        {movies.map((movie, i) => (
          <CardFilmUpcoming id={movie.id} destination="/movie-detail" key={i} movie={movie.picture} title={movie.title} genre={movie.genre} alt={movie.title} />
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-3">
        {amountPage?.map((pageNum, i) => (
          <div key={i}>
            <button onClick={() => setPage(() => pageNum)} className={` py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg ${page === pageNum ? "bg-[#1b30cf] text-white" : "bg-white text-[#4E4B66]"}`}>
              {pageNum}
            </button>
          </div>
        ))}
        {amountPageGenre?.map((pageNumGenre, i) => (
          <div key={i}>
            <button onClick={() => searchMovieByGenre(genre, pageNumGenre)} className={` py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg ${pageGenre === pageNumGenre ? "bg-[#1b30cf] text-white" : "bg-white text-[#4E4B66]"}`}>
              {pageNumGenre}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovieBody;
