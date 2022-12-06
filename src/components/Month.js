import React from "react";
import { Link } from "react-router-dom";

const Month = (props) => {
  return (
    <div>
      <Link className="text-[#5f2eea] py-2 px-6 mr-3 border-2 border-[#5f2eea] rounded hover:bg-[#5f2eea] hover:text-white focus:bg-[#5f2eea] focus:text-white" to="">{props.month}</Link>
    </div>
  );
};

export default Month
