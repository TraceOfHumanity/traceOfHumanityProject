import React from "react";

import {cn} from "utils/cn";

export const SimpleLoader = ({className}: {className?: string}) => {
  return (
    <div className={cn("relative size-8", className)}>
      <div className="h-full w-full animate-spin rounded-full border-t border-red"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto size-10/12 animate-spinReverse rounded-full border-b border-red"></div>
    </div>
  );
};
