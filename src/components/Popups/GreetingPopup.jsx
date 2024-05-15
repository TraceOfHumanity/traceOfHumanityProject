import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

import { greetingPopupText } from "utils/textData";

import { PopupWrapper } from "ui-elements/PopupWrapper";

import { setIsPlaying } from "../../redux/slices/audioPlayerSlice";
import { setIsOpenGreetingPopup } from "../../redux/slices/popupsSlice";

export const GreetingPopup = () => {
  const dispatch = useDispatch();

  return (
    <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <header>
        <h2>{greetingPopupText.title}</h2>
        <button
          className=""
          onClick={() => {
            dispatch(setIsOpenGreetingPopup(false));
            dispatch(setIsPlaying(true));
          }}
        >
          <IoMdClose />
        </button>
      </header>
      <main>
        {greetingPopupText.text.map((item, index) => (
          <p key={index} className="text-center">
            {item}
          </p>
        ))}
      </main>
    </PopupWrapper>
  );
};
