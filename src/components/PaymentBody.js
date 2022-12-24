import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createTransaction as trxAction } from "../redux/actions/transactions";

import { Link } from "react-router-dom";
import { RiAlertFill } from "react-icons/ri";
import http from "../helpers/http";

const PaymentBody = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const transactionData = useSelector((state) => state.transaction);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    paymentMethodId: null,
  });

  const pay = () => {
    dispatch(trxAction({ ...transactionData, ...form, token }));
    setAlertSuccess(true);
  };

  useEffect(() => {
    http()
      .get("/paymentMethod")
      .then((data) => data.data)
      .then((res) => setPaymentMethod(res.results));
  }, []);

  return (
    <div className="bg-[#F5F6F8]">
      {alertSuccess === true ? <div className="mt-5 bg-[#B3FFAE] py-3 pl-3 rounded-md font-bold tracking-wider text-center ">Transaction Success</div> : null}
      <div className="flex flex-col xl:flex-row px-10 md:px-14 lg:px-28 py-10 gap-5">
        <div className="flex flex-col basis-8/12">
          <div className="flex flex-col grow mb-10">
            <div className="text-xl font-bold mb-5">Payment Info</div>
            <div className="flex flex-col bg-white p-8 rounded-md">
              <div className="flex flex-col sm:flex-row pb-3 border-b-[1px] border-[#E6E6E6]">
                <div className="flex grow text-[#6B6B6B] text-xl">Date & time</div>
                <div className="text-xl text-[#000000] font-bold">Tuesday, 07 July 2020 at 02:00 </div>
              </div>
              <div className="flex flex-col sm:flex-row py-3 border-b-[1px] border-[#E6E6E6]">
                <div className="flex grow text-[#6B6B6B] text-xl">Movie title</div>
                <div className="text-xl text-[#000000] font-bold">Spider-Man: Homecoming</div>
              </div>
              <div className="flex flex-col sm:flex-row py-3 border-b-[1px] border-[#E6E6E6]">
                <div className="flex grow text-[#6B6B6B] text-xl">Cinema name</div>
                <div className="text-xl text-[#000000] font-bold">CineOne21 Cinema</div>
              </div>
              <div className="flex flex-col sm:flex-row py-3 border-b-[1px] border-[#E6E6E6]">
                <div className="flex grow text-[#6B6B6B] text-xl">Number of tickets</div>
                <div className="text-xl text-[#000000] font-bold">3 pieces</div>
              </div>
              <div className="flex flex-col sm:flex-row pt-3 ">
                <div className="flex grow text-[#6B6B6B] text-xl">Total payment</div>
                <div className="text-xl text-[#000000] font-bold">$30,00</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xl font-bold mb-5">Choose a Payment Method</div>
            <div className="flex flex-col bg-white rounded-md p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-content-center place-items-center mb-8">
                {paymentMethod.map((payment, i) => (
                  <button onClick={() => setForm({ ...form, paymentMethodId: payment.id })} className="border-2 border-[#DEDEDE] w-full h-[50px] flex justify-center items-center hover:bg-[#1b30cfcc] focus:bg-[#1b30cfcc]">
                    <div className="font-bold">{payment.name}</div>
                </button>
                ))}
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

            <div className="flex flex-col min-[530px]:flex-row pt-10 gap-3">
              <div className="flex grow">
                <button className="max-[530px]:grow bg-[#F5F6F8] px-10 py-3 text-base text-[#1b30cf] border-2 border-[#1b30cf] rounded">
                  <Link to="/movie-order">Previous step</Link>
                </button>
              </div>
              <div className="flex">
                <button onClick={() => pay()} className="max-[530px]:grow bg-[#1b30cf] px-12 py-3 text-base text-white border-2 border-[#1b30cf] rounded">
                  Pay your order
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex grow basis-12/12 xl:basis-3/12 justify-end">
          <div className="flex flex-col w-full">
            <div className="text-xl font-bold mb-5">Personal Info</div>
            <div className="flex flex-col bg-white rounded-md p-8">
              <form>
                <div className="mb-5">
                  <label className="mb-3">Full Name</label>
                  <input
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full mt-3"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Jonas El Rodriguez"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3">Email</label>
                  <input
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full mt-3"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jonasrodri123@gmail.com Rodriguez"
                  />
                </div>
                <div className="mb-5">
                  <label className="mb-3">Phone Number</label>
                  <input
                    onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
                    className="border-2 border-[#DEDEDE] pl-5 py-3 rounded w-full mt-3"
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Jonas El Rodriguez"
                  />
                </div>
              </form>
              <div className="flex items-center w-full py-3 text-base text-[#4E4B66] text-center bg-[#f4b7404d]">
                <RiAlertFill className="w-20" />
                <div className="text-sm">Fill your data Correctly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBody;
