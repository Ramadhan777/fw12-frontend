import React from "react";

const CardFilm = (props) => {
  return (
    <div className="flex items-center p-8 mr-5 bg-[rgba(255, 255, 255, 0.2)] border-2 border-white rounded-lg">
      <img className="min-w-[150px]" src={props.movie} alt={props.alt} />
    </div>
  );
};

export default CardFilm;
