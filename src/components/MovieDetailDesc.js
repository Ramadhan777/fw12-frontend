import React from 'react';

const MovieDetailDesc = (props) => {
    const {movie} = props
    
    const showFormattedDate = (date) => {
      const options = {
        year: "numeric",
        day: "numeric",
        month: "long"
      }
      return new Date(date).toLocaleString("en-US", options)
    }

    return (
        <div className="flex px-28 pt-7 pb-20">
        <div class="left basis-4/12">
          <img className="w-10/12 p-10 border-2 border-[#DEDEDE] rounded-2xl" src={movie.picture} alt="" />
        </div>

        <div class="right basis-8/12">
          <div>
            <h1 className="text-3xl font-bold">{movie.title}</h1>
            <p className="text-base text-slate-500 mt-2">{movie.genre}</p>
          </div>
          <div className="flex my-7">
            <div className="flex flex-col mr-10">
              <div className="flex flex-col mb-5">
                <span className="text-sm text-[#8692A6] mb-1">Release date</span>
                <span>{showFormattedDate(movie.releaseDate)}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#8692A6] mb-1">Duration</span>
                <span>{movie.duration}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-5">
                <span className="text-sm text-[#8692A6] mb-1">Directed by</span>
                <span>{movie.director}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#8692A6] mb-1">Casts</span>
                <span>{movie.casts}</span>
              </div>
            </div>
          </div>

          <hr />

          <div class="synopsis mt-5 leading-loose">
            <h4 className="text-xl font-bold mb-2">Synopsis</h4>
            <p className="text-[#4E4B66] ">
              {movie.synopsis}
            </p>
          </div>
        </div>
      </div>
    )
}
export default MovieDetailDesc