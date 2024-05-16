
import React from "react";

interface InputWrapperProps {
  children: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-opacityRed01 p-2 duration-300 focus-within:border-red">
      {children}
    </div>
  );
};
