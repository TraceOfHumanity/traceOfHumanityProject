import { useAppNavigation } from "hooks/useAppNavigation";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItemWrapper";

export const Navigation = () => {
  const { mainMenuItems } = useAppNavigation();
  const { userId } = useSelector((state) => state.auth);
  return (
    <>
      {mainMenuItems.map((item, index) => (
        <MenuItemWrapper key={index}>
          {item.icon}
          <Link to={item.link} onClick={item.onClick}>
            {item.name}
          </Link>
        </MenuItemWrapper>
      ))}
      {userId === process.env.REACT_APP_TRACE_OF_HUMANITY && (
        <MenuItemWrapper>
          <Link to="/dashboard">Dashboard</Link>
        </MenuItemWrapper>
      )}
    </>
  );
};
