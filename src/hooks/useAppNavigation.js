import { FaSpaceShuttle } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { SiAlienware } from "react-icons/si";
import { useSelector } from "react-redux";

import { useAuth } from "./useAuth";

export const useAppNavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { logoutUser } = useAuth();

  const mainMenuItems = [
    {
      name: "explore",
      link: "/library",
      icon: <FaSpaceShuttle />,
    },
    {
      name: "author",
      link: "/aboutAuthor",
      icon: <SiAlienware />,
    },
    {
      name: `${isLoggedIn ? "logout" : "login"}`,
      icon: <IoLogIn />,
      onClick: () => {
        if (isLoggedIn) {
          logoutUser();
        } else {
          // login();
        }
      },
    },
  ];

  return {
    mainMenuItems,
  };
};
