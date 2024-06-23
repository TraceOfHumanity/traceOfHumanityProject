import React from "react";

import {useAppNavigation} from "hooks/useAppNavigation";
import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch} from "hooks/useReduxToolkit";
import {Button} from "ui-elements/Button";
import {PopupShadow} from "ui-elements/PopupShadow";
import {PopupWrapper} from "ui-elements/PopupWrapper";

import {setIsAcceptRequestAPostPopup} from "../../redux/slices/popups";
import { useNavigate } from "react-router-dom";

export const AcceptRequestAPostPopup = () => {
  const dispatch = useAppDispatch();
  const {getPath} = useAppNavigation();
  const navigate = useNavigate();
  const {acceptArticleCreationRequests} = useFirebase();
  const postId = getPath().pathArray[getPath().pathArray.length - 1];

  const closePopup = () => {
    dispatch(setIsAcceptRequestAPostPopup(false));
  };

  const handleAccept = () => {
    acceptArticleCreationRequests(postId)
      .then(() => {
        console.log("Request is accepted successfully");
        closePopup();
        navigate("/dashboard");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <PopupWrapper className="relative z-10">
        <h2>
          Are you sure you want to accept this request to create an article?
        </h2>
        <footer>
          <Button variant="ghost" onClick={closePopup}>
            cancel
          </Button>
          <Button className="" variant="confirm" onClick={handleAccept}>
            accept
          </Button>
        </footer>
      </PopupWrapper>
      <PopupShadow />
    </div>
  );
};
