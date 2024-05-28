import React from "react";

import {cn} from "utils/cn";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden px-[1vw] py-2 flex-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};
