import React, { Dispatch, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setListCoordinators } from "../../redux/slices/dropdown";
import { useAppDispatch } from "hooks/useReduxToolkit";
import { getRefCoordinates } from "utils/getRefCoordinates";


interface TriggerProps {
  isOpen: boolean;
  handleClick: Dispatch<boolean>;
}

export const Trigger: React.FC<TriggerProps> = (props) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleClick } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openCloseHandler = () => {
    handleClick(!isOpen);
    dispatch(setListCoordinators(getRefCoordinates(buttonRef)));
  };

  return (
    <button 
      className="flex justify-between items-center gap-2 w-full" 
      onClick={openCloseHandler}
      ref={buttonRef}
    >
      Тригер
      <IoIosArrowDown />
    </button>
  );
};
