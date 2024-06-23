import React from "react";

import {cn} from "utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "delete" | "ghost" | "confirm";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type,
  variant,
}) => {
  return (
    <button
      className={cn(
        "flex min-h-10 w-fit items-center gap-2 overflow-hidden rounded-lg border border-borderColor bg-black bg-opacity-50 px-2 py-1",
        variant === "delete" ? "bg-red" : "",
        variant === "ghost" ? "" : "",
        variant === "confirm" ? "bg-green-500" : "",
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
