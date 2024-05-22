import React from "react";

import {useAppSelector} from "hooks/useReduxToolkit";

interface ListCoordinators {
  x?: number;
  y?: number;
  width?: number;
}

export const List = () => {
  const listCoordinators = useAppSelector(
    (state: {dropdown: {listCoordinators: ListCoordinators}}) =>
      state.dropdown.listCoordinators,
  );

  const {x, y, width} = listCoordinators;
  return (
    <ul
      className="fixed z-50 after:absolute after:top-full after:h-4 after:w-full after:bg-dropdownBottom after:bg-contain after:bg-bottom after:bg-no-repeat after:opacity-30 border-r border-l p-1 border-borderColor after:left-0 backdrop-blur"
      style={{
        top: y,
        left: x,
        width: width,
      }}
    >
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};
