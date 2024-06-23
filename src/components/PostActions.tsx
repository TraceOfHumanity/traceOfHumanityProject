import {FaCheck} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppDispatch} from "hooks/useReduxToolkit";

import {
  setIsAcceptRequestAPostPopup,
  setIsDeletePostConfirmationPopup,
} from "../redux/slices/popups";

export const PostActions = () => {
  const dispatch = useAppDispatch();
  const {getPath} = useAppNavigation();

  const openConfirmationPopup = () => {
    dispatch(setIsDeletePostConfirmationPopup(true));
  };

  const openAcceptRequestAPostPopup = () => {
    dispatch(setIsAcceptRequestAPostPopup(true));
  };

  return (
    <div className="absolute right-0 top-0 z-10 flex gap-2 opacity-0 group-hover:opacity-100">
      {getPath().pathArray.includes("dashboard") && (
        <button
          className="rounded border border-borderColor p-1 backdrop-blur"
          onClick={openAcceptRequestAPostPopup}
        >
          <FaCheck />
        </button>
      )}
      <button
        className="rounded border border-borderColor p-1 backdrop-blur"
        onClick={openConfirmationPopup}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};
