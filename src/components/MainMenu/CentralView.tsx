import React from "react";

import {sideMenuImages} from "utils/imagesHelper";

export const CentralView = () => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 flex max-w-lg -translate-x-1/2 -translate-y-1/2 transform justify-between">
      {sideMenuImages.map((image, index) => (
        <div
          key={index}
          className="aspect-[2/15] h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
    </div>
  );
};
