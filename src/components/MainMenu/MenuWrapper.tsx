import React from "react";

interface MenuWrapperProps {
  children: React.ReactNode;
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => {
  return (
    <div className="relative !aspect-[1/2] max-w-lg sm:!aspect-[1/1.5] md:!aspect-square [&>*:nth-child(1)]:top-[10%] [&>*:nth-child(1)]:[clip-path:polygon(0%_0%,100%_0%,95%_100%,0%_100%)] [&>*:nth-child(2)]:top-[10%] [&>*:nth-child(2)]:[clip-path:polygon(0%_0%,100%_0%,100%_100%,5%_100%)] [&>*:nth-child(3)]:top-[50%] [&>*:nth-child(3)]:-translate-x-4 [&>*:nth-child(3)]:-translate-y-1/2 [&>*:nth-child(4)]:top-[50%] [&>*:nth-child(4)]:-translate-y-1/2 [&>*:nth-child(4)]:translate-x-4 [&>*:nth-child(5)]:bottom-[10%] [&>*:nth-child(5)]:[clip-path:polygon(0%_0%,93%_0%,100%_100%,0%_100%)] [&>*:nth-child(6)]:bottom-[10%] [&>*:nth-child(6)]:[clip-path:polygon(7%_0%,100%_0%,100%_100%,0%_100%)] [&>*:nth-child(even)]:left-full [&>*:nth-child(odd)]:right-full [&>*:nth-child(odd)]:flex-row-reverse">
      {children}
    </div>
  );
};
