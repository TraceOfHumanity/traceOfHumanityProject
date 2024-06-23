import {useLocation} from "react-router-dom";

import {setIsLoginPopup} from "../redux/slices/popups";
import {useAuth} from "./useAuth";
import {useAppDispatch, useAppSelector} from "./useReduxToolkit";

export const useAppNavigation = () => {
  const {isLoggedIn} = useAppSelector((state) => state.auth);
  const {logoutUser} = useAuth();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const mainMenuItems = [
    {
      name: "explore",
      link: "/library",
    },
    {
      name: "author",
      link: "/aboutAuthor",
    },
    {
      name: `${isLoggedIn ? "logout" : "login"}`,
      onClick: () => {
        if (isLoggedIn) {
          logoutUser();
        } else {
          dispatch(setIsLoginPopup(true));
        }
      },
    },
  ];

  const getPath = () => {
    const pathname = location.pathname;
    const pathArray = pathname.split("/");

    return {
      pathname,
      pathArray,
    };
  };

  return {
    mainMenuItems,
    getPath,
  };
};
