import React, { Dispatch, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { setListCoordinators } from "../../redux/slices/dropdown";
import { useAppDispatch } from "hooks/useReduxToolkit";
import { getRefCoordinates } from "utils/getRefCoordinates";


interface TriggerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export const Trigger: React.FC<TriggerProps> = (props) => {
  const dispatch = useAppDispatch();
  const { isOpen, setIsOpen } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    dispatch(setListCoordinators(getRefCoordinates(buttonRef)));
  };

  return (
    <button 
      className="flex justify-between items-center gap-2 w-full" 
      onClick={handleClick}
      ref={buttonRef}
    >
      Тригер
      <IoIosArrowDown />
    </button>
  );
};
