import React from "react";
import logoGpay from "../assets/images/logoGpay.svg";
import logoGopay from "../assets/images/logoGopay.svg";
import logoBCA from "../assets/images/logoBCA.svg";
import logoBRI from "../assets/images/logoBRI.svg";
import logoDANA from "../assets/images/logoDANA.svg";
import logoOVO from "../assets/images/logoOVO.svg";
import logoPaypal from "../assets/images/logoPaypal.svg";
import logoVisa from "../assets/images/logoVisa.svg";
import { Link } from "react-router-dom";

const PaymentBody = () => {
  return (
    <div className="flex bg-[#F5F6F8] px-28 py-10">
      <div className="flex flex-col basis-8/12">
        <div className="flex flex-col grow mb-10">
          <div className="text-xl font-bold mb-5">Payment Info</div>
          <div className="flex flex-col bg-white p-8 rounded-md">
            <div className="flex pb-3 border-b-[1px] border-[#E6E6E6]">
              <div className="flex grow text-[#6B6B6B] text-xl">Date & time</div>
              <div className="text-xl text-[#000000]">Tuesday, 07 July 2020 at 02:00 </div>
            </div>
            <div className="flex py-3 border-b-[1px] border-[#E6E6E6]">
              <div className="flex grow text-[#6B6B6B] text-xl">Movie title</div>
              <div className="text-xl text-[#000000]">Spider-Man: Homecoming</div>
            </div>
            <div className="flex py-3 border-b-[1px] border-[#E6E6E6]">
              <div className="flex grow text-[#6B6B6B] text-xl">Cinema name</div>
              <div className="text-xl text-[#000000]">CineOne21 Cinema</div>
            </div>
            <div className="flex py-3 border-b-[1px] border-[#E6E6E6]">
              <div className="flex grow text-[#6B6B6B] text-xl">Number of tickets</div>
              <div className="text-xl text-[#000000]">3 pieces</div>
            </div>
            <div className="flex pt-3 ">
              <div className="flex grow text-[#6B6B6B] text-xl">Total payment</div>
              <div className="text-xl text-[#000000] font-bold">$30,00</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xl font-bold mb-5">Choose a Payment Method</div>
          <div className="flex flex-col bg-white rounded-md p-10">
            <div className="grid grid-cols-4 gap-3 place-content-center place-items-center mb-8">
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoGpay} alt="logoGpay" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoVisa} alt="logoVisa" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoGopay} alt="logoGopay" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoPaypal} alt="logoPaypal" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoDANA} alt="logoDANA" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoBCA} alt="logoBCA" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoBRI} alt="logoBRI" />
              </div>
              <div className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center">
                <img src={logoOVO} alt="logoOVO" />
              </div>
            </div>

            <div className="text-center">
              <hr />
              <div>
                <Link className="relative bottom-3 #A0A3BD py-2 px-8 bg-white">or</Link>
              </div>
            </div>

            <div className="text-center py-3">
              <span className="text-[#6E7191]">Pay via cash.</span>
              <span className="text-[#1b30cf]"> See how it work</span>
            </div>
          </div>

          <div className="flex pt-10">
            <div className="flex grow">
              <button className="bg-[#F5F6F8] px-10 py-3 text-base text-[#1b30cf] border-2 border-[#1b30cf] rounded">
                <Link to="/movie-order">Previous step</Link>
                </button>
            </div>
            <div>
              <button className="bg-[#1b30cf] px-12 py-3 text-base text-white border-2 border-[#1b30cf] rounded">
                <Link to="/movie-payment">Pay your order</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex basis-3/12 justify-end grow">
        <div className="flex flex-col w-11/12">
          <div className="text-xl font-bold mb-5">Personal Info</div>
          <div className="flex flex-col bg-white rounded-md p-8">
            <form>
              <div className="mb-5">
                <label className="mb-3">Full Name</label>
                <input className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full" type="text" name="fullName" id="fullName" placeholder="Jonas El Rodriguez" />
              </div>
              <div className="mb-5">
                <label className="mb-3">Email</label>
                <input className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full" type="email" name="email" id="email" placeholder="jonasrodri123@gmail.com Rodriguez" />
              </div>
              <div className="mb-5">
                <label className="mb-3">Phone Number</label>
                <input className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full" type="text" name="fullName" id="fullName" placeholder="Jonas El Rodriguez" />
              </div>
            </form>
            <div className="w-full py-3 text-base text-[#4E4B66] text-center bg-[#f4b7404d]">
              <div>Fill your data Correctly</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBody;
