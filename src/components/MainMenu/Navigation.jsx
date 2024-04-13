import { useAppNavigation } from "hooks/useAppNavigation";
import React from "react";
import { Link } from "react-router-dom";

import { MenuItemWrapper } from "./MenuItemWrapper";

export const Navigation = () => {
  const { mainMenuItems } = useAppNavigation();
  return (
    <>
      {mainMenuItems.map((item) => (
        <MenuItemWrapper>
          {item.icon}
          <Link to={item.link} onClick={item.onClick}>
            {item.name}
          </Link>
        </MenuItemWrapper>
      ))}
    </>
  );
};
