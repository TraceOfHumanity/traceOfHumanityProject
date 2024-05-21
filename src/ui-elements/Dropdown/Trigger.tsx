import React, {Dispatch} from "react";
import {IoIosArrowDown} from "react-icons/io";

import {InputWrapper} from "ui-elements/InputWrapper";

interface TriggerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export const Trigger: React.FC<TriggerProps> = (props) => {
  const {isOpen, setIsOpen} = props;
  return (
    <button className="flex justify-between items-center gap-2 w-full" onClick={() => setIsOpen(!isOpen)}>
      Trigger
      <IoIosArrowDown />
    </button>
  );
};
