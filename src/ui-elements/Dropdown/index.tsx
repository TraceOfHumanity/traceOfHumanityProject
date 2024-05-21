import React, { useState } from "react";

import {List} from "./List";
import {Trigger} from "./Trigger";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Trigger 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && <List />}
    </div>
  );
};
