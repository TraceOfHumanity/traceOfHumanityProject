import {CheckIcon} from "@heroicons/react/24/outline";
import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";

import {getCoordinates} from "utils/getCoordinates";

export const ContentWrapper = ({
  list,
  onClick,
  selectedItem,
  setIsOpenDropdown,
  setSelectedItem,
}) => {
  const {triggerCoordinates} = useSelector((state) => state.dropdown);

  const [dropdownContentCoordinates, setDropdownContentCoordinates] = useState(
    {},
  );

  const [isInsideScreen, setIsInsideScreen] = useState(true);

  const [isLoaded, setIsLoaded] = useState(false);

  console.log("triggerCoordinates", triggerCoordinates);

  console.log("dropdownContentCoordinates", dropdownContentCoordinates);

  const dropdownContentRef = useRef(null);

  useEffect(() => {
    setDropdownContentCoordinates(getCoordinates(dropdownContentRef));

    if (
      dropdownContentCoordinates.y + dropdownContentCoordinates.height >
      window.innerHeight
    ) {
      setIsInsideScreen(false);

      setIsLoaded(true);
    } else {
      setIsInsideScreen(true);

      setIsLoaded(true);
    }
  }, [
    dropdownContentCoordinates.height,

    dropdownContentCoordinates.y,

    triggerCoordinates,
  ]);

  return (
    <div
      className="fixed left-0 top-0 z-10 h-screen w-screen"
      onClick={() => setIsOpenDropdown(false)}
    >
      <div
        className="border-gray bg-tableBg fixed flex max-h-80 flex-col overflow-y-auto rounded-xl border [&>*]:px-4 "
        style={{
          top: isInsideScreen
            ? triggerCoordinates.y + triggerCoordinates.height + 10
            : triggerCoordinates.y - dropdownContentCoordinates.height - 10,

          left: triggerCoordinates.x,

          width: triggerCoordinates.width,

          opacity: isLoaded ? 1 : 0,
        }}
        ref={dropdownContentRef}
      >
        {list ? (
          list?.map((item) => (
            <button
              className="flex justify-between py-2 font-normal"
              key={item}
              onClick={() => {
                setSelectedItem(item);

                setIsOpenDropdown(false);

                onClick(item);
              }}
            >
              {item}

              {selectedItem === item && <CheckIcon className="size-4" />}
            </button>
          ))
        ) : (
          <p>No items</p>
        )}
      </div>
    </div>
  );
};
