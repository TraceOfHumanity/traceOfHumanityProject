import React from "react";
import {IoMdClose} from "react-icons/io";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {PopupWrapper} from "ui-elements/PopupWrapper";

import {setFlashingOfTheLoginButton} from "../../redux/slices/animationsSlice";
import {setIsOpenPleaseRegisterPopup} from "../../redux/slices/popupsSlice";

export const PleaseRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <header>
        <button
          onClick={() => {
            dispatch(setIsOpenPleaseRegisterPopup(false));
            dispatch(setFlashingOfTheLoginButton(true));
            navigate("/");
          }}
        >
          <IoMdClose />
        </button>
      </header>
      <h2>important info!</h2>
      <p>Only authorized users can request the creation of a new article!</p>
    </PopupWrapper>
  );
};
