import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

import { PopupWrapper } from "ui-elements/PopupWrapper";

import { setIsPlaying } from "../../../redux/features/audioPlayerSlice";
import { setIsOpenGreetingPopup } from "../../../redux/features/popupsSlice";
import { greetingPopupText } from "./data";

export const GreetingPopup = () => {
  const dispatch = useDispatch();

  return (
    <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <div className="popup">
        <header>
          <h2>{greetingPopupText.title}</h2>
          <button
            // className="closePopup"
            className=""
            onClick={() => {
              dispatch(setIsOpenGreetingPopup(false));
              dispatch(setIsPlaying(true));
            }}
          >
            <IoMdClose />
          </button>
        </header>
        {greetingPopupText.text.map((item, index) => (
          <p key={index} className="text-center">
            {item}
          </p>
        ))}
      </div>
    </PopupWrapper>
  );
};
