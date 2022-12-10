import React from "react";
import { Link } from "react-router-dom";

const Month = (props) => {
  return (
    <div>
      <Link className="text-[#1b30cf] py-2 px-6 mr-3 border-2 border-[#1b30cf] rounded hover:bg-[#1b30cf] hover:text-white focus:bg-[#1b30cf] focus:text-white" to="">{props.month}</Link>
    </div>
  );
};

export default Month
  