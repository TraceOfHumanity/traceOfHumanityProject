import React from "react";

export const MenuItemWrapper = ({ children }) => {
  return (
    <div className="border-t-opacityBlue border-b-opacityRed [:nth-child(2)]:bg-red-500 absolute flex w-fit min-w-44 items-center gap-2 border-b border-t p-2  odd:right-full odd:flex-row-reverse even:left-full ">
      {children}
    </div>
  );
};

// &:nth-child(1) {
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
