import {is} from "@react-three/fiber/dist/declarations/src/core/utils";
import React, {Dispatch, FC, useRef} from "react";
import {IoIosArrowDown} from "react-icons/io";

import {useAppDispatch} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";
import {getRefCoordinates} from "utils/getRefCoordinates";

import {setTriggerCoordinators} from "../../redux/slices/dropdown";

interface TriggerProps {
  value: string;
  isOpen: boolean;
  handleClick: Dispatch<boolean>;
}

export const Trigger: FC<TriggerProps> = ({
  value,
  isOpen,
  handleClick,
}) => {
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openCloseHandler = () => {
    handleClick(!isOpen);
    dispatch(setTriggerCoordinators(getRefCoordinates(buttonRef)));
  };

  return (
    <button
      className={cn(
        "w-full rounded bg-gradient-to-br from-opacityBlue to-opacityRed p-[1px]",
        isOpen ? "shadow-[0_4px_4px_var(--opacityBlue01)]" : "",
      )}
      onClick={openCloseHandler}
      ref={buttonRef}
    >
      <p className="flex items-center justify-between rounded bg-mainBg px-2 py-1">
        {value || "Select"}
        <IoIosArrowDown
          className={cn("duration-200 ml-auto", isOpen ? "-scale-y-100 transform" : "")}
        />
      </p>
    </button>
  );
};
