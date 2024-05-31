import React, {Dispatch, FC, useRef} from "react";

import {useAppDispatch} from "hooks/useReduxToolkit";
import { setTriggerCoordinators } from "../../redux/slices/dropdown";
import { getRefCoordinates } from "utils/getRefCoordinates";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "utils/cn";

interface MultiSelectContainerProps {
  isOpen: boolean;
  handleClick: Dispatch<boolean>;
}

export const MultiSelectContainer: FC<MultiSelectContainerProps> = ({
  isOpen,
  handleClick,
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
      className="w-full rounded bg-gradient-to-br from-opacityBlue to-opacityRed p-[1px] cursor-pointer"
      ref={containerRef}
      onClick={(e) => openCloseHandler(e)}
    >
      <div className="flex items-center justify-between rounded bg-mainBg px-2 py-1">
        MultiSelectContainer
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
