import {useEffect, useState} from "react";
import {IoMdClose} from "react-icons/io";
import {IoMenu} from "react-icons/io5";

import {useAppSelector} from "hooks/useReduxToolkit";

export const LibraryMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const {allCategories} = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        setIsOpenMenu(true);
      } else {
        setIsOpenMenu(false);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth > 1024) {
          setIsOpenMenu(true);
        } else {
          setIsOpenMenu(false);
        }
      });
    };
  }, []);

  return (
    <div className="absolute left-2 top-10 z-20 flex flex-col gap-2 overflow-y-auto lg:relative lg:max-w-80 lg:w-full lg:left-0 lg:top-0">
      <button
        className="rounded border border-opacityBlue bg-mainBg p-1 lg:hidden"
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
          // document.body.style.overflow = "hidden";
        }}
      >
        <IoMenu />
      </button>
      {isOpenMenu && (
        <div className="fixed left-0 top-0 flex h-screen w-screen flex-col gap-2 overflow-y-auto p-3 shadow-popupShadow backdrop-blur lg:relative lg:w-full lg:p-0 lg:backdrop-blur-none lg:shadow-none">
          <header className="flex justify-between gap-2">
            <h3>Categories</h3>
            <button
              className="rounded border border-opacityBlue bg-mainBg p-1 lg:hidden"
              onClick={() => {
                setIsOpenMenu(false);
                // document.body.style.overflow = "auto";
              }}
            >
              <IoMdClose />
            </button>
          </header>
          {allCategories.map((category: {name: string}) => (
            <button
              key={category.name}
              className="rounded border border-opacityBlue bg-mainBg p-2 text-start"
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
