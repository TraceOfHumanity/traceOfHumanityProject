import { useAuth } from "hooks/useAuth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showGreeting, setShowGreeting] = useState(false);
  const { checkAuthorization, displayName } = useAuth();

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
    <div className="grid grid-cols-3 items-center gap-2 py-1">
      <div className="pl-2">
        {isLoggedIn && showGreeting && <p>Hi, {displayName}!</p>}
      </div>
      <div className="flex justify-center">
        <Link className="" to="/">
          <img className="w-10" src="/logo.svg" alt="" />
        </Link>
      </div>
      <div className="pr-2 text-end"></div>
    </div>
  );
};
