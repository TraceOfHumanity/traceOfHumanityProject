import React, {useEffect, useState} from "react";

import {useAppSelector} from "hooks/useReduxToolkit";
import {getRefCoordinates} from "utils/getRefCoordinates";

interface Coordinators {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const List = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInsideScreen, setIsInsideScreen] = useState<boolean>(true);
  const listRef = React.useRef<HTMLDivElement>(null);

  const triggerCoordinators = useAppSelector(
    (state: {dropdown: {triggerCoordinators: Coordinators}}) =>
      state.dropdown.triggerCoordinators,
  );

  const [listCoordinates, setListCoordinates] = useState<Coordinators | null>(
    null,
  );

  const {x = 0, y = 0, width = 0, height = 0} = triggerCoordinators || {};

  useEffect(() => {
    const coordinates = getRefCoordinates(listRef);
    if (coordinates) {
      setListCoordinates(coordinates);
      console.log(coordinates);
    }
  }, [triggerCoordinators]);

  return (
    <div
      className="fixed z-50 mt-4 border-l border-r border-borderColor p-1 shadow-[inset_0px_0px_10px_4px_var(--opacityBlue01)] backdrop-blur before:pointer-events-none before:absolute before:bottom-full before:left-0 before:h-4 before:w-full before:rotate-180 before:bg-dropdownBottom before:bg-contain before:bg-bottom before:bg-no-repeat before:opacity-30 after:pointer-events-none after:absolute after:left-0 after:top-full after:h-4 after:w-full after:bg-dropdownBottom after:bg-contain after:bg-bottom after:bg-no-repeat after:opacity-30"
      style={{
        top: `${y + height}px`,
        left: `${x}px`,
        width: `${width}px`,
      }}
      ref={listRef}
    >
      <ul className="max-h-72 overflow-y-auto">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </div>
  );
};
