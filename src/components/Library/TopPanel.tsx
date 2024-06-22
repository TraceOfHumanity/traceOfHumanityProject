import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { setIsOpenPleaseRegisterPopup } from "../../redux/slices/popups";
import { Navigation } from "./Navigation";
import { useAppSelector } from "hooks/useReduxToolkit";

export const TopPanel = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  const showWarningPopup = () => {
    dispatch(setIsOpenPleaseRegisterPopup(true));
  };
  return (
    <div className="mb-2 pb-2 flex items-center gap-5 border-b border-opacityBlue">
      <Navigation />
      {isLoggedIn ? (
        <Link
          className="flex items-center gap-2 text-xs md:text-sm lg:text-base"
          to="/create-post"
        >
          <MdOutlinePostAdd />
          Add post
        </Link>
      ) : (
        <button
          className="flex items-center gap-2 text-xs md:text-sm lg:text-base"
          onClick={() => showWarningPopup()}
        >
          <MdOutlinePostAdd />
          Add post
        </button>
      )}
    </div>
  );
};
