import React, {useEffect, useState} from "react";

import {List} from "./List";
import {Trigger} from "./Trigger";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = React.createRef<HTMLDivElement>();

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
    <div className="max-w-72 bg-fuchsia-600" ref={dropdownRef}>
      <Trigger isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <List />}
    </div>
  );
};
