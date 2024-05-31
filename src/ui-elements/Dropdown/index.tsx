import {FC, useEffect, useRef, useState} from "react";

import {cn} from "utils/cn";

import {List} from "./List";
import {MultiSelectContainer} from "./MultiSelectContainer";
import {Trigger} from "./TriggerButton";

interface DropdownProps {
  list: string[];
  selectedItem: string;
  dispatchFunction?: (item: string) => void;
  updateFunction?: (item: string) => void;
  placeholder?: string;
  className?: string;
  type?: "multiSelect";
  selectedItems?: string[];
}

export const Dropdown: FC<DropdownProps> = ({
  list,
  selectedItem,
  dispatchFunction,
  updateFunction,
  placeholder,
  className,
  type,
  selectedItems,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string>(selectedItem);

  const handleClick = () => {
    setIsOpen(true);
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

  const DropdownHeader = () => {
    if (type === "multiSelect") {
      return (
        <MultiSelectContainer
          isOpen={isOpen}
          handleClick={handleClick}
          placeholder={placeholder}
          selectedItems={selectedItems}
          updateFunction={updateFunction}
        />
      );
    } else {
      return (
        <Trigger
          value={value}
          isOpen={isOpen}
          handleClick={handleClick}
          placeholder={placeholder}
        />
      );
    }
  };

  return (
    <div className={cn("max-w-72 select-none", className)} ref={dropdownRef}>
      {DropdownHeader()}
      {isOpen && (
        <List
          list={list}
          setValue={setValue}
          setIsOpen={setIsOpen}
          dispatchFunction={dispatchFunction}
        />
      )}
    </div>
  );
};
