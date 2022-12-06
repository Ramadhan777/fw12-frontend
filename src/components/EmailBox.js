import React from "react";

const EmailBox = () => {
  return (
    <div className="flex flex-col px-28 my-20">
      <div className="text-center shadow-lg shadow-[rgba(186, 186, 186, 0.3)] w-full rounded-lg">
        <div className="py-5">
          <p className="text-[#4E4B66] text-2xl">Be the vanguard of the</p>
          <h1 className="text-[#5F2EEA] text-5xl font-bold">Moviegoers</h1>
        </div>
        <form className="pt-10">
          <input className="py-4 px-5 mr-3 rounded border-2 border-[#DEDEDE]" placeholder="Type your email" />
          <button className="py-4 px-7 bg-[#5F2EEA] text-white rounded" type="submit">
            join now
          </button>
        </form>
        <div className="py-10 text-sm text-slate-400">
          <p className="pb-3">By joining you as a Tickitz member,</p>
          <p>we will always send you the latest updates via email .</p>
        </div>
      </div>
    </div>
  );
};

export default EmailBox
