import { auth } from "firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { GiArchiveRegister } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Loader } from "components/Loader";

import {
  setIsLoginPopup,
  setIsRegistrationPopup,
} from "../../../redux/features/popupsSlice";

export const RegistrationPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration success");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        dispatch(setIsRegistrationPopup(false));
        dispatch(setIsLoginPopup(true));
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  return (
    <div className="popupWrapper">
      {isLoading && <Loader />}
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />
        <button
          className="closePopup"
          onClick={() => dispatch(setIsRegistrationPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Registration</h2>
        <form className="flex flex-col" onSubmit={registerUser}>
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
          <button type="submit">
            Registration <GiArchiveRegister />
          </button>
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
      </div>
    </div>
  );
};
