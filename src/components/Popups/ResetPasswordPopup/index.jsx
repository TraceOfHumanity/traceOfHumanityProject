import React from "react";

import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
  setIsShowResetPasswordPopup,
} from "src/redux/features/popupsSlice";

export const ResetPasswordPopup = () => {
  const dispatch = useDispatch();
  return (
    <div className="popupWrapper">
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button
          className="closePopup"
          onClick={() => dispatch(setIsShowResetPasswordPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Reset password</h2>
        <form>
          <input
            type="text"
            placeholder="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Reset password <TbPasswordFingerprint />
          </button>
        </form>

        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <button
            onClick={() => {
              dispatch(setIsShowResetPasswordPopup(false));
              dispatch(setIsShowLoginPopup(true));
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              dispatch(setIsShowResetPasswordPopup(false));
              dispatch(setIsShowRegistrationPopup(true));
            }}
          >
            Registration
          </button>
        </p>
      </div>
    </div>
  );
};
