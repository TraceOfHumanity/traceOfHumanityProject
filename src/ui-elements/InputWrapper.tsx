import React from "react";

interface InputWrapperProps {
  children: React.ReactNode;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({children}) => {
  return (
    <div className="rounded-lg bg-gradient-to-br from-opacityBlue to-opacityRed p-[1px]">
      <div className="rounded-lg p-2 bg-mainBg">{children}</div>
    </div>
  );
};
