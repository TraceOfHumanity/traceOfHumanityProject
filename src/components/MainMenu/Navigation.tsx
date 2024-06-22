import React from "react";
import {FaSpaceShuttle} from "react-icons/fa";
import {IoLogIn} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md";
import {SiAlienware} from "react-icons/si";
import {Link} from "react-router-dom";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppSelector} from "hooks/useReduxToolkit";

import {MenuItemWrapper} from "./MenuItemWrapper";

export const Navigation = () => {
  const {mainMenuItems} = useAppNavigation();
  const {userId} = useAppSelector((state) => state.auth);
  const {requestsToCreateArticles} = useAppSelector((state) => state.dashboard);

  return (
    <>
      {mainMenuItems.map((item, index) => (
        <MenuItemWrapper
          key={index}
          buttonId={item.name === "login" ? "loginButton" : `${item.name}`}
        >
          {/* {item.icon} */}
          {item.name === "explore" && <FaSpaceShuttle />}
          {item.name === "author" && <SiAlienware />}
          {item.name === "login" && <IoLogIn />}
          {item.name === "logout" && <IoLogIn />}
          {item.link ? (
            <Link to={item.link}>{item.name}</Link>
          ) : (
            <button onClick={item.onClick}>{item.name}</button>
          )}
        </MenuItemWrapper>
      ))}
      {userId === process.env.REACT_APP_TRACE_OF_HUMANITY && (
        <MenuItemWrapper>
          <MdSpaceDashboard />
          <Link className="relative" to="/dashboard">
            Dashboard
            {requestsToCreateArticles.length > 0 && (
              <span className="absolute -right-1 top-0 block size-2 rounded-full bg-red animate-ping" />
            )}
          </Link>
        </MenuItemWrapper>
      )}
    </>
  );
};
