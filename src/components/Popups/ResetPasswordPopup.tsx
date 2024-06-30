import React, {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {TbPasswordFingerprint} from "react-icons/tb";

import {useAuth} from "hooks/useAuth";
import {Button} from "ui-elements/Button";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import {TextInput} from "ui-elements/TextInput";

import {
  setIsLoginPopup,
  setIsRegistrationPopup,
  setIsResetPasswordPopup,
} from "../../redux/slices/popups";
import { useAppDispatch } from "hooks/useReduxToolkit";

export const ResetPasswordPopup = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const {resetPassword} = useAuth();

  return (
    <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform fixed">
      <header>
        <button
          className="closePopup"
          onClick={() => dispatch(setIsResetPasswordPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Reset password</h2>
      </header>
      <form onSubmit={(e) => resetPassword(e, email)}>
        <TextInput
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">
          Reset password <TbPasswordFingerprint />
        </Button>
      </form>

      <footer>
        <Button
          onClick={() => {
            dispatch(setIsResetPasswordPopup(false));
            dispatch(setIsLoginPopup(true));
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            dispatch(setIsResetPasswordPopup(false));
            dispatch(setIsRegistrationPopup(true));
          }}
        >
          Registration
        </Button>
      </footer>
    </PopupWrapper>
  );
};
