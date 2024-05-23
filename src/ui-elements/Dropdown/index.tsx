import React, {FC, useEffect, useRef, useState} from "react";

import {List} from "./List";
import {Trigger} from "./Trigger";

// import { useAppDispatch } from "hooks/useReduxToolkit";
// import { setTriggerCoordinators } from "../../redux/slices/dropdown";

interface DropdownProps {
  list: string[];
}

export const Dropdown: FC<DropdownProps> = ({list}) => {
  // const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="max-w-72" ref={dropdownRef}>
      <Trigger
        selectedItem={selectedItem}
        isOpen={isOpen}
        handleClick={handleClick}
      />
      {isOpen && <List list={list} />}
    </div>
  );
};
