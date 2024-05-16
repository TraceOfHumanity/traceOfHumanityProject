import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div className="p-[1vw]">{children}</div>;
};
