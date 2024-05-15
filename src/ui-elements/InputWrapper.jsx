import React from "react";

export const InputWrapper = ({ children }) => {
  return (
    <div className="rounded-lg border border-opacityRed01 p-2 duration-300 focus-within:border-red">
      {children}
    </div>
  );
};
