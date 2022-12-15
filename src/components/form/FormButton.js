import React from "react";

const FormButton = (props) => {
  const {buttonName} = props  

  return (
    <>
      <button className="bg-[#1b30cf] w-full py-4 rounded-2xl text-white text-center" type="submit">
        {buttonName}
      </button>
    </>
  );
};

export default FormButton;
