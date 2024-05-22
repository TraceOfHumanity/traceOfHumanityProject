import React, {useEffect, useRef, useState} from "react";

import {List} from "./List";
import {Trigger} from "./Trigger";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<(HTMLDivElement | null)>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      console.log("click outside");
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
      <Trigger isOpen={isOpen} handleClick={handleClick} />
      {isOpen && <List />}
    </div>
  );
};
