import React from "react";

import { cn } from "utils/cn";

export const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={cn(
        "relative -z-10 flex w-fit items-center gap-2 overflow-hidden bg-black p-2 before:absolute before:left-0 before:top-0 before:h-1/2 before:w-full before:bg-slate-700 before:content-['']",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
