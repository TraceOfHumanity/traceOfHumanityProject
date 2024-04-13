import { auth } from "firebase.config";
// import {
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "firebase/auth";
import { useAuth } from "hooks/useAuth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline, IoLogIn } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { Button } from "ui-elements/Button";
import { PopupWrapper } from "ui-elements/PopupWrapper";

import {
  setIsLoginPopup,
  setIsRegistrationPopup,
  setIsResetPasswordPopup,
} from "../../redux/features/popupsSlice";

export const LoginPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { loginUser, signInWithGoogle } = useAuth();

  return (
    <div>
      <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {/* <IoFingerPrintOutline className="popupBg" /> */}
        <header>
          <button onClick={() => dispatch(setIsLoginPopup(false))}>
            <IoMdClose />
          </button>
          <h2>Login</h2>
        </header>
        <form onSubmit={(e) => loginUser(e, email, password)}>
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
          <Button type="submit">
            Login <IoLogIn />
          </Button>
        </form>
        <Button
          onClick={() => {
            dispatch(setIsResetPasswordPopup(true));
            dispatch(setIsLoginPopup(false));
          }}
        >
          Reset password <TbPasswordFingerprint />
        </Button>
        <p className="or">-- or --</p>
        <Button onClick={signInWithGoogle}>
          Login with Google <FcGoogle />
        </Button>
        <p>
          Don't have an account?{" "}
          <button
            onClick={() => {
              dispatch(setIsLoginPopup(false));
              dispatch(setIsRegistrationPopup(true));
            }}
          >
            Register
          </button>
        </p>
      </PopupWrapper>
    </div>
  );
};
