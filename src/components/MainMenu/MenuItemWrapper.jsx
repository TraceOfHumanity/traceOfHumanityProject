import React from "react";

export const MenuItemWrapper = ({ children }) => {
  return (
    <div className="border-t-opacityBlue border-b-opacityRed odd:bg from-opacityBlue01 to-opacityRed01 absolute flex w-fit min-w-44 transform items-center gap-2 border-b border-t bg-gradient-to-l p-2 uppercase">
      {children}
    </div>
  );
};
