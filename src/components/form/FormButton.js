import React from "react";
import { Link } from "react-router-dom";

const FormButton = (props) => {
  const {buttonName, path} = props  

  return (
    <>
      <button className="bg-[#5f2eea] w-full py-4 rounded-2xl text-white text-center" type="submit">
        <Link to={path}>{buttonName}</Link>
      </button>
    </>
  );
};

export default FormButton;
