import React, { useRef } from "react";

import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";

import { setIsPlaying } from "../../../redux/features/audioPlayerSlice";
import { setIsOpenGreetingPopup } from "../../../redux/features/popupsSlice";
import { greetingPopupText } from "./data";

export const GreetingPopup = () => {
  const dispatch = useDispatch();
  const greetingPopupRef = useRef(null);

  return (
    <div className="popupWrapper" ref={greetingPopupRef}>
      <div className="popup">
        <button
          className="closePopup"
          onClick={() => {
            dispatch(setIsOpenGreetingPopup(false));
            dispatch(setIsPlaying(true));
          }}
        >
          <IoMdClose />
        </button>
        <h2>{greetingPopupText.title}</h2>
        {greetingPopupText.text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};
