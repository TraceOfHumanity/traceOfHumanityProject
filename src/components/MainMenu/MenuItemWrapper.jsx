import React from "react";

export const MenuItemWrapper = ({ children }) => {
  return (
    <div className="odd:bg absolute flex w-fit min-w-44 max-w-44 transform items-center gap-2 border-b border-t border-b-opacityBlue border-t-opacityRed bg-gradient-to-l from-opacityBlue01 to-opacityRed01 px-2 py-1 text-xs font-semibold uppercase drop-shadow-xl backdrop-blur-sm md:text-sm lg:py-2 2xl:text-base ">
      {children}
    </div>
  );
};
