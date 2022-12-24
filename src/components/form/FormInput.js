import React from "react";

const FormInput = (props) => {
  const { name, type, placeholder, inputName } = props;
  return (
    <>
      <label for={type}>
        {name}
      </label>
      <input className="w-full border-2 border-gray-200 bg-[#FCFDFE] py-4 pl-4 rounded-2xl mt-3" type={type} name={inputName} id={inputName} placeholder={placeholder} />
    </>
  );
};

export default FormInput;
