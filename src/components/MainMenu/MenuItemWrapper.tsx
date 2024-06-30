import React, {useEffect, useRef} from "react";

import {useAnimation} from "hooks/useAnimation";
import {useAppSelector} from "hooks/useReduxToolkit";

interface MenuItemWrapperProps {
  children: React.ReactNode | any;
  buttonId?: string;
}

export const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({
  children,
  buttonId,
}) => {
  const itemRef = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement>;
  const {hintAnimation} = useAnimation();
  const {flashingOfTheLoginButton} = useAppSelector(
    (state) => state.animations,
  );

  useEffect(() => {
    const childrenArray = Array.from(itemRef.current?.children || []);

    childrenArray.forEach((child: any) => {
      if (child.tagName === "A") {
        const htmlChild = child as HTMLElement;
        while (htmlChild.offsetWidth > itemRef.current?.offsetWidth - 50) {
          htmlChild.style.fontSize = `${
            parseInt(window.getComputedStyle(htmlChild).fontSize) - 1
          }px`;
        }
      }
    });
  }, []);

  useEffect(() => {
    if (buttonId === "loginButton" && flashingOfTheLoginButton) {
      hintAnimation(itemRef);
    }
  }, []);

  return (
    <div
      className="odd:bg absolute flex w-fit md:min-w-44 2xl:min-w-48 min-w-32 md:max-w-44 max-w-min-w-32 transform items-center gap-2 bg-gradient-to-l from-opacityBlue01 to-opacityRed01 px-2 py-1 text-xs font-semibold uppercase drop-shadow-xl backdrop-blur-sm md:text-sm lg:py-2 2xl:text-lg [&_*]:uppercase 3xl:text-xl 4xl:text-2xl 5xl:text-3xl"
      ref={itemRef}
    >
      {children}
    </div>
  );
};
