import React from "react";
import {FaCheck} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

import {useAppNavigation} from "hooks/useAppNavigation";

export const PostActions = () => {
  const {getPath} = useAppNavigation();
  const {pathArray} = getPath();

  return (
    <div className="absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100">
      <button className="rounded border border-borderColor p-1">
        <FaCheck />
      </button>
      <button className="rounded border border-borderColor p-1">
        <MdDeleteForever />
      </button>
    </div>
  );
};
