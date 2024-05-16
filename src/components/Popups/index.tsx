import React, { useRef } from "react";

import { GreetingPopup } from "./GreetingPopup";
import { LoginPopup } from "./LoginPopup";
import { PleaseRegister } from "./PleaseRegisterPopup";
import { RegistrationPopup } from "./RegistrationPopup";
import { ResetPasswordPopup } from "./ResetPasswordPopup";
import { useAppSelector } from "hooks/useReduxToolkit";

export const Popups = () => {
  const {
    isOpenGreetingPopup,
    isOpenPleaseRegisterPopup,
    isLoginPopup,
    isRegistrationPopup,
    isResetPasswordPopup,
  } = useAppSelector((state) => state.popups);

  const popupsRef = useRef(null);

  return (
    <div ref={popupsRef} className="fixed left-0 top-0 z-50 h-0">
      {isOpenGreetingPopup && <GreetingPopup />}
      {isOpenPleaseRegisterPopup && <PleaseRegister />}
      {isLoginPopup && <LoginPopup />}
      {isRegistrationPopup && <RegistrationPopup />}
      {isResetPasswordPopup && <ResetPasswordPopup />}
    </div>
  );
};
