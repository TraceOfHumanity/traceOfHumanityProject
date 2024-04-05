import React from "react";

export const MenuWrapper = ({ children }) => {
  return (
    <div className="relative py-10 [&>*:nth-child(1)]:[clip-path:polygon(0%_0%,100%_0%,95%_100%,0%_100%)] [&>*:nth-child(2)]:[clip-path:polygon(0%_0%,100%_0%,100%_100%,5%_100%)] [&>*:nth-child(5)]:[clip-path:polygon(0%_0%,93%_0%,100%_100%,0%_100%)] [&>*:nth-child(6)]:[clip-path:polygon(7%_0%,100%_0%,100%_100%,0%_100%)]">
      {children}
    </div>
  );
};

// &:nth-child(1) {
//         top: 10%;
//         clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 0% 100%);
//       }

//       &:nth-child(2) {
//         top: 10%;
//         clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%);
//       }

//       &:nth-child(3) {
//         top: 50%;
//       }

//       &:nth-child(4) {
//         top: 50%;
//       }

//       &:nth-child(5) {
//         bottom: 10%;
//         clip-path: polygon(0% 0%, 93% 0%, 100% 100%, 0% 100%);
//       }

//       &:nth-child(6) {
//         bottom: 10%;
//         clip-path: polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%);
//       }
