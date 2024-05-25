import React, {Dispatch, FC, SetStateAction, useEffect} from "react";

import {useAppSelector} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";
import {getRefCoordinates} from "utils/getRefCoordinates";

interface Coordinators {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

interface ListProps {
  list: string[];
  setValue: Dispatch<SetStateAction<string>>;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  dispatchFunction?: () => void;
}

export const List: FC<ListProps> = ({
  list,
  setValue,
  setIsOpen,
  dispatchFunction,
}) => {
  const listRef = React.useRef<HTMLDivElement>(null);

  const triggerCoordinators = useAppSelector(
    (state: {dropdown: {triggerCoordinators: Coordinators}}) =>
      state.dropdown.triggerCoordinators,
  );

  const {x = 0, y = 0, width = 0, height = 0} = triggerCoordinators || {};

  useEffect(() => {
    const coordinates = getRefCoordinates(listRef);
    if (coordinates) {
      if (coordinates.y + coordinates.height > window.innerHeight) {
        if (listRef.current) {
          listRef.current.style.top = `${y - coordinates.height}px`;
        }
      }
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed z-50 border-borderColor before:pointer-events-none before:bottom-full before:left-0 before:block before:h-2.5 before:w-full before:rotate-180 before:bg-dropdownBottom before:bg-contain before:bg-bottom before:bg-no-repeat before:opacity-30 after:pointer-events-none after:left-0 after:top-full after:block after:h-2.5 after:w-full after:bg-dropdownBottom after:bg-contain after:bg-bottom after:bg-no-repeat after:opacity-30",
      )}
      style={{
        top: `${y + height}px`,
        left: `${x}px`,
        width: `${width}px`,
      }}
      ref={listRef}
    >
      <ul className="max-h-52 overflow-y-auto shadow-[inset_0px_0px_10px_4px_var(--opacityBlue01)] backdrop-blur [&>li]:px-2 [&>li]:py-1 hover:[&>li]:shadow-[inset_0px_0px_10px_4px_var(--opacityBlue01)]">
        {list.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setValue(item);
              setIsOpen && setIsOpen(false);
              dispatchFunction && dispatchFunction();
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
