import React from "react";

import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setFlashingOfTheLoginButton } from "src/redux/features/animationsSlice";
import { setIsOpenPleaseRegisterPopup } from "src/redux/features/popupsSlice";

export const PleaseRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(useLocation());

  return (
    <div className="popupWrapper">
      <div className="popup">
        <button
          className="closePopup"
          onClick={() => {
            dispatch(setIsOpenPleaseRegisterPopup(false));
            dispatch(setFlashingOfTheLoginButton(true));
            navigate("/");
          }}
        >
          <IoMdClose />
        </button>
        <h2>important info!</h2>
        <p>Only authorized users can request the creation of a new article!</p>
      </div>
    </div>
  );
};
