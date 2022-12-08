import React from "react";
import movie1 from "../assets/images/movie-1.svg";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import CardTicketAdmin from "./card/CardTicketAdmin";

const ManageMovieScheduleBody = () => {
  return (
    <div className="py-10 px-28 bg-[#E5E5E5]">
      <div>
        <div className="text-2xl font-bold mb-5">Form Schedule</div>
        <div className="bg-white rounded-3xl pt-12 px-10 pb-10">
          <div className="pb-3 grid grid-cols-5">
            <div>
              <img className="p-8 w-[100%] border-[1px] rounded-2xl border-[#DEDEDE]" src={movie1} alt="Spider-Man" />
            </div>

            <div className="col-span-2 ml-8">
              <div className="mb-3">
                <label className="text-sm pb-2" for="movieName">
                  Movie
                </label>
                <div className="mt-2">
                  <select className="rounded-2xl py-4 pl-5 w-full text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                    <option className="hidden">Select Movie</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="text-sm pb-2" for="price">
                  Price
                </label>
                <input className="text-sm py-4 mt-2 pl-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded-2xl" type="text" name="price" id="price" placeholder="10" />
              </div>
              <div className="mb-3">
                <div className="text-sm">Premiere</div>
                <div className="grid grid-cols-3 place-items-center">
                  <div className="rounded-2xl hover:bg-[#FCFDFE] py-4 px-3 hover:shadow-lg">
                    <img className="w-24" src={brand1} alt="ebv.id" />
                  </div>
                  <div className="rounded-2xl hover:bg-[#FCFDFE] py-4 px-3 hover:shadow-lg">
                    <img className="w-24" src={brand3} alt="hiflix" />
                  </div>
                  <div className="rounded-2xl hover:bg-[#FCFDFE] py-4 px-3 hover:shadow-lg">
                    <img className="w-24" src={brand2} alt="cineone21" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 ml-10">
              <div className="mb-3">
                <label className="text-sm pb-2" for="location">
                  Location
                </label>
                <div className="mt-2">
                  <select className="rounded-2xl py-4 pl-5 w-full text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                    <option className="hidden">Select Location</option>
                  </select>
                </div>
              </div>

              <div className="mb-3 flex gap-10">
                <div className="flex grow flex-col">
                  <label className="text-sm pb-2" for="dateStart">
                    Date Start
                  </label>
                  <input className="text-sm py-4 mt-2 px-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded-2xl" type="text" name="dateStart" id="dateStart" placeholder="07/05/2020" />
                </div>
                <div className="flex grow flex-col">
                  <label className="text-sm pb-2" for="dateEnd">
                    Date End
                  </label>
                  <input className="text-sm py-4 mt-2 px-5 w-full bg-[#FCFDFE] border-[1px] border-[#DEDEDE] rounded-2xl" type="text" name="dateEnd" id="dateEnd" placeholder="07/07/2020" />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-sm pb-2" for="location">
                  Time
                </label>
                <div className="grid grid-cols-4 text-sm place-content-center items-center">
                  <div className="my-2">
                    <button className="w-8/12 text-[#5F2EEA] border-2 border-[#5F2EEA] rounded-xl text-lg">+</button>
                  </div>
                  <div className="my-2">08:30am</div>
                  <div className="my-2">10:30pm</div>
                  <div className="my-2">12:00pm</div>
                  <div className="my-2">04:30pm</div>
                  <div className="my-2">07:00pm</div>
                  <div className="my-2">08:30pm</div>
                  <div className="my-2">08:30pm</div>
                </div>
              </div>
            </div>
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
          <div className="flex grow text-2xl font-bold">Data Schedule</div>
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
              <select className="rounded-2xl py-3 pl-2 w-[200px] text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                <option className="hidden">Location</option>
              </select>
            </div>

            <div>
              <select className="rounded-2xl py-3 pl-2 w-[150px] text-sm bg-[#fcfdfe] border-2 border-[#DEDEDE]">
                <option className="hidden">Movie</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap bg-white rounded-md items-center py-10">
            <CardTicketAdmin image={brand1}/>
            <CardTicketAdmin image={brand2}/>
            <CardTicketAdmin image={brand3}/>
            <CardTicketAdmin image={brand1}/>
            <CardTicketAdmin image={brand2}/>
            <CardTicketAdmin image={brand3}/>
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

export default ManageMovieScheduleBody;
