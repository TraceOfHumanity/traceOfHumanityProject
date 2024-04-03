import React, { useState } from "react";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline, IoLogIn } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "firebase.config";
import {
  setIsShowLoginPopup,
  setIsShowRegistrationPopup,
  setIsShowResetPasswordPopup,
} from "../../../redux/features/popupsSlice";

export const LoginPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login success");
        setEmail("");
        setPassword("");
        dispatch(setIsShowLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
        dispatch(setIsShowLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="popupWrapper">
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button
          className="closePopup"
          onClick={() => dispatch(setIsShowLoginPopup(false))}
        >
          <IoMdClose />
        </button>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
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
          <button type="submit">
            Login <IoLogIn />
          </button>
          <button
            onClick={() => {
              dispatch(setIsShowResetPasswordPopup(true));
              dispatch(setIsShowLoginPopup(false));
            }}
          >
            Reset password <TbPasswordFingerprint />
          </button>
          <p className="or">-- or --</p>
        </form>
        <button onClick={signInWithGoogle}>
          Login with Google <FcGoogle />
        </button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={() => {
              dispatch(setIsShowLoginPopup(false));
              dispatch(setIsShowRegistrationPopup(true));
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};
