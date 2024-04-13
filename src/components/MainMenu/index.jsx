import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setFlashingOfTheLoginButton } from "../../redux/features/animationsSlice";
import { setIsOpenGreetingPopup } from "../../redux/features/popupsSlice";
import { CentralView } from "./CentralView";
import { MenuWrapper } from "./MenuWrapper";
import { Navigation } from "./Navigation";

// const menuItems = [
//   { name: "explore", link: "/library", icon: <FaSpaceShuttle /> },
//   { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   // { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
//   { name: "authorization", icon: <IoLogIn /> },
// ];

export const MainMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userId } = useSelector((state) => state.auth);

  const authButtonRef = useRef();
  const { flashingOfTheLoginButton } = useSelector((state) => state.animations);

  useEffect(() => {
    const notFirstVisit = localStorage.getItem("notFirstVisit");
    if (!notFirstVisit) {
      localStorage.setItem("notFirstVisit", true);
      dispatch(setIsOpenGreetingPopup(true));
    }
  }, []);

  useEffect(() => {
    if (flashingOfTheLoginButton) {
      gsap.fromTo(
        authButtonRef.current,
        { scale: 1 },
        {
          delay: 1.5,
          scale: 1.01,
          duration: 1.5,
          repeat: 4,
          transformOrigin: "center",
          ease: "elastic.out(10, 0.1)",
          onComplete: () => {
            dispatch(setFlashingOfTheLoginButton(false));
          },
        },
      );
    }
  }, []);

  return (
    <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="relative flex aspect-square w-[calc(300px+(950-300)*((100vw-320px)/(2500-320)))] max-w-4xl items-center justify-center overflow-hidden rounded-full [&>*]:aspect-square [&>*]:w-[calc(70px+(530-70)*((100vw-320px)/(2500-320)))]">
        <MenuWrapper>
          <Navigation />
        </MenuWrapper>
        <CentralView />
      </div>
    </div>
  );
};
