import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiAlienware } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
// import { Player } from "../MusicPlayer/Player";
import { Link } from "react-router-dom";

import { setFlashingOfTheLoginButton } from "../../redux/features/animationsSlice";
import { setIsOpenGreetingPopup } from "../../redux/features/popupsSlice";
import { Auth } from "./Auth";
import { MenuItemWrapper } from "./MenuItemWrapper";
import styles from "./mainMenu.module.scss";

const menuItems = [
  { name: "explore", link: "/library", icon: <FaSpaceShuttle /> },
  { name: "author", link: "/aboutAuthor", icon: <SiAlienware /> },
  { name: "authorization", icon: <IoLogIn /> },
];

export const MainMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userId } = useSelector((state) => state.auth);

  const authButtonRef = useRef();
  const { flashingOfTheLoginButton } = useSelector((state) => state.animations);

  useEffect(() => {
    const notFirstVisit = localStorage.getItem("notFirstVisit");
    if (!notFirstVisit) {
      localStorage.setItem("notFirstVisit", true);
      dispatch(setIsOpenGreetingPopup(true));
    }
  }, []);
  useEffect(() => {
    if (flashingOfTheLoginButton) {
      gsap.fromTo(
        authButtonRef.current,
        { scale: 1 },
        {
          delay: 1.5,
          scale: 1.01,
          duration: 1.5,
          repeat: 4,
          transformOrigin: "center ",
          ease: "elastic.out(10, 0.1)",
          onComplete: () => {
            dispatch(setFlashingOfTheLoginButton(false));
          },
        },
      );
    }
  }, []);

  return (
    // <div className={styles.mainMenu}>
    <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
      {/* <div className={styles.cut}> */}
      <div className="flex aspect-square w-[calc(300px+(950-300)*((100vw-320px)/(2500-320)))] max-w-4xl items-center justify-center overflow-hidden rounded-full bg-red-600">
        <div className={styles.menuItemsWrapper}>
          {menuItems.map((item, index) => (
            <MenuItemWrapper
              // className={styles.menuItem}
              // className="min-w-44 flex gap-2 items-center"
              key={index}
              ref={item.name === "authorization" ? authButtonRef : null}
            >
              {item % 2 !== 0 ? item?.icon : null}
              {item.link && <Link to={item.link}>{item.name}</Link>}
              {item.name === "authorization" && <Auth />}
              {item % 2 === 0 ? item?.icon : null}
            </MenuItemWrapper>
          ))}
          {isLoggedIn && userId === process.env.REACT_APP_TRACE_OF_HUMANITY && (
            <Link
              // className={styles.menuItem}
              // className="min-w-44 flex gap-2 items-center"
              to="dashboard"
            >
              {menuItems.length % 2 !== 0 && <MdDashboard />}
              dashboard
              {menuItems.length % 2 === 0 && <MdDashboard />}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// .mainMenu {
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   width: fit-content;
//   //margin: 0 auto;
//   height: fit-content;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1;
//   transform: translate(-50%, -50%);
//   -webkit-transform: translate(-50%, -50%);
//   -moz-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   -o-transform: translate(-50%, -50%);

//   .cut {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     width: calc(300px + (950 - 300) * ((100vw - 320px) / (2500 - 320)));
//     aspect-ratio: 5/4;
//     max-width: 900px;
//     border-radius: 50%;
//     -webkit-border-radius: 50%;
//     -moz-border-radius: 50%;
//     -ms-border-radius: 50%;
//     -o-border-radius: 50%;
//   }

//   .menuItemsWrapper {
//     width: calc(120px + (500 - 120) * ((100vw - 320px) / (2500 - 320)));
//     aspect-ratio: 1/1;
//     position: relative;

//     .menuItem {
//       min-width: 180px;
//       gap: 3%;
//       position: absolute;
//       padding: 10px 15px;
//       display: flex;
//       font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (2500 - 320)));
//       align-items: center;
//       border-top: 1px solid rgba(0, 221, 255, 0.4);
//       border-bottom: 1px solid rgba(0, 221, 255, 0.4);
//       text-transform: uppercase;
//       backdrop-filter: blur(2px);

//       * {
//         font-size: inherit;
//         font-weight: inherit;
//         text-transform: uppercase;
//       }

//       @media (max-width: 560px) {
//         padding: 4px 8px;
//       }

//       &:nth-child(even) {
//         left: calc(100% + calc(20px + (10 - 20) * ((100vw - 320px) / (2500 - 320))));
//         justify-content: start;
//         background: $mainAlphaGradient;
//       }

//       &:nth-child(odd) {
//         flex-direction: row-reverse;
//         right: calc(100% + calc(20px + (10 - 20) * ((100vw - 320px) / (2500 - 320))));
//         justify-content: end;
//         background: $mainAlphaRevertGradient;
//       }

//       &:nth-child(1) {
//         top: 10%;
//         clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
//         transform: translateX(14%);
//         -webkit-transform: translateX(14%);
//         -moz-transform: translateX(14%);
//         -ms-transform: translateX(14%);
//         -o-transform: translateX(14%);
//       }

//       &:nth-child(2) {
//         top: 10%;
//         clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%);
//         transform: translateX(-14%);
//         -webkit-transform: translateX(-14%);
//         -moz-transform: translateX(-14%);
//         -ms-transform: translateX(-14%);
//         -o-transform: translateX(-14%);
//       }

//       &:nth-child(3) {
//         top: 50%;
//         transform: translate(-0px, -50%);
//         -webkit-transform: translate(-0px, -50%);
//         -moz-transform: translate(-0px, -50%);
//         -ms-transform: translate(-0px, -50%);
//         -o-transform: translate(-0px, -50%);
//       }

//       &:nth-child(4) {
//         top: 50%;
//         transform: translate(0px, -50%);
//         -webkit-transform: translate(0px, -50%);
//         -moz-transform: translate(0px, -50%);
//         -ms-transform: translate(0px, -50%);
//         -o-transform: translate(0px, -50%);
//       }

//       &:nth-child(5) {
//         bottom: 10%;
//         clip-path: polygon(0% 0%, 93% 0%, 100% 100%, 0% 100%);
//         transform: translateX(14%);
//         -webkit-transform: translateX(14%);
//         -moz-transform: translateX(14%);
//         -ms-transform: translateX(14%);
//         -o-transform: translateX(14%);
//       }

//       &:nth-child(6) {
//         bottom: 10%;
//         clip-path: polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%);
//         transform: translateX(-14%);
//         -webkit-transform: translateX(-14%);
//         -moz-transform: translateX(-14%);
//         -ms-transform: translateX(-14%);
//         -o-transform: translateX(-14%);
//       }

//       span {
//         display: block;
//         width: 25px;
//         height: 25px;
//         font-size: 25px;
//         line-height: 25px;

//         @media (max-width: 560px) {
//           width: calc(14px + (25 - 14) * ((100vw - 320px) / (560 - 320)));
//           height: calc(14px + (25 - 14) * ((100vw - 320px) / (560 - 320)));
//           line-height: calc(14px + (25 - 14) * ((100vw - 320px) / (560 - 320)));
//           font-size: calc(14px + (25 - 14) * ((100vw - 320px) / (560 - 320)));
//         }
//       }

//       svg,
//       img {
//         width: 20px;
//         height: auto;
//         aspect-ratio: 1/1;

//         @media (max-width: 560px) {
//           width: calc(14px + (25 - 14) * ((100vw - 320px) / (560 - 320)));
//         }
//       }
//     }

//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       background-image: url(../../../public/assets/ld.svg);
//       height: 100%;
//       width: 100%;
//       background-repeat: no-repeat;
//       background-size: contain;
//       background-position: left;
//       pointer-events: none;
//     }

//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       background-image: url(../../../public/assets/rd.svg);
//       height: 100%;
//       width: 100%;
//       background-repeat: no-repeat;
//       background-size: contain;
//       background-position: right;
//       pointer-events: none;
//     }

//   }
// }

// .authorization {
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 10px;

//   .user {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;

//     // img {
//     //   width: 30px;
//     //   height: 30px;
//     // }
//   }
// }
