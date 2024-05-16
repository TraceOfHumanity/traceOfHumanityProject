import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {setIsOpenGreetingPopup} from "../../redux/slices/popupsSlice";
import {CentralView} from "./CentralView";
import {MenuWrapper} from "./MenuWrapper";
import {Navigation} from "./Navigation";

export const MainMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const notFirstVisit = localStorage.getItem("notFirstVisit");
    if (!notFirstVisit) {
      localStorage.setItem("notFirstVisit", "true");
      dispatch(setIsOpenGreetingPopup(true));
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
