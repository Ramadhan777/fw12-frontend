import React, {useState} from "react";
import { useDispatch } from "react-redux";
import brand2 from "../assets/images/brand-2.svg";
import { chooseSeat as chooseSeatAction } from "../redux/reducers/transaction";
import { useNavigate } from "react-router-dom";

const MovieOrderBody = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [selectedSeat, setSelectedSeat] = useState([])

  const selectSeat = (seat) => {
    if(selectedSeat.includes(seat)){
      return setSelectedSeat([...selectedSeat.filter((existingSeat) => existingSeat !== seat)])
    }

    setSelectedSeat([
      ...selectedSeat,
      seat
    ])
  }

  const checkoutMovie = () => {
    dispatch(chooseSeatAction({
      seatNum: selectedSeat.join(', ')
    }))
    navigate('/movie-payment')
  }

  return (
    <div className="flex flex-col xl:flex-row bg-[#F5F6F8] px-10 md:px-14 lg:px-28 py-10 ">
      <div className="flex flex-col xl:basis-8/12 mb-7">
        <div className="flex flex-col grow mb-10">
          <div className="text-xl font-bold mb-5">Movie Selected</div>
          <div className="flex flex-col min-[400px]:flex-row items-center bg-white p-8 rounded-md gap-3">
            <div className="flex grow text-xl font-bold rounded-md max-[400px]:text-center">Spider-Man: Homecoming</div>
            <div>
              <button className="text-sm py-3 px-6 rounded-md font-bold text-[#1b30cf] bg-[#EFF0F7]">Change Movie</button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xl font-bold mb-5">Choose your Seat</div>
          <div className="flex flex-col bg-white rounded-md px-10 sm:px-20 pt-20 pb-16">
            <div className="flex flex-col w-full items-center mb-5">
              <div className="text-[#4E4B66] mb-3">screen</div>
              <div className="w-full border-b-8 border-[#D6D8E7] "></div>
            </div>

            <div className="flex overflow-x-auto overflow-y-hidden  mb-7 gap-10">
              <div className="min-w-[300px] grid grid-rows-8 gap-3">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((rows, i) => {
                  return (
                    <div className="grid grid-cols-8 gap-3">
                      {[0,1,2,3,4,5,6,7].map((num, i) => {
                        const seatNum = rows + String(num)
                        if(num > 0){
                          if(rows !== " "){
                            return (
                              <button onClick={() => selectSeat(seatNum)} className={`w-7 h-7 rounded-md hover:bg-[#1b30cf] 
                              ${selectedSeat.includes(seatNum) ? 'bg-[#1b30cf]' : 'bg-[#D6D8E7]'}`}></button>
                            )
                          } else{
                            return (
                              <button className="w-7 h-7">{num}</button>
                            )
                          }
                          
                        } else {
                          return (
                            <button className="w-7 h-7">{rows}</button>
                          )
                        }
                      })}
                    </div>
                  )
                })}
              </div>
              
              <div className="min-w-[300px] grid grid-rows-8 gap-3">
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((rows, i) => {
                  return (
                    <div className="grid grid-cols-8 gap-3">
                      {[8,9,10,11,12,13,14].map((num, i) => {
                        const seatNum = rows + String(num)
                        if(num > 0){
                          if(rows !== " "){
                            return (
                              <button onClick={() => selectSeat(seatNum)} className={`w-7 h-7 rounded-md hover:bg-[#1b30cf] 
                              ${selectedSeat.includes(seatNum) ? 'bg-[#1b30cf]' : 'bg-[#D6D8E7]'}`}></button>
                            )
                          } else{
                            return (
                              <button className="w-7 h-7">{num}</button>
                            )
                          }
                          
                        } else {
                          return (
                            <button className="w-7 h-7">{rows}</button>
                          )
                        }
                      })}
                    </div>
                  )
                })}
              </div>
              
            </div>

            <div className="flex flex-col">
              <div className="text-lg text-[#000000] font-bold mb-5">Seating Key</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex gap-3">
                  <div className="bg-[#d6d8e7] w-[30px] h-[30px] rounded"></div>
                  <div>Available</div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#1b30cf] w-[30px] h-[30px] rounded"></div>
                  <div>Selected</div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-[#6E7191] w-[30px] h-[30px] rounded"></div>
                  <div>Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-[530px]:flex-row pt-10 gap-3">
          <div className="flex grow">
            <button className="max-[530px]:grow bg-[#F5F6F8 px-10 py-3 text-base text-[#1b30cf] border-2 border-[#1b30cf] rounded">Change your movie</button>
          </div>
          <div className="flex">
            <button onClick={() => checkoutMovie()} className="max-[530px]:grow bg-[#1b30cf] px-12 py-3 text-base text-white border-2 border-[#1b30cf] rounded">
              Checkout Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex xl:basis-3/12 justify-end grow">
        <div className="flex flex-col w-full xl:w-11/12">
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
