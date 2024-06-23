import React, {useEffect, useRef} from "react";

import {useAnimation} from "hooks/useAnimation";
import {cn} from "utils/cn";

interface PopupWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PopupWrapper: React.FC<PopupWrapperProps> = ({
  children,
  className,
}) => {
  const popupRef = useRef(null);
  const {popupAnimation} = useAnimation();

  useEffect(() => {
    popupAnimation(popupRef);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 flex max-h-[90vh] w-full max-w-2xl flex-col gap-2 overflow-y-auto rounded-xl bg-black bg-opacity-50 p-2 shadow-popupShadow backdrop-blur-md md:p-4 [&>*]:mx-auto [&_button]:mx-auto [&_footer]:flex [&_footer]:gap-5 [&_header]:relative [&_header]:w-full [&_header]:px-6 [&_header]:text-center  [&_header_button]:absolute [&_header_button]:right-0 [&_header_button]:top-0 [&_header_button]:text-2xl [&_footer]:w-full [&_footer_button]:w-full [&_footer_button]:justify-center",
        className,
      )}
      ref={popupRef}
    >
      {children}
    </div>
  );
};
