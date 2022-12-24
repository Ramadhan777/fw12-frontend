import React, { useState } from "react";
import { forgotPasswordAction } from "../../redux/actions/resetPassword";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/Tiku.svg"

const FormResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");

  const forgotPassword = async (event) => {
    event.preventDefault()
    
    const email = event.target.email.value
    const cb = () => {
      navigate('/update-password')
    }

    const data = await dispatch(forgotPasswordAction({email, cb}))
    if(data.payload.startsWith('Req')){
      setErrMessage(data.payload)
    }
  }

  return (
    <div className="basis-12/12 lg:basis-5/12 grow pt-16 lg:pt-28 px-16">
      <div>
        <img className="block lg:hidden mb-3 w-[200px]" src={logo} alt="logo tickitz"/>
      </div>
      <p className="text-xl font-bold pb-3">Fill your complete email</p>
      <p className="text-lg text-slate-400">we'll send a link to your email shortly</p>
      
      <form onSubmit={forgotPassword}>
      {errMessage ? <div className="mt-3 bg-[#ED2E7E] py-3 pl-3 font-semibold rounded-md tracking-wider text-center">{errMessage}</div> : null}

        <div className="flx flex-col my-8">
          <label for="email">Email</label>
          <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded mt-3" type="email" name="email" id="email" placeholder="Write your email" />
        </div>

        <div className="flex flex-col items-center">
          <button className="bg-[#1b30cf] w-full py-4 rounded text-white text-center" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormResetPassword;
