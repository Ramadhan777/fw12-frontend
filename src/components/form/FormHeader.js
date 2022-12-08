import React from "react";

const FormHeader = (props) => {
    const {title, desc} = props
  return (
    <>
      <h1 className="text-5xl font-bold pb-3">{title}</h1>
      <p className="text-lg text-slate-400">{desc}</p>
    </>
  );
}

export default FormHeader
