import React, {Dispatch, FC, useRef} from "react";
import {IoIosArrowDown, IoIosClose} from "react-icons/io";

import {useAppDispatch} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";
import {getRefCoordinates} from "utils/getRefCoordinates";

import {setTriggerCoordinators} from "../../redux/slices/dropdown";

interface MultiSelectContainerProps {
  isOpen: boolean;
  handleClick: Dispatch<boolean>;
  placeholder?: string;
  selectedItems?: string[];
  updateFunction?: (item: string) => void;
}

export const MultiSelectContainer: FC<MultiSelectContainerProps> = ({
  isOpen,
  handleClick,
  placeholder,
  selectedItems,
  updateFunction,
}) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const openCloseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleClick(!isOpen);
    dispatch(setTriggerCoordinators(getRefCoordinates(containerRef)));
  };

  return (
    <div
      className="w-full cursor-pointer rounded bg-gradient-to-br from-opacityBlue to-opacityRed p-[1px]"
      ref={containerRef}
      onClick={(e) => openCloseHandler(e)}
    >
      <div className="flex items-center justify-between rounded bg-mainBg px-2 py-1">
        <div className="flex">
          {selectedItems?.length ? (
            selectedItems.map((item, index) => (
              <span
                key={index}
                className="mr-1 flex w-fit items-center justify-between gap-2 rounded-full bg-slate-800 px-2 py-1"
              >
                {item}
                <span
                  className="rounded-full bg-slate-950"
                  onClick={() => {
                    updateFunction && updateFunction(item);
                  }}
                >
                  <IoIosClose className="size-8 " />
                </span>
              </span>
            ))
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <IoIosArrowDown
          className={cn(
            "ml-auto duration-200",
            isOpen ? "-scale-y-100 transform" : "",
          )}
        />
      </div>
    </div>
  );
};
