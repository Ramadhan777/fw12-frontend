import React from "react";
import brand2 from "../assets/images/brand-2.svg";
import { Link } from "react-router-dom";

const MovieOrderBody = () => {
  return (
    <div className="flex bg-[#F5F6F8] px-28 py-10">
      <div className="flex flex-col basis-8/12">
        <div className="flex flex-col grow mb-10">
          <div className="text-xl font-bold mb-5">Movie Selected</div>
          <div className="flex items-center bg-white p-8 rounded-md">
            <div className="flex grow text-xl font-bold rounded-md">Spider-Man: Homecoming</div>
            <div>
              <button className="text-sm py-3 px-6 rounded-md font-bold text-[#1b30cf] bg-[#EFF0F7]">Change Movie</button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xl font-bold mb-5">Choose your Seat</div>
          <div className="flex flex-col bg-white rounded-md">
            <div className="flex flex-col w-full items-center mb-5 pt-24 px-24">
              <div className="text-[#4E4B66] mb-3">screen</div>
              <div className="w-full border-b-8 border-[#D6D8E7] "></div>
            </div>
            <div className="flex pl-16 pr-24">
              <div className="basis-6/12 grid grid-cols-8 gap-2 mr-14">
                <div className="w-[30px] h-[30px] rounded">A</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">B</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">C</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#1b30cf] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#1b30cf] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#1b30cf] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">D</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">E</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">F</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">G</div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">1</div>
                <div className="w-[30px] h-[30px] rounded">2</div>
                <div className="w-[30px] h-[30px] rounded">3</div>
                <div className="w-[30px] h-[30px] rounded">4</div>
                <div className="w-[30px] h-[30px] rounded">5</div>
                <div className="w-[30px] h-[30px] rounded">6</div>
                <div className="w-[30px] h-[30px] rounded">7</div>
              </div>
              <div className="basis-5/12 grid grid-cols-7 gap-2">
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                <div className="w-[30px] h-[30px] rounded">8</div>
                <div className="w-[30px] h-[30px] rounded">9</div>
                <div className="w-[30px] h-[30px] rounded">10</div>
                <div className="w-[30px] h-[30px] rounded">11</div>
                <div className="w-[30px] h-[30px] rounded">12</div>
                <div className="w-[30px] h-[30px] rounded">13</div>
                <div className="w-[30px] h-[30px] rounded">14</div>
              </div>
            </div>

            <div className="flex flex-col pl-16 py-12 pb-16 pr-24">
              <div className="text-lg text-[#000000] font-bold mb-5">Seating Key</div>
              <div className="flex">
                <div className="flex">
                  <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                  <div className="ml-3 mr-6">Available</div>
                </div>
                <div className="flex">
                  <div className="bg-[#1b30cf] w-[30px] h-[30px] rounded"></div>
                  <div className="ml-3 mr-6">Selected</div>
                </div>
                <div className="flex">
                  <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                  <div className="ml-3 mr-6">Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex pt-10">
          <div className="flex grow">
            <button className="bg-[#F5F6F8] px-10 py-3 text-base text-[#1b30cf] border-2 border-[#1b30cf] rounded">Change your movie</button>
          </div>
          <div>
            <button className="bg-[#1b30cf] px-12 py-3 text-base text-white border-2 border-[#1b30cf] rounded">
              <Link to="/movie-payment">Checkout Now</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex basis-3/12 justify-end grow">
        <div className="flex flex-col w-11/12">
          <div className="text-xl font-bold mb-5">Order Info</div>
          <div className="flex flex-col bg-white rounded-md">
            <div className="flex flex-col items-center p-5  w-full">
              <div>
                <img className="w-28 h-5 mb-2" src={brand2} alt="CineOne21" />
              </div>
              <div>
                <div className="text-xl">CineOne21 Cinema</div>
              </div>
            </div>

            <div className="flex flex-col px-5 w-full mb-5">
              <div className="flex mb-4">
                <div className="flex grow text-sm text-[#6B6B6B] ">Movie selected</div>
                <div className="text-sm text-[#14142B]">Spider-Man: Homecoming</div>
              </div>
              <div className="flex mb-4">
                <div className="flex grow text-sm text-[#6B6B6B] ">Tuesday, 07 July 2020</div>
                <div className="text-sm text-[#14142B]">02:00</div>
              </div>
              <div className="flex mb-4">
                <div className="flex grow text-sm text-[#6B6B6B] ">One ticket price</div>
                <div className="text-sm text-[#14142B]">$10</div>
              </div>
              <div className="flex mb-4">
                <div className="flex grow text-sm text-[#6B6B6B] ">Seat choosed</div>
                <div className="text-sm text-[#14142B]">C4, C5, C6</div>
              </div>
            </div>

            <hr />

            <div className="px-5 py-8 flex">
              <div className="text-lg flex grow font-bold">Total Payment</div>
              <div className="text-2xl text-[#1b30cf] font-bold">$30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOrderBody;
