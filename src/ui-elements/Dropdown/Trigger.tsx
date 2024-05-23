import React, {Dispatch, useRef} from "react";
import {IoIosArrowDown} from "react-icons/io";

import {useAppDispatch} from "hooks/useReduxToolkit";
import {cn} from "utils/cn";
import {getRefCoordinates} from "utils/getRefCoordinates";

import {setTriggerCoordinators} from "../../redux/slices/dropdown";

interface TriggerProps {
  isOpen: boolean;
  handleClick: Dispatch<boolean>;
}

export const Trigger: React.FC<TriggerProps> = (props) => {
  const dispatch = useAppDispatch();
  const {isOpen, handleClick} = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openCloseHandler = () => {
    handleClick(!isOpen);
    dispatch(setTriggerCoordinators(getRefCoordinates(buttonRef)));
  };

  return (
    <button
      className={cn(
        "w-full bg-gradient-to-br from-opacityBlue to-opacityRed rounded p-[1px]",
        isOpen ? "after:drop-shadow-[0_2px_1px_var(--blue)]" : "",
      )}
      onClick={openCloseHandler}
      ref={buttonRef}
    >
      <p className="flex items-center justify-between px-2 pt-1 bg-mainBg rounded">
        Тригер
        <IoIosArrowDown />
      </p>
    </button>
  );
};
