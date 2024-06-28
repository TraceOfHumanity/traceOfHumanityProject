import React, {useRef} from "react";
import {BiCategoryAlt} from "react-icons/bi";
import {MdOutlinePostAdd} from "react-icons/md";

import {usePopup} from "hooks/usePopup";

export const Menu = () => {
  const createCategoryButtonRef = useRef<HTMLButtonElement>(null);
  const {openCreateCategoryPopup} = usePopup();

  const handleCreateCategory = () => {
    openCreateCategoryPopup(createCategoryButtonRef);
  };

  return (
    <div className="flex flex-shrink flex-col gap-2 rounded-xl border-y border-r-2 border-borderColor bg-slate-50 bg-opacity-5 p-2 backdrop-blur">
      <button ref={createCategoryButtonRef} onClick={handleCreateCategory}>
        <BiCategoryAlt className="min-h-6 min-w-6" />
      </button>
      <button>
        <MdOutlinePostAdd className="min-h-6 min-w-6" />
      </button>
    </div>
  );
};
