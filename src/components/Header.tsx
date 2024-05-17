import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {useAuth} from "hooks/useAuth";
import { useAppSelector } from "hooks/useReduxToolkit";

export const Header = () => {
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  const [showGreeting, setShowGreeting] = useState(false);
  const {checkAuthorization, displayName} = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      setShowGreeting(true);
      setTimeout(() => {
        setShowGreeting(false);
      }, 5000);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    checkAuthorization();
  }, [displayName]);
  return (
    <div className="bg-headerCenter grid h-[5vh] min-h-8 grid-cols-3 items-center gap-2 bg-cover bg-top bg-no-repeat drop-shadow-[0_10px_35px_#FE010133] md:bg-contain [&>*]:h-full [&>*]:max-h-[5vh]">
      <div className="pl-2">
        {isLoggedIn && showGreeting && <p>Hi, {displayName}!</p>}
      </div>
      <div className="flex justify-center py-1">
        <Link className="" to="/">
          <img className="h-full" src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="pr-2 text-end"></div>
    </div>
  );
};
