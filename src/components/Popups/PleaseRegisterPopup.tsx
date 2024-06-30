import React from "react";
import {IoMdClose} from "react-icons/io";
import {useNavigate} from "react-router-dom";

import {PopupWrapper} from "ui-elements/PopupWrapper";

import {setFlashingOfTheLoginButton} from "../../redux/slices/animations";
import {setIsOpenPleaseRegisterPopup} from "../../redux/slices/popups";
import { useAppDispatch } from "hooks/useReduxToolkit";

export const PleaseRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform fixed">
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
      <h2>Important info!</h2>
      <p className="text-center">Only authorized users can request the creation of a new article!</p>
    </PopupWrapper>
  );
};
