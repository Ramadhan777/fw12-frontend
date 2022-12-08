import React from 'react';
import movie1 from "../assets/images/movie-1.svg";

const MovieDetailDesc = () => {
    return (
        <div className="flex px-28 pt-7 pb-20">
        <div class="left basis-4/12">
          <img className="w-10/12 p-10 border-2 border-[#DEDEDE] rounded-2xl" src={movie1} alt="" />
        </div>

        <div class="right basis-8/12">
          <div>
            <h1 className="text-3xl font-bold">Spider-Man: Homecoming</h1>
            <p className="text-base text-slate-500 mt-2">Adventure, Action, Sci-Fi</p>
          </div>
          <div className="flex my-7">
            <div className="flex flex-col mr-10">
              <div className="flex flex-col mb-5">
                <span className="text-sm text-[#8692A6] mb-1">Release date</span>
                <span>June 28, 2017</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#8692A6] mb-1">Duration</span>
                <span>2 hours 13 minutes</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col mb-5">
                <span className="text-sm text-[#8692A6] mb-1">Directed by</span>
                <span>Jon Watss</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#8692A6] mb-1">Casts</span>
                <span>Tom Holland, Michael Keaton, Robert Downey Jr.., ...</span>
              </div>
            </div>
          </div>

          <hr />

          <div class="synopsis mt-5 leading-loose">
            <h4 className="text-xl font-bold mb-2">Synopsis</h4>
            <p className="text-[#4E4B66] ">
              Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by
              thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.
            </p>
          </div>
        </div>
      </div>
    )
}
export default MovieDetailDesc