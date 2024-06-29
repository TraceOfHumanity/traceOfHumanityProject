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
        "relative max-h-[90vh] w-full max-w-2xl rounded-xl bg-opacity-50 bg-[radial-gradient(circle_at_0%_0%,_var(--opacityBlue01),#00000088_50%)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_100%,_var(--opacityRed01),#00000088_50%)] after:absolute after:inset-0.5 after:rounded-xl after:bg-black after:bg-opacity-30 after:backdrop-blur md:p-4 [&>*]:mx-auto [&_button]:mx-auto [&_footer]:flex [&_footer]:w-full [&_footer]:gap-5 [&_footer_button]:w-full [&_footer_button]:justify-center [&_h2]:text-center [&_header]:relative [&_header]:w-full [&_header]:px-6 [&_header]:text-center [&_header_button]:absolute [&_header_button]:right-0 [&_header_button]:top-0 [&_header_button]:text-2xl overflow-hidden",
        className,
      )}
      ref={popupRef}
    >
      <div className="relative z-10 flex flex-col gap-2 overflow-y-auto p-2">
        {children}
      </div>
    </div>
  );
};
