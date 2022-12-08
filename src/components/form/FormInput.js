import React from "react";

const FormInput = (props) => {
  const { name, type, placeholder } = props;
  return (
    <>
      <label className="pb-3" for={type}>
        {name}
      </label>
      <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl" type={type} name={type} id={type} placeholder={placeholder} />
    </>
  );
};

export default FormInput;
