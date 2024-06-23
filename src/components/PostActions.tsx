import React from "react";
import {FaCheck} from "react-icons/fa";
import {MdDeleteForever} from "react-icons/md";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";

export const PostActions = () => {
  const {getPath} = useAppNavigation();
  const {
    deletePost,
    withdrawTheOfferToCreateAnArticle,
    acceptArticleCreationRequests,
  } = useFirebase();
  const postId = getPath().pathArray[getPath().pathArray.length - 1];
  console.log(postId);

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

  const handleAccept = () => {
    acceptArticleCreationRequests(postId)
      .then(() =>
        console.log("Article creation request is accepted successfully"),
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="absolute right-0 top-0 flex gap-2 opacity-0 group-hover:opacity-100">
      <button
        className="rounded border border-borderColor p-1"
        onClick={handleAccept}
      >
        <FaCheck />
      </button>
      <button
        className="rounded border border-borderColor p-1"
        onClick={handleDelete}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};
