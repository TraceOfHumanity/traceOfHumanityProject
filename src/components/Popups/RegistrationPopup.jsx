import { auth } from "firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/useAuth";
import React, { useState } from "react";
import { GiArchiveRegister } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Loader } from "components/Loader";

import { Button } from "ui-elements/Button";
import { PopupWrapper } from "ui-elements/PopupWrapper";

import {
  setIsLoginPopup,
  setIsRegistrationPopup,
} from "../../redux/slices/popupsSlice";

export const RegistrationPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { registerUser } = useAuth();

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {/* <IoFingerPrintOutline className="popupBg" /> */}
        <header>
          <button
            className="closePopup"
            onClick={() => dispatch(setIsRegistrationPopup(false))}
          >
            <IoMdClose />
          </button>
          <h2>Registration</h2>
        </header>
        <form
          className="flex flex-col"
          onSubmit={(e) => registerUser(e, email, password, confirmPassword)}
        >
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button type="submit">
            Registration <GiArchiveRegister />
          </Button>
        </form>

        <p>
          Already have an account?
          <button
            onClick={() => {
              dispatch(setIsRegistrationPopup(false));
              dispatch(setIsLoginPopup(true));
            }}
          >
            Login
          </button>
        </p>
      </PopupWrapper>
    </div>
  );
};
