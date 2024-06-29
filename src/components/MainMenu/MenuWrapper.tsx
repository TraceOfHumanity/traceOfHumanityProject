import React from "react";

interface MenuWrapperProps {
  children: React.ReactNode;
}

export const MenuWrapper: React.FC<MenuWrapperProps> = ({children}) => {
  return (
    <div className="relative !aspect-[1/2] max-w-lg sm:!aspect-[1/1.5] md:!aspect-square [&>*:nth-child(1)]:top-[10%] [&>*:nth-child(2)]:top-[10%] [&>*:nth-child(1)]:translate-x-4 [&>*:nth-child(2)]:-translate-x-4 [&>*:nth-child(5)]:translate-x-4 [&>*:nth-child(6)]:-translate-x-4 [&>*:nth-child(3)]:top-[50%] [&>*:nth-child(3)]:-translate-x-5 [&>*:nth-child(3)]:-translate-y-1/2 [&>*:nth-child(4)]:top-[50%] [&>*:nth-child(4)]:-translate-y-1/2 [&>*:nth-child(4)]:translate-x-5 [&>*:nth-child(5)]:bottom-[10%] [&>*:nth-child(6)]:bottom-[10%] [&>*:nth-child(even)]:left-full [&>*:nth-child(odd)]:right-full [&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(odd)>*:nth-child(1)]:right-0 [&>*:nth-child(odd)>*:nth-child(1)]:translate-x-1/2 [&>*:nth-child(even)>*:nth-child(1)]:left-0 [&>*:nth-child(even)>*:nth-child(1)]:-translate-x-1/2 [&>*:nth-child(even)]:pl-6 [&>*:nth-child(odd)]:pr-6">
      {children}
    </div>
  );
};
