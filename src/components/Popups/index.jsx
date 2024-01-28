import React, { useRef } from "react";

import { useSelector } from "react-redux";

import { GreetingPopup } from "./GreetingPopup";
import { LoginPopup } from "./LoginPopup";
import { PleaseRegister } from "./PleaseRegisterPopup";

export const Popups = () => {
  const { isOpenGreetingPopup, isOpenPleaseRegisterPopup } = useSelector(
    (state) => state.popups
  );

  const popupsRef = useRef(null);

  return (
    <div
      ref={popupsRef}
      style={{
        position: "fixed",
        height: "0",
        zIndex: "10",
      }}
    >
      {isOpenGreetingPopup && <GreetingPopup />}
      {isOpenPleaseRegisterPopup && <PleaseRegister />}
      <LoginPopup />
    </div>
  );
};
