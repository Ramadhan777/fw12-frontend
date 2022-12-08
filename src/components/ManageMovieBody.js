import React from "react";
import movie1 from "../assets/images/movie-1.svg";
import CardFilmAdmin from "../components/card/CardFilmAdmin";
import movie4 from "../assets/images/movie-4.svg";

const ManageMovieBody = () => {
  return (
    <div className="py-10 px-28 bg-[#E5E5E5]">
      <div>
        <div className="text-2xl font-bold mb-5">Form Movie</div>
        <div className="bg-white rounded-lg pt-12 px-10 pb-10">
          <div className="pb-3 grid grid-cols-5">
            <div>
              <img className="p-8 w-[100%] border-[1px] rounded-md border-[#DEDEDE]" src={movie1} alt="Spider-Man" />
            </div>

            <div className="col-span-2 ml-8">
              <div className="mb-3">
                <label className="text-sm pb-2" for="movieName">
                  Movie Name
                </label>
                <input className="text-sm py-4 mt-2 pl-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="movieName" id="movieName" placeholder="Spider-Man: Homecoming" />
              </div>
              <div className="mb-3">
                <label className="text-sm pb-2" for="director">
                  Director
                </label>
                <input className="text-sm py-4 mt-2 pl-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="director" id="director" placeholder="Jon Watts" />
              </div>
              <div className="mb-3">
                <label className="text-sm pb-2" for="releaseDate">
                  Release date
                </label>
                <input className="text-sm py-4 mt-2 px-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="date" name="releaseDate" id="releaseDate" placeholder="Spider-Man: Homecoming" />
              </div>
            </div>

            <div className="col-span-2 ml-10">
              <div className="mb-3">
                <label className="text-sm pb-2" for="category">
                  Category
                </label>
                <input className="text-sm py-4 mt-2 pl-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="category" id="category" placeholder="Action, Adventure, Sci-Fi" />
              </div>
              <div className="mb-3">
                <label className="text-sm pb-2" for="casts">
                  Casts
                </label>
                <input className="text-sm py-4 mt-2 pl-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="casts" id="casts" placeholder="Tom Holland, Michael Keaton, Robert Dow.." />
              </div>
              <div className="mb-3 flex gap-10">
                <div className="flex grow flex-col">
                  <label className="text-sm pb-2" for="durationHour">
                    Duration Hour
                  </label>
                  <input className="text-sm py-4 mt-2 px-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="durationHour" id="durationHour" placeholder="2" />
                </div>
                <div className="flex grow flex-col">
                  <label className="text-sm pb-2" for="durationMinute">
                    Duration Minute
                  </label>
                  <input className="text-sm py-4 mt-2 px-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded" type="text" name="durationMinute" id="durationMinute" placeholder="13" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label for="synopsis">Synopsis</label>
            <input
              className="text-sm py-4 px-5 mt-3 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded"
              type="text"
              name="synopsis"
              id="synopsis"
              placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | "
            />
          </div>

          <div className="flex mt-10 gap-5 justify-end">
            <div>
              <button className="py-2 px-16 text-[#5F2EEA] border-2 border-[#5F2EEA] bg-white rounded">Reset</button>
            </div>
            <div>
              <button className="py-2 px-16 text-white border-2 border-[#5F2EEA] bg-[#5F2EEA] rounded">Submit</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-5">
        <div className="flex mb-5">
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

        <div className="flex flex-wrap bg-white rounded-md justify-center items-center py-10">
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
          <CardFilmAdmin movie={movie4} title="Black Widow" genre="Action, Adventure, Sci-Fi" />
        </div>

        <div className="flex justify-center mt-8">
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white">1</button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white">2</button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white">3</button>
          </div>
          <div>
            <button className="bg-white text-[#4E4B66] py-1 px-3 mr-3 border-2 border-[#DEDEDE] rounded-lg hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white">4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMovieBody;
