import React from "react";

import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { IoFingerPrintOutline, IoLogIn } from "react-icons/io5";
import { TbPasswordFingerprint } from "react-icons/tb";

export const LoginPopup = () => {
  return (
    <div className="popupWrapper">
      <div className="popup">
        <IoFingerPrintOutline className="popupBg" />

        <button className="closePopup" onClick={() => {}}>
          <IoMdClose />
        </button>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Login" />
          <input type="password" placeholder="Password" />
          <button type="submit">
            Login <IoLogIn />
          </button>
          <button>
            Reset password <TbPasswordFingerprint />
          </button>
          <p className="or">-- or --</p>
        </form>
        <button>
          Login with Google <FcGoogle />
        </button>
        <p>
          Don't have an account? <button>Register</button>
        </p>
      </div>
    </div>
  );
};
