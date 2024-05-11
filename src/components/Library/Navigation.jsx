import React from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigation = useNavigate();

  const goBack = () => navigation(-1);

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => goBack()}
      className="flex items-center gap-2"
      >
        <IoIosArrowRoundBack />
        Go Back
      </button>
    </div>
  );
};
