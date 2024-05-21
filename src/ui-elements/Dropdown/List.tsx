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
    <div
      className="fixed bg-black z-50"
      style={{
        top: y,
        left: x,
        width: width,
      }}
    >
      List
    </div>
  );
};
