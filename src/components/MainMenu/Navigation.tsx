import React from "react";
import {MdSpaceDashboard} from "react-icons/md";
import {Link} from "react-router-dom";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppSelector} from "hooks/useReduxToolkit";

import {MenuItemWrapper} from "./MenuItemWrapper";
import { FaSpaceShuttle } from "react-icons/fa";
import { SiAlienware } from "react-icons/si";
import { IoLogIn } from "react-icons/io5";

export const Navigation = () => {
  const {mainMenuItems} = useAppNavigation();
  const {userId} = useAppSelector((state) => state.auth);

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
          <Link to="/dashboard">Dashboard</Link>
        </MenuItemWrapper>
      )}
    </>
  );
};
