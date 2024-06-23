import {FaCheck} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

import {setIsDeletePostConfirmationPopup} from "../redux/slices/popups";
import { useAppDispatch } from "hooks/useReduxToolkit";

export const PostActions = () => {
  const dispatch = useAppDispatch();

  const openConfirmationPopup = () => {
    dispatch(setIsDeletePostConfirmationPopup(true));
  };

  return (
    <div className="absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100">
      <button
        className="rounded border border-borderColor p-1"
        // onClick={}
      >
        <FaCheck />
      </button>
      <button
        className="rounded border border-borderColor p-1"
        onClick={openConfirmationPopup}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};
