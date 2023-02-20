import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import defaultUser from "../assets/images/defaultUser.png";
import http from "../helpers/http";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutAction } from "../redux/reducers/auth";
import { uploadProfilePicture } from "../redux/actions/profile";
import { HiOutlinePencil } from "react-icons/hi";
import { format } from "fecha";

const HistoryBody = ({ profile }) => {
  const token = useSelector((state) => state.auth.token);
  const [alertSuccessUpload, setAlertSuccessUpload] = useState("");
  const [alertErrorUpload, setAlertErrorUpload] = useState("");
  const [transactionHistory, setTransactionHistory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uploadPhoto = async (e) => {
    try {
      const file = e.target.files[0];
      if (file.size > 3000000) {
        setAlertSuccessUpload("");
        return setAlertErrorUpload("Maximum size 3MB");
      }
      const form = new FormData();
      form.append("picture", file);
      await dispatch(uploadProfilePicture({token, form}))
      setAlertSuccessUpload("Photo profile updated");
      setAlertErrorUpload("");
    } catch (error) {
      console.log(error);
      setAlertErrorUpload(error);
      setAlertSuccessUpload("");
    }
  };

  useEffect(() => {
    http(token)
      .get("/transactions/list")
      .then((res) => setTransactionHistory(res.data.results))
      .catch((err) => {
        setTransactionHistory([]);
      });
  }, [token]);

  const logout = () => {
    dispatch(logoutAction());
    navigate("/sign-in");
  };

  return (
    <div className="flex flex-col min-[1050px]:flex-row bg-[#E5E5E5] px-7 md:px-14 lg:px-28 py-10 gap-10 items-center lg:items-start">
      <div className="basis-12/12 lg:basis-3/12 w-6/12 max-[500px]:w-full  min-[1050px]:sticky  min-[1050px]:top-5">
        <div className="bg-white rounded-2xl mb-3">
          <div className="p-7 text-base text-[#4E4B66]">INFO</div>
          <div className="flex flex-col gap-3 items-center">
            <img className="w-28 h-28 rounded-full border-2 border-slate-400 bg-cover" src={profile.picture || defaultUser} alt="profileImage" />
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="picture" className="hover:cursor-pointer flex items-center">
                <HiOutlinePencil className="text-sm" />
                Edit
              </label>
              <input className="hidden" type="file" onChange={uploadPhoto} name="picture" id="picture" />
            </div>
          </div>
          <div className="flex flex-col items-center m-3">
            <div className="text-xl text-[#14142B] font-bold">
              {profile.firstName} {profile.lastName}
            </div>
            <div className="text-sm text-[#4E4B66]">Movigoers</div>
          </div>
          <hr />
          <div className="p-7 text-center">
            <button onClick={() => logout()} className="bg-[#1b30cf] text-white rounded-2xl p-3 w-[70%]">
              Logout
            </button>
          </div>
        </div>

        {alertSuccessUpload && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{alertSuccessUpload}</span>
            </div>
          </div>
        )}
        {alertErrorUpload && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{alertErrorUpload}</span>
            </div>
          </div>
        )}
      </div>

      <div className="basis-9/12 w-full overflow-y-auto">
        <div className="flex bg-white rounded-md w-full mb-10">
          <div className="py-6 ml-10 mr-5 border-b-2 text-[#AAAAAA]">
            <Link to="/profile">Account Setting</Link>
          </div>
          <div className="py-6 mx-5 border-b-2 border-[#1b30cf]">
            <Link to="/">Order History</Link>
          </div>
        </div>

        {transactionHistory.map((transaction, i) => (
          <div key={i} className="flex flex-col bg-white rounded-md mb-5">
            <div className="flex flex-col min-[450px]:flex-row gap-3 p-8 items-center">
              <div className="flex flex-col grow max-[450px]:items-center items-start">
                <div className="text-sm text-[#AAAAAA] text-center">
                  {format(new Date(transaction.bookingDate), "mediumDate") || ""} - {transaction.bookingTime || ""}
                </div>
                <div className="text-2xl text-[#000000] font-bold text-center">{transaction.movieTitle}</div>
              </div>

              <div>
                <div className="text-3xl font-bold">{transaction.cinema}</div>
              </div>
            </div>

            <hr />

            <div className="flex gap-3 flex-col min-[450px]:flex-row p-8 min-[450px]:items-center">
              <div className="flex grow">
                <button className={`py-3 w-full min-[450px]:w-[60%] sm:w-[30%] rounded text-white ${format(new Date(), "isoDate") < transaction.bookingDate ? "bg-[#00BA88]" : "bg-[#6E7191]"}`}>
                  <div onClick={() => navigate('/movie-ticket', {state: transaction.id})} >{format(new Date(), "isoDate") > transaction.bookingDate ? "Ticket used" : "Ticket in active"}</div>
                </button>
              </div>
              <div className="text-lg text-[#AAAAAA]">See Details</div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HistoryBody;
