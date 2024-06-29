import React from "react";
import {FaSpaceShuttle} from "react-icons/fa";
import {IoLogIn} from "react-icons/io5";
import {MdSpaceDashboard} from "react-icons/md";
import {SiAlienware} from "react-icons/si";
import {Link} from "react-router-dom";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppSelector} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";

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
          <div
            className={cn(
              "bg-hexagon absolute top-0 flex aspect-square h-[calc(100%+2px)] items-center justify-center bg-contain bg-center bg-no-repeat",
              // index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
            )}
          >
            <item.icon />
          </div>
          {item.link ? (
            <Link to={item.link}>{item.name}</Link>
          ) : (
            <button onClick={item.onClick}>{item.name}</button>
          )}
        </MenuItemWrapper>
      ))}
      {userId === process.env.REACT_APP_TRACE_OF_HUMANITY && (
        <MenuItemWrapper>
          <div
            className={cn(
              "bg-hexagon absolute top-0 flex aspect-square h-[calc(100%+2px)] items-center justify-center bg-contain bg-center bg-no-repeat ",
              // index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
            )}
          >
            <MdSpaceDashboard />
          </div>
          <Link className="relative" to="/dashboard">
            Dashboard
            {requestsToCreateArticles.length > 0 && (
              <span className="absolute -right-1 top-0 block size-2 animate-ping rounded-full bg-red" />
            )}
          </Link>
        </MenuItemWrapper>
      )}
    </>
  );
};
