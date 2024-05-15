import { useAnimation } from "hooks/useAnimation";
import { useAppSelector } from "hooks/useReduxToolkit";
import React, { useEffect, useRef } from "react";

interface MenuItemWrapperProps {
  children: React.ReactNode;
  buttonId: string;
}

export const MenuItemWrapper: React.FC<MenuItemWrapperProps> = ({ children, buttonId }) => {
  const itemRef = useRef(null);
  const { hintAnimation } = useAnimation();
  const {flashingOfTheLoginButton} = useAppSelector((state) => state.animations);

  useEffect(() => {
    const childrenArray = Array.from(itemRef.current.children);

    childrenArray.forEach((child) => {
      if (child.tagName === "A") {
        while (child.offsetWidth > itemRef.current.offsetWidth - 55) {
          child.style.fontSize = `${
            parseInt(window.getComputedStyle(child).fontSize) - 1
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
      className="odd:bg absolute flex w-fit min-w-44 max-w-44 transform items-center gap-2 border-b border-t border-b-opacityBlue border-t-opacityRed bg-gradient-to-l from-opacityBlue01 to-opacityRed01 px-2 py-1 text-xs font-semibold uppercase drop-shadow-xl backdrop-blur-sm md:text-sm lg:py-2 2xl:text-base"
      ref={itemRef}
    >
      {children}
    </div>
  );
};