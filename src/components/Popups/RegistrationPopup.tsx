import React, {useState} from "react";
import {GiArchiveRegister} from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import {useDispatch} from "react-redux";

import {useAuth} from "hooks/useAuth";
import {Button} from "ui-elements/Button";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import {TextInput} from "ui-elements/TextInput";

import {
  setIsLoginPopup,
  setIsRegistrationPopup,
} from "../../redux/slices/popupsSlice";

export const RegistrationPopup = () => {
  const dispatch = useDispatch();
  const {registerUser} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <PopupWrapper className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
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
          onSubmit={(e) => registerUser(e, email, password, confirmPassword)}
        >
          <TextInput
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextInput
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
