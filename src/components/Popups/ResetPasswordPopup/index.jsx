import React, { useState } from "react";

import { sendPasswordResetEmail } from "firebase/auth";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Loader } from "src/components/Loader";
import { auth } from "src/firebase.config";
import {
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
  setIsShowResetPasswordPopup,
} from "src/redux/features/popupsSlice";

export const ResetPasswordPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setIsLoading(false);
        toast.success("Check your email for reset password link");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <div className="popupWrapper">
      {isLoading && <Loader />}
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button
          className="closePopup"
          onClick={() => dispatch(setIsShowResetPasswordPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Reset password</h2>
        <form onSubmit={resetPassword}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
