import React from "react";
import { cn } from "utils/cn";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => {
  return <div className={cn("p-[1vw]", className)}>{children}</div>;
};
