import React from "react";

export const SimpleLoader = () => {
  return (
    <div className="fixed left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="h-full w-full animate-spin rounded-full border-t border-red"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto size-10/12 animate-spinReverse rounded-full border-b border-red"></div>
    </div>
  );
};
