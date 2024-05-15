import React from "react";

import { cn } from "utils/cn";

export const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      className={cn(
        "border-borderColor flex min-h-10 w-fit items-center gap-2 overflow-hidden rounded-lg border bg-black bg-opacity-50 px-2 py-1",
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
