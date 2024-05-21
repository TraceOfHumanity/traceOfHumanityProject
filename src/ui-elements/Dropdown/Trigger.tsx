import React, {Dispatch, useRef} from "react";
import {IoIosArrowDown} from "react-icons/io";

import {InputWrapper} from "ui-elements/InputWrapper";

interface TriggerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

export const Trigger: React.FC<TriggerProps> = (props) => {
  const {isOpen, setIsOpen} = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      className="flex w-full items-center justify-between gap-2"
      onClick={() => setIsOpen(!isOpen)}
      ref={buttonRef}
    >
      Trigger
      <IoIosArrowDown />
    </button>
  );
};
