import React from "react";

import { GiArchiveRegister } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
} from "src/redux/features/popupsSlice";

export const RegistrationPopup = () => {
  const dispatch = useDispatch();
  return (
    <div className="popupWrapper">
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button
          className="closePopup"
          onClick={() => dispatch(setIsShowRegistrationPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Registration</h2>
        <form>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button type="submit">
            Registration <GiArchiveRegister />
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <button
            onClick={() => {
              dispatch(setIsShowRegistrationPopup(false));
              dispatch(setIsShowLoginPopup(true));
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};
