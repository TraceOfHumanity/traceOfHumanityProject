import React from "react";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";
import {Button} from "ui-elements/Button";
import {PopupShadow} from "ui-elements/PopupShadow";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import { useAppDispatch } from "hooks/useReduxToolkit";

export const DeletePostConfirmationPopup = () => {
  const dispatch = useAppDispatch();
  const {getPath} = useAppNavigation();
  const {
    deletePost,
    withdrawTheOfferToCreateAnArticle,
    acceptArticleCreationRequests,
  } = useFirebase();
  const postId = getPath().pathArray[getPath().pathArray.length - 1];

  const handleDelete = () => {
    if (getPath().pathArray.includes("dashboard")) {
      withdrawTheOfferToCreateAnArticle(postId)
        .then(() => console.log("Offer is withdrawn successfully"))
        .catch((error) => console.error(error));
    }
    if (getPath().pathArray.includes("library")) {
      deletePost(postId)
        .then(() => console.log("Post is deleted successfully"))
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <PopupWrapper className="relative z-10">
        <h2>Are you sure you want to delete this post?</h2>
        <footer>
          <Button variant="ghost">cancel</Button>
          <Button className="" onClick={handleDelete} variant="delete">
            delete
          </Button>
        </footer>
      </PopupWrapper>
      <PopupShadow />
    </div>
  );
};
