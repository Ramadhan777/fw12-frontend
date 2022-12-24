import React from "react";

const EmailBox = () => {
  return (
    <div className=" px-10 md:px-14 lg:px-28">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <div className="py-5">
            <p className="text-[#4E4B66] text-xl md:text-2xl">Be the vanguard of the</p>
            <h1 className="text-[#1b30cf] text-3xl sm:text-4xl md:text-5xl font-bold">Moviegoers</h1>
          </div>
          <form className="pt-10">
            <input className="py-4 px-2 md:px-5 mr-3 rounded border-2 border-[#DEDEDE] mb-3" placeholder="Type your email" />
            <button className="py-4 px-7 bg-[#1b30cf] text-white rounded" type="submit">
              join now
            </button>
          </form>
          <div className="py-10 text-sm text-slate-400">
            <p className="pb-3">By joining you as a Tickitz member,</p>
            <p>we will always send you the latest updates via email .</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default EmailBox;
