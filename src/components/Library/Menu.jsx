import React from "react";
import {Link} from "react-router-dom";

export const LibraryMenu = () => {
  return (
    <div className="flex flex-col gap-2 overflow-x-auto">
      {/* <div className="">History</div>
      <div className="">Science</div>
      <div className="">Philosophy and Religion</div> */}
      <Link to="/library/history" className="hover:text-blue-500">
        History
      </Link>
      <Link to="/library/science" className="hover:text-blue-500">
        Science
      </Link>
      <Link to="/library/philosophy" className="hover:text-blue-500">
        Philosophy and Religion
      </Link>
    </div>
  );
};
