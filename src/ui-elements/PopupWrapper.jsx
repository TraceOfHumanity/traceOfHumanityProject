import React from "react";

import { cn } from "utils/cn";

export const PopupWrapper = ({ children, className }) => {
  return (
    <div
      className={cn(
        "shadow-popupShadow fixed left-0 top-0 flex w-full max-w-2xl flex-col gap-2 rounded-xl p-2 backdrop-blur-md md:p-4 [&_header]:relative [&_header]:px-6 [&_header]:text-center [&_header_button]:absolute [&_header_button]:right-0 [&_header_button]:top-0 [&_header_button]:text-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
};
