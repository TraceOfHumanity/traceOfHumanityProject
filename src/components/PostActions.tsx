import {FaCheck} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useAppDispatch} from "hooks/useReduxToolkit";

import {
  setIsAcceptRequestAPostPopup,
  setIsDeletePostConfirmationPopup,
} from "../redux/slices/popups";
import { setIsUpdatingPost } from "../redux/slices/createPost";
import { Link } from "react-router-dom";

export const PostActions = () => {
  const dispatch = useAppDispatch();
  const {getPath} = useAppNavigation();

  const openConfirmationPopup = () => {
    dispatch(setIsDeletePostConfirmationPopup(true));
  };

  const openAcceptRequestAPostPopup = () => {
    dispatch(setIsAcceptRequestAPostPopup(true));
  };

  const enableEditMode = () => {
    dispatch(setIsUpdatingPost(true));
  }

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
      {getPath().pathArray.includes("library") && (
        <Link
          to="/create-post"
          className="rounded border border-borderColor p-1 backdrop-blur"
          onClick={enableEditMode}
        >
          <FaCheck />
        </Link>
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
