import { useDispatch } from "react-redux";

import { setIsLoginPopup } from "../redux/slices/popupsSlice";
import { useAuth } from "./useAuth";
import { useAppSelector } from "./useReduxToolkit";


export const useAppNavigation = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { logoutUser } = useAuth();
  const dispatch = useDispatch();

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

  return {
    mainMenuItems,
  };
};
