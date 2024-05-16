import React from "react";

import { cn } from "utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  styleType?: "delete" | "ghost"
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, type }) => {
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
