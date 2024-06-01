import React from "react";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useNavigate} from "react-router-dom";

export const Navigation = () => {
  const navigation = useNavigate();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => navigation("/")}
        className="flex items-center gap-2 text-xs md:text-sm lg:text-base"
      >
        <IoIosArrowRoundBack />
        Go Back
      </button>
    </div>
  );
};
